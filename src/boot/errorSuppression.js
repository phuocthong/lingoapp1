// Boot file to immediately suppress ResizeObserver errors
// This runs before the Vue app is created

// Immediate ResizeObserver error suppression
(function() {
  // Override console.error immediately
  const originalConsoleError = console.error
  console.error = function(...args) {
    const errorMessage = args[0]
    
    if (typeof errorMessage === 'string' && 
        errorMessage.includes('ResizeObserver loop completed with undelivered notifications')) {
      return // Suppress this error
    }
    
    originalConsoleError.apply(console, args)
  }

  // Handle window errors immediately
  window.addEventListener('error', (event) => {
    if (event.message && event.message.includes('ResizeObserver loop completed')) {
      event.preventDefault()
      event.stopPropagation()
      return false
    }
  }, true) // Capture phase

  // Handle unhandled rejections
  window.addEventListener('unhandledrejection', (event) => {
    if (event.reason && event.reason.message && 
        event.reason.message.includes('ResizeObserver')) {
      event.preventDefault()
      return false
    }
  }, true)

  // Patch ResizeObserver constructor to add error handling
  if (window.ResizeObserver) {
    const OriginalResizeObserver = window.ResizeObserver
    window.ResizeObserver = class extends OriginalResizeObserver {
      constructor(callback) {
        const wrappedCallback = (entries, observer) => {
          try {
            callback(entries, observer)
          } catch (error) {
            if (!error.message.includes('ResizeObserver loop completed')) {
              throw error
            }
            // Silently catch and ignore ResizeObserver loop errors
          }
        }
        super(wrappedCallback)
      }
    }
  }
})()

export default () => {
  // Additional cleanup for development
  if (process.env.DEV) {
    const cleanupOverlays = () => {
      const selectors = [
        '#webpack-dev-server-client-overlay',
        '#webpack-dev-server-client-overlay-div',
        '.webpack-dev-server-client-overlay',
        '[data-vite-dev-client-overlay]'
      ]
      
      selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector)
        elements.forEach(element => {
          if (element.textContent && element.textContent.includes('ResizeObserver')) {
            element.style.display = 'none'
            element.remove()
          }
        })
      })
    }

    // Clean overlays immediately and periodically
    cleanupOverlays()
    setInterval(cleanupOverlays, 100)
  }
}
