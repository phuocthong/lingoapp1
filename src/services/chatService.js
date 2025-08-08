import { apiService } from './api.js'
import { auth } from '../utils/auth.js'

export class ChatService {
  constructor() {
    this.currentQuestion = null
    this.questionTimer = null
    this.answerTimer = null
    this.participants = new Set()
    this.questionHistory = []
    this.answersReceived = new Map()
    this.botInterval = null
    this.isActive = false
  }

  // Start the chat bot session
  async startBot() {
    if (this.isActive) return

    this.isActive = true
    console.log('🤖 Chat bot started')

    // Send welcome message
    this.sendBotMessage(
      'Xin chào! Tôi là EnglishBot. Tôi sẽ đưa ra các câu hỏi tiếng Anh định kỳ để các bạn trả lời.',
    )

    // Start asking questions every 30-60 seconds
    this.scheduleNextQuestion()
  }

  // Stop the chat bot
  stopBot() {
    this.isActive = false
    if (this.botInterval) {
      clearTimeout(this.botInterval)
      this.botInterval = null
    }
    if (this.questionTimer) {
      clearTimeout(this.questionTimer)
      this.questionTimer = null
    }
    if (this.answerTimer) {
      clearTimeout(this.answerTimer)
      this.answerTimer = null
    }
    console.log('🤖 Chat bot stopped')
  }

  // Schedule the next question
  scheduleNextQuestion() {
    if (!this.isActive) return

    // Fixed interval of 20 seconds
    const interval = 20000

    this.botInterval = setTimeout(() => {
      if (this.isActive) {
        this.askQuestion()
      }
    }, interval)
  }

  // Ask a new question
  async askQuestion() {
    try {
      // Get a random question from API (works in demo mode too)
      const response = await apiService.getQuestions({ count: 1, difficulty: 'easy' })

      if (response.success && response.questions.length > 0) {
        this.currentQuestion = response.questions[0]
        this.currentQuestion.startTime = new Date()
        this.answersReceived.clear()

        // Add to history first
        this.addToHistory(this.currentQuestion)

        // Send question to chat
        this.sendBotMessage(this.currentQuestion.question, true)

        // Trigger immediate history update
        setTimeout(() => {
          const event = new CustomEvent('historyUpdated', {
            detail: { history: this.questionHistory },
          })
          window.dispatchEvent(event)
          console.log('Immediate history update triggered after question')
        }, 100)

        // Set timer for showing answer (20 seconds)
        this.answerTimer = setTimeout(() => {
          this.showCorrectAnswer()
        }, 20000)
      } else {
        // Use fallback question if no questions returned
        this.askFallbackQuestion()
      }
    } catch (error) {
      console.error('Failed to get question:', error)
      // Use fallback question
      this.askFallbackQuestion()
    }
  }

  // Ask fallback question if API fails
  askFallbackQuestion() {
    const fallbackQuestions = [
      {
        id: 'fallback_1',
        question: 'Dịch từ "Beautiful" sang tiếng Việt',
        correctAnswer: 'đẹp',
        answers: [
          { text: 'đẹp', correct: true },
          { text: 'xấu', correct: false },
          { text: 'cao', correct: false },
          { text: 'thấp', correct: false },
        ],
      },
      {
        id: 'fallback_2',
        question: 'Dịch từ "Happy" sang tiếng Việt',
        correctAnswer: 'hạnh phúc',
        answers: [
          { text: 'hạnh phúc', correct: true },
          { text: 'buồn', correct: false },
          { text: 'tức giận', correct: false },
          { text: 'sợ hãi', correct: false },
        ],
      },
    ]

    this.currentQuestion = fallbackQuestions[Math.floor(Math.random() * fallbackQuestions.length)]
    this.currentQuestion.startTime = new Date()
    this.answersReceived.clear()

    // Add to history first
    this.addToHistory(this.currentQuestion)

    this.sendBotMessage(this.currentQuestion.question, true)

    // Trigger immediate history update
    setTimeout(() => {
      const event = new CustomEvent('historyUpdated', {
        detail: { history: this.questionHistory },
      })
      window.dispatchEvent(event)
      console.log('Immediate history update triggered after fallback question')
    }, 100)

    this.answerTimer = setTimeout(() => {
      this.showCorrectAnswer()
    }, 20000)
  }

  // Handle user answer
  async handleAnswer(answer, userName = 'Người dùng') {
    if (!this.currentQuestion) return

    const user = auth.getCurrentUser()
    const timestamp = new Date()

    // Record answer locally
    this.answersReceived.set(userName, {
      answer,
      timestamp,
      user: userName,
      avatar:
        user?.name
          ?.split(' ')
          .map((n) => n[0])
          .join('') || 'ND',
      questionStartTime: this.currentQuestion.startTime || new Date(),
    })

    // Try to submit to API if user is logged in
    if (user && this.currentQuestion.id) {
      try {
        const response = await apiService.submitAnswer(this.currentQuestion.id, {
          answer,
          timeSpent: 15000, // Approximate time
        })

        if (response.success) {
          // Update user progress
          await this.updateUserProgress(response.correct)
        }
      } catch (error) {
        console.error('Failed to submit answer to API:', error)
      }
    }

    // Show visual feedback
    this.showAnswerFeedback(userName, answer)
  }

  // Show correct answer
  showCorrectAnswer() {
    if (!this.currentQuestion) return

    const correctAnswer =
      this.currentQuestion.correctAnswer ||
      this.currentQuestion.answers?.find((a) => a.correct)?.text

    if (correctAnswer) {
      this.sendAnswerDisplay(`Đáp án đúng là: "${correctAnswer}"`)
    }

    // Update question history with results
    this.updateHistoryWithResults()

    // Add some mock participants for better demo experience
    if (this.answersReceived.size === 0) {
      this.addMockParticipants()
    }

    // Update history with current results
    this.updateHistoryWithResults()

    // Trigger history update in UI immediately and with delay
    const triggerHistoryUpdate = () => {
      const event = new CustomEvent('historyUpdated', {
        detail: { history: this.questionHistory },
      })
      window.dispatchEvent(event)
      console.log('Triggered history update, total questions:', this.questionHistory.length)
    }

    triggerHistoryUpdate()
    setTimeout(triggerHistoryUpdate, 500)

    // Schedule next question
    this.scheduleNextQuestion()

    // Clear current question
    this.currentQuestion = null
  }

  // Add question to history
  addToHistory(question) {
    const historyItem = {
      id: question.id || Date.now(),
      question: question.question,
      correctAnswer: question.correctAnswer || question.answers?.find((a) => a.correct)?.text,
      timestamp: new Date(),
      participants: [],
      stats: {
        totalAnswers: 0,
        correctAnswers: 0,
      },
    }

    this.questionHistory.unshift(historyItem)
    console.log(
      'Added question to history:',
      historyItem.question,
      'Total history:',
      this.questionHistory.length,
    )

    // Keep only last 20 questions
    if (this.questionHistory.length > 20) {
      this.questionHistory = this.questionHistory.slice(0, 20)
    }
  }

  // Update history with answer results
  updateHistoryWithResults() {
    if (this.questionHistory.length === 0) {
      console.log('No history to update')
      return
    }

    const currentItem = this.questionHistory[0]
    const participants = Array.from(this.answersReceived.values())

    // Sort participants by response time (fastest first)
    participants.sort((a, b) => a.timestamp - b.timestamp)

    currentItem.participants = participants.map((p, index) => ({
      id: index + 1,
      name: p.user,
      avatar: p.avatar,
      time: this.formatResponseTimeFromStart(p.timestamp, p.questionStartTime),
      correct: this.isAnswerCorrect(p.answer),
      responseTime: p.timestamp - (p.questionStartTime || currentItem.timestamp),
    }))

    currentItem.stats = {
      totalAnswers: participants.length,
      correctAnswers: participants.filter((p) => this.isAnswerCorrect(p.answer)).length,
    }

    console.log(
      'Updated history item with results:',
      currentItem.question,
      'Total:',
      currentItem.stats.totalAnswers,
      'Correct:',
      currentItem.stats.correctAnswers,
    )
  }

  // Check if answer is correct
  isAnswerCorrect(answer) {
    if (!this.currentQuestion) return false

    const correctAnswer =
      this.currentQuestion.correctAnswer ||
      this.currentQuestion.answers?.find((a) => a.correct)?.text

    return answer.toLowerCase().trim() === correctAnswer?.toLowerCase().trim()
  }

  // Format response time (legacy method)
  formatResponseTime(timestamp) {
    const now = new Date()
    const diff = Math.floor((now - timestamp) / 1000)
    return `${Math.max(1, 20 - diff)}.${Math.floor(Math.random() * 10)}s`
  }

  // Format response time from question start
  formatResponseTimeFromStart(answerTime, questionStartTime) {
    if (!questionStartTime) {
      return this.formatResponseTime(answerTime)
    }

    const responseTimeMs = answerTime - questionStartTime
    const responseTimeSec = Math.max(0.1, responseTimeMs / 1000)

    if (responseTimeSec < 1) {
      return `${(responseTimeSec * 1000).toFixed(0)}ms`
    } else if (responseTimeSec < 10) {
      return `${responseTimeSec.toFixed(1)}s`
    } else {
      return `${Math.floor(responseTimeSec)}s`
    }
  }

  // Update user progress
  async updateUserProgress(isCorrect) {
    try {
      const user = auth.getCurrentUser()
      if (!user) return

      // Try to record progress (works in demo mode)
      try {
        await apiService.recordProgress({
          questionsAnswered: 1,
          correctAnswers: isCorrect ? 1 : 0,
          xpEarned: isCorrect ? 10 : 2,
          timeSpent: 1, // 1 minute
        })

        // Update task progress
        await apiService.updateTaskProgress(1) // Complete questions task
      } catch {
        console.log('API not available, updating locally only')
      }

      if (isCorrect) {
        // Update user XP locally
        const updatedUser = { ...user, xp: user.xp + 10 }
        auth.updateLocalUser(updatedUser)
      }
    } catch (error) {
      console.error('Failed to update user progress:', error)
    }
  }

  // Send bot message (to be handled by chat component)
  sendBotMessage(message, isQuestion = false) {
    const event = new CustomEvent('botMessage', {
      detail: {
        message,
        isQuestion,
        timestamp: new Date(),
        participants: isQuestion ? this.generateMockParticipants() : null,
      },
    })
    window.dispatchEvent(event)
  }

  // Send answer display (to be handled by chat component)
  sendAnswerDisplay(message) {
    const event = new CustomEvent('answerDisplay', {
      detail: {
        message,
        timestamp: new Date(),
      },
    })
    window.dispatchEvent(event)
  }

  // Show answer feedback
  showAnswerFeedback(userName, answer) {
    const event = new CustomEvent('answerFeedback', {
      detail: {
        userName,
        answer,
        timestamp: new Date(),
      },
    })
    window.dispatchEvent(event)
  }

  // Generate mock participants for visual effect
  generateMockParticipants() {
    const mockUsers = [
      'https://api.builder.io/api/v1/image/assets/TEMP/94861390f9be0eb42544493a89935a3e8537e779?width=38',
      'https://api.builder.io/api/v1/image/assets/TEMP/808cc85b683761b4f2649b219713e811950b7da6?width=38',
      'https://api.builder.io/api/v1/image/assets/TEMP/d0b0d0d7bf9e895d63b544b8849b7b88a157a184?width=38',
    ]

    // Randomly select 2-3 participants
    const count = Math.floor(Math.random() * 2) + 2
    return mockUsers.slice(0, count)
  }

  // Add mock participants for demo purposes
  addMockParticipants() {
    if (!this.currentQuestion) return

    const mockUsers = [
      { name: 'Minh Anh', avatar: 'MA' },
      { name: 'Thu Trang', avatar: 'TT' },
      { name: 'Văn Nam', avatar: 'VN' },
      { name: 'Thành Hòa', avatar: 'TH' },
    ]

    const participantCount = Math.floor(Math.random() * 3) + 2 // 2-4 participants
    const questionStartTime = this.currentQuestion.startTime || new Date()

    for (let i = 0; i < participantCount; i++) {
      const user = mockUsers[i]
      if (!user) break

      // Simulate different response times
      const responseDelay = Math.random() * 15 + 2 // 2-17 seconds
      const answerTime = new Date(questionStartTime.getTime() + responseDelay * 1000)

      // Simulate correct/incorrect answers (80% correct rate)
      const isCorrect = Math.random() > 0.2
      const correctAnswer = this.currentQuestion.correctAnswer ||
        this.currentQuestion.answers?.find(a => a.correct)?.text || 'correct'

      const answers = ['đẹp', 'xấu', 'cao', 'thấp', 'thông minh', 'ngu ngốc', 'sáng tạo', 'phi thường']
      const answer = isCorrect ? correctAnswer : answers[Math.floor(Math.random() * answers.length)]

      this.answersReceived.set(user.name, {
        answer,
        timestamp: answerTime,
        user: user.name,
        avatar: user.avatar,
        questionStartTime,
      })
    }

    console.log(`Added ${participantCount} mock participants for question: ${this.currentQuestion.question}`)
  }

  // Get question history
  getHistory() {
    return this.questionHistory
  }

  // Get current question
  getCurrentQuestion() {
    return this.currentQuestion
  }

  // Check if bot is active
  isActive() {
    return this.isActive
  }
}

// Export singleton instance
export const chatService = new ChatService()
export default chatService
