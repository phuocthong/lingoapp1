// Enhanced authentication utility
export const auth = {
  // Simulate login with user data
  login: (userData = null, rememberMe = false) => {
    const token = 'demo_user_token_' + Date.now()
    const user = userData || {
      id: 1,
      username: 'nguoidung',
      email: 'nguoidung@example.com',
      name: 'Người dùng',
      avatar:
        'https://cdn.builder.io/o/assets%2Ff046890c17ca436cab38cffc651fb9cb%2Fd0e1a2af26da485f8609e3080da7d7b8?alt=media&token=aca82dee-2b72-4297-9d9d-7921d490a327&apiKey=f046890c17ca436cab38cffc651fb9cb',
      level: 10,
      xp: 1000,
      streak: 15,
    }

    if (rememberMe) {
      localStorage.setItem('user_token', token)
      localStorage.setItem('user_data', JSON.stringify(user))
    } else {
      sessionStorage.setItem('user_session', token)
      sessionStorage.setItem('user_data', JSON.stringify(user))
    }

    return { success: true, user, token }
  },

  // Simulate logout
  logout: () => {
    localStorage.removeItem('user_token')
    localStorage.removeItem('user_data')
    sessionStorage.removeItem('user_session')
    sessionStorage.removeItem('user_data')
    return { success: true }
  },

  // Check if user is logged in
  isLoggedIn: () => {
    return !!(localStorage.getItem('user_token') || sessionStorage.getItem('user_session'))
  },

  // Get current user data
  getCurrentUser: () => {
    const userData = localStorage.getItem('user_data') || sessionStorage.getItem('user_data')
    return userData ? JSON.parse(userData) : null
  },

  // Get current token
  getToken: () => {
    return localStorage.getItem('user_token') || sessionStorage.getItem('user_session')
  },

  // Simulate registration
  register: async (userData) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // For demo, just log them in after registration
    return auth.login({
      id: Date.now(),
      username: userData.username,
      email: userData.email,
      name: userData.username,
      avatar:
        'https://cdn.builder.io/o/assets%2Ff046890c17ca436cab38cffc651fb9cb%2Fd0e1a2af26da485f8609e3080da7d7b8?alt=media&token=aca82dee-2b72-4297-9d9d-7921d490a327&apiKey=f046890c17ca436cab38cffc651fb9cb',
      level: 1,
      xp: 0,
      streak: 0,
    })
  },

  // Simulate password reset
  forgotPassword: async (email) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // For demo, always return success
    return { success: true, message: 'Password reset email sent' }
  },

  // Auto-login for demo purposes (only in dashboard layout)
  autoLogin: () => {
    if (!auth.isLoggedIn()) {
      auth.login()
    }
  },
}

// Export individual functions for backward compatibility
export const login = auth.login
export const logout = auth.logout
export const isLoggedIn = auth.isLoggedIn
