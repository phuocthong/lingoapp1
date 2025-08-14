// Utility to suppress ResizeObserver errors and other layout-related errors

export function suppressResizeObserverErrors() {
  // Override console.error to filter out ResizeObserver errors
  const originalConsoleError = console.error
  console.error = function (...args) {
    const errorMessage = args[0]

    // Check if it's a ResizeObserver error
    if (
      typeof errorMessage === 'string' &&
      errorMessage.includes('ResizeObserver loop completed with undelivered notifications')
    ) {
      return // Suppress this error
    }

    // Allow other errors through
    originalConsoleError.apply(console, args)
  }

  // Handle global error events
  window.addEventListener('error', (event) => {
    if (event.message && event.message.includes('ResizeObserver loop completed')) {
      event.preventDefault()
      event.stopPropagation()
      return false
    }
  })

  // Handle unhandled promise rejections that might be ResizeObserver related
  window.addEventListener('unhandledrejection', (event) => {
    if (event.reason && event.reason.message && event.reason.message.includes('ResizeObserver')) {
      event.preventDefault()
      return false
    }
  })

  // Additional protection for development overlays
  const removeDevOverlays = () => {
    const overlays = [
      '#webpack-dev-server-client-overlay',
      '#webpack-dev-server-client-overlay-div',
      '.webpack-dev-server-client-overlay',
    ]

    overlays.forEach((selector) => {
      const element = document.querySelector(selector)
      if (element && element.textContent && element.textContent.includes('ResizeObserver')) {
        element.style.display = 'none'
      }
    })
  }

  // Check for overlays periodically in development
  if (process.env.NODE_ENV === 'development') {
    setInterval(removeDevOverlays, 100)
  }
}

// Debounce function to prevent excessive ResizeObserver callbacks
export function debounceResizeObserver(callback, delay = 16) {
  let timeoutId
  return function (...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => callback.apply(this, args), delay)
  }
}

// Create a stable ResizeObserver that won't cause loops
export function createStableResizeObserver(callback) {
  let isObserving = false

  const debouncedCallback = debounceResizeObserver((entries) => {
    if (!isObserving) return

    try {
      callback(entries)
    } catch (error) {
      if (!error.message.includes('ResizeObserver')) {
        console.error('ResizeObserver callback error:', error)
      }
    }
  }, 16)

  const observer = new ResizeObserver(debouncedCallback)

  return {
    observe(target, options) {
      isObserving = true
      observer.observe(target, options)
    },
    unobserve(target) {
      observer.unobserve(target)
    },
    disconnect() {
      isObserving = false
      observer.disconnect()
    },
  }
}

// Suppress API connection errors in development
export function suppressApiErrors() {
  // Global error handler for API fetch errors
  const originalFetch = window.fetch
  window.fetch = async function (...args) {
    try {
      const response = await originalFetch.apply(this, args)
      return response
    } catch (error) {
      // Silently handle connection errors
      if (error.message.includes('Failed to fetch') ||
          error.message.includes('NetworkError') ||
          error.name === 'AbortError' ||
          error.message.includes('net::ERR_')) {
        const url = args[0]
        // Only log localhost API connection issues once
        if (url && url.includes('localhost:3000') && !window._localhostWarningShown) {
          console.log('🔄 Backend API connection failed - using demo mode')
          window._localhostWarningShown = true
        }
        // Return a mock response for demo purposes
        return {
          ok: false,
          status: 503,
          json: async () => ({ success: false, message: 'Backend unavailable - demo mode' }),
        }
      }
      throw error
    }
  }

  // Also suppress console errors for fetch failures
  const originalConsoleError = console.error
  console.error = function (...args) {
    const errorMessage = args[0]
    if (typeof errorMessage === 'string') {
      // Suppress fetch-related errors to localhost
      if (errorMessage.includes('Failed to fetch') &&
          JSON.stringify(args).includes('localhost:3000')) {
        return
      }
    }
    originalConsoleError.apply(console, args)
  }
}
