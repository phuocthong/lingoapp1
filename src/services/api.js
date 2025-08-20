// API Base URL - adjust for your backend
const isCloudEnvironment =
  typeof window !== 'undefined' &&
  window.location.hostname !== 'localhost' &&
  window.location.hostname !== '127.0.0.1'

const API_BASE = isCloudEnvironment
  ? 'https://demo-api-unavailable.com/api' // Backend not available in cloud demo
  : 'http://localhost:3003/api'

class ApiService {
  constructor() {
    this.baseURL = API_BASE
  }

  // Mock response handler for demo mode
  async getMockResponse(endpoint, options = {}) {
    const { getMockLeaderboard, getMockQuestions, getMockTasks, mockSubmitAnswer } = await import(
      './mockData.js'
    )

    // Parse endpoint and return appropriate mock data
    if (endpoint.includes('/progress/leaderboard')) {
      const params = new URLSearchParams(endpoint.split('?')[1] || '')
      const period = params.get('period') || 'week'
      const limit = parseInt(params.get('limit') || '10')
      return getMockLeaderboard(period, limit)
    }

    if (endpoint.includes('/vocabulary/questions')) {
      const params = new URLSearchParams(endpoint.split('?')[1] || '')
      return getMockQuestions({
        count: params.get('count') || 1,
        difficulty: params.get('difficulty'),
        type: params.get('type'),
      })
    }

    if (endpoint === '/tasks') {
      return getMockTasks()
    }

    if (endpoint.includes('/vocabulary/questions/') && endpoint.includes('/answer')) {
      const questionId = endpoint.split('/')[3]
      const answerData = options.body ? JSON.parse(options.body) : {}
      return mockSubmitAnswer(questionId, answerData)
    }

    if (endpoint === '/user/upload-avatar') {
      const body = options.body ? JSON.parse(options.body) : {}
      return {
        success: true,
        message: 'Avatar uploaded successfully (demo mode)',
        avatarUrl: body.image, // Use the base64 image data directly in demo mode
        user: {
          id: 1,
          username: 'demo_user',
          name: 'Demo User',
          avatar: body.image,
        },
      }
    }

    if (endpoint === '/user/profile' && options.method === 'PUT') {
      const body = options.body ? JSON.parse(options.body) : {}
      return {
        success: true,
        message: 'Profile updated successfully (demo mode)',
        user: {
          id: 1,
          username: body.username || 'demo_user',
          email: body.email || 'demo@example.com',
          name: body.name || 'Demo User',
          avatar: body.avatar || '',
          phone: body.phone || '',
          bio: body.bio || '',
          isPublicProfile: body.isPublicProfile ?? true,
          allowFriendRequests: body.allowFriendRequests ?? true,
          level: 5,
          xp: 1250,
          streak: 7,
        },
      }
    }

    if (endpoint === '/friends') {
      return {
        success: true,
        friends: [
          {
            id: 2,
            name: 'Minh Anh',
            username: 'minhanh',
            avatar:
              'https://api.builder.io/api/v1/image/assets/TEMP/94861390f9be0eb42544493a89935a3e8537e779?width=55',
            level: 8,
            streak: 12,
            xp: 1800,
            friendshipId: 1,
          },
          {
            id: 3,
            name: 'Thành Hòa',
            username: 'thanhhoa',
            avatar:
              'https://api.builder.io/api/v1/image/assets/TEMP/808cc85b683761b4f2649b219713e811950b7da6?width=55',
            level: 6,
            streak: 8,
            xp: 1200,
            friendshipId: 2,
          },
          {
            id: 4,
            name: 'Thu Trang',
            username: 'thutrang',
            avatar:
              'https://api.builder.io/api/v1/image/assets/TEMP/d0b0d0d7bf9e895d63b544b8849b7b88a157a184?width=55',
            level: 12,
            streak: 20,
            xp: 3200,
            friendshipId: 3,
          },
        ],
      }
    }

    if (endpoint === '/friends/requests') {
      return {
        success: true,
        incoming: [
          {
            id: 5,
            name: 'Văn Nam',
            username: 'vannam',
            avatar:
              'https://api.builder.io/api/v1/image/assets/TEMP/94861390f9be0eb42544493a89935a3e8537e779?width=55',
            level: 7,
            streak: 10,
            friendshipId: 4,
            mutualFriends: 2,
          },
        ],
        outgoing: [],
      }
    }

    if (endpoint === '/friends/search') {
      const body = options.body ? JSON.parse(options.body) : {}
      const query = body.query || ''

      if (query.length < 2) {
        return { success: true, users: [] }
      }

      const mockUsers = [
        {
          id: 6,
          name: 'Lan Anh',
          username: 'lananh',
          avatar:
            'https://api.builder.io/api/v1/image/assets/TEMP/d0b0d0d7bf9e895d63b544b8849b7b88a157a184?width=55',
          level: 5,
          streak: 5,
          friendshipStatus: 'none',
          mutualFriends: 1,
        },
        {
          id: 7,
          name: 'Hòa Bình',
          username: 'hoabinh',
          avatar:
            'https://api.builder.io/api/v1/image/assets/TEMP/808cc85b683761b4f2649b219713e811950b7da6?width=55',
          level: 9,
          streak: 15,
          friendshipStatus: 'none',
          mutualFriends: 3,
        },
      ]

      const filtered = mockUsers.filter(
        (user) =>
          user.name.toLowerCase().includes(query.toLowerCase()) ||
          user.username.toLowerCase().includes(query.toLowerCase()),
      )

      return {
        success: true,
        users: filtered,
      }
    }

    if (endpoint.includes('/friends/add')) {
      return {
        success: true,
        message: 'Friend request sent successfully (demo mode)',
      }
    }

    if (endpoint.includes('/friends/accept/')) {
      return {
        success: true,
        message: 'Friend request accepted (demo mode)',
      }
    }

    // Default success response for other endpoints
    return {
      success: true,
      message: 'Demo mode - feature not implemented',
      data: null,
    }
  }

  // Get authorization header
  getAuthHeader() {
    const token = localStorage.getItem('user_token') || sessionStorage.getItem('user_session')
    return token ? { Authorization: `Bearer ${token}` } : {}
  }

  // Generic API request method
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...this.getAuthHeader(),
        ...options.headers,
      },
      ...options,
    }

    console.log(`🌐 API Request: ${options.method || 'GET'} ${url}`)
    console.log('Is cloud environment:', isCloudEnvironment)

    try {
      // In cloud environment, return mock data for demo
      if (isCloudEnvironment) {
        console.log('☁️ Using cloud mock data')
        return await this.getMockResponse(endpoint, options)
      }

      console.log('🔥 Making real API call...')
      const response = await fetch(url, config)
      const data = await response.json()

      console.log('📡 API Response:', response.status, data)

      if (!response.ok) {
        throw new Error(data.message || 'API request failed')
      }

      return data
    } catch (error) {
      console.log('❌ API Error:', error.message)
      // In development, if backend is not available, fall back to mock data
      if (
        error.message.includes('Failed to fetch') ||
        error.message.includes('NetworkError') ||
        error.message.includes('net::ERR_')
      ) {
        console.log('🎭 Falling back to mock data')
        return await this.getMockResponse(endpoint, options)
      }

      console.error(`API Error (${endpoint}):`, error)
      throw error
    }
  }

  // Authentication endpoints
  async login(username, password) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    })
  }

  async register(userData) {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    })
  }

  async logout() {
    return this.request('/auth/logout', { method: 'POST' })
  }

  async forgotPassword(email) {
    return this.request('/auth/forgot-password', {
      method: 'POST',
      body: JSON.stringify({ email }),
    })
  }

  // User endpoints
  async getUserProfile() {
    return this.request('/user/profile')
  }

  async updateProfile(profileData) {
    return this.request('/user/profile', {
      method: 'PUT',
      body: JSON.stringify(profileData),
    })
  }

  async uploadAvatar(imageData, filename) {
    return this.request('/user/upload-avatar', {
      method: 'POST',
      body: JSON.stringify({ image: imageData, filename }),
    })
  }

  async changePassword(passwordData) {
    return this.request('/user/password', {
      method: 'PUT',
      body: JSON.stringify(passwordData),
    })
  }

  async getUserStats() {
    return this.request('/user/stats')
  }

  // Vocabulary endpoints
  async getVocabulary(params = {}) {
    const query = new URLSearchParams(params).toString()
    return this.request(`/vocabulary${query ? `?${query}` : ''}`)
  }

  async getQuestions(params = {}) {
    const query = new URLSearchParams(params).toString()
    return this.request(`/vocabulary/questions${query ? `?${query}` : ''}`)
  }

  async submitAnswer(questionId, answerData) {
    return this.request(`/vocabulary/questions/${questionId}/answer`, {
      method: 'POST',
      body: JSON.stringify(answerData),
    })
  }

  // Room endpoints
  async getRooms(status = 'waiting') {
    return this.request(`/rooms?status=${status}`)
  }

  async createRoom(roomData) {
    return this.request('/rooms', {
      method: 'POST',
      body: JSON.stringify(roomData),
    })
  }

  async getRoom(roomId) {
    return this.request(`/rooms/${roomId}`)
  }

  async joinRoom(roomId) {
    return this.request(`/rooms/${roomId}/join`, { method: 'POST' })
  }

  async leaveRoom(roomId) {
    return this.request(`/rooms/${roomId}/leave`, { method: 'DELETE' })
  }

  // Task endpoints
  async getTasks() {
    return this.request('/tasks')
  }

  async claimTaskReward(taskId) {
    return this.request(`/tasks/${taskId}/claim`, { method: 'POST' })
  }

  async updateTaskProgress(taskId, increment = 1) {
    return this.request(`/tasks/${taskId}/progress`, {
      method: 'POST',
      body: JSON.stringify({ increment }),
    })
  }

  // Friend endpoints
  async getFriends() {
    return this.request('/friends')
  }

  async getFriendRequests() {
    return this.request('/friends/requests')
  }

  async searchUsers(query) {
    return this.request('/friends/search', {
      method: 'POST',
      body: JSON.stringify({ query }),
    })
  }

  async addFriend(userId) {
    return this.request('/friends/add', {
      method: 'POST',
      body: JSON.stringify({ userId }),
    })
  }

  async acceptFriend(friendshipId) {
    return this.request(`/friends/accept/${friendshipId}`, { method: 'POST' })
  }

  async removeFriend(friendshipId) {
    return this.request(`/friends/${friendshipId}`, { method: 'DELETE' })
  }

  // Reward endpoints
  async getRewards(category) {
    const query = category ? `?category=${category}` : ''
    return this.request(`/rewards${query}`)
  }

  async redeemReward(rewardId) {
    return this.request(`/rewards/${rewardId}/redeem`, { method: 'POST' })
  }

  async getTransactions(params = {}) {
    const query = new URLSearchParams(params).toString()
    return this.request(`/rewards/transactions${query ? `?${query}` : ''}`)
  }

  // Progress endpoints
  async getProgress(params = {}) {
    const query = new URLSearchParams(params).toString()
    return this.request(`/progress${query ? `?${query}` : ''}`)
  }

  async recordProgress(progressData) {
    return this.request('/progress/record', {
      method: 'POST',
      body: JSON.stringify(progressData),
    })
  }

  async getLeaderboard(period = 'week', limit = 10) {
    return this.request(`/progress/leaderboard?period=${period}&limit=${limit}`)
  }
}

// Export singleton instance
export const apiService = new ApiService()
export default apiService
