// Simple authentication utility for testing
export const auth = {
  // Simulate login
  login: () => {
    const token = 'demo_user_token_' + Date.now()
    localStorage.setItem('user_token', token)
    return true
  },

  // Simulate logout
  logout: () => {
    localStorage.removeItem('user_token')
    sessionStorage.removeItem('user_session')
    return true
  },

  // Check if user is logged in
  isLoggedIn: () => {
    return localStorage.getItem('user_token') || sessionStorage.getItem('user_session')
  },

  // Auto-login for demo purposes
  autoLogin: () => {
    if (!auth.isLoggedIn()) {
      auth.login()
    }
  }
}
