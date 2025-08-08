// Import Quasar's Notify or use fallback
let Notify;
try {
  const quasar = await import('quasar');
  Notify = quasar.Notify;
} catch (e) {
  // Fallback notification system
  Notify = {
    create: (options) => {
      console.log(`${options.type?.toUpperCase() || 'INFO'}: ${options.message}`);
      // Simple browser notification as fallback
      if (typeof alert !== 'undefined') {
        if (options.type === 'negative') {
          alert('❌ ' + options.message);
        } else if (options.type === 'positive') {
          alert('✅ ' + options.message);
        } else {
          alert('ℹ️ ' + options.message);
        }
      }
    }
  };
}

export class NotificationService {
  // Success notifications
  static success(message, options = {}) {
    Notify.create({
      type: 'positive',
      message,
      position: 'top',
      timeout: 3000,
      icon: 'check_circle',
      ...options
    })
  }

  // Error notifications
  static error(message, options = {}) {
    Notify.create({
      type: 'negative',
      message,
      position: 'top',
      timeout: 5000,
      icon: 'error',
      ...options
    })
  }

  // Warning notifications
  static warning(message, options = {}) {
    Notify.create({
      type: 'warning',
      message,
      position: 'top',
      timeout: 4000,
      icon: 'warning',
      ...options
    })
  }

  // Info notifications
  static info(message, options = {}) {
    Notify.create({
      type: 'info',
      message,
      position: 'top',
      timeout: 3000,
      icon: 'info',
      ...options
    })
  }

  // Loading notification
  static loading(message = 'Đang xử lý...', options = {}) {
    return Notify.create({
      type: 'ongoing',
      message,
      position: 'top',
      spinner: true,
      timeout: 0, // Don't auto-dismiss
      ...options
    })
  }

  // Connection error
  static connectionError() {
    this.error('Không thể kết nối đến server. Vui lòng kiểm tra kết nối mạng.', {
      timeout: 6000,
      actions: [
        {
          label: 'Thử lại',
          color: 'white',
          handler: () => {
            window.location.reload()
          }
        }
      ]
    })
  }

  // API error
  static apiError(error, customMessage = null) {
    const message = customMessage || error.message || 'Đã xảy ra lỗi không mong muốn'
    
    this.error(message, {
      timeout: 5000,
      caption: error.code ? `Mã lỗi: ${error.code}` : undefined
    })
  }

  // Authentication error
  static authError() {
    this.warning('Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.', {
      timeout: 5000,
      actions: [
        {
          label: 'Đăng nhập',
          color: 'white',
          handler: () => {
            // Navigate to login page
            window.location.href = '/login'
          }
        }
      ]
    })
  }

  // Feature coming soon
  static comingSoon(feature = 'Tính năng này') {
    this.info(`${feature} sẽ sớm ra mắt!`, {
      icon: 'schedule',
      timeout: 3000
    })
  }

  // Achievement unlocked
  static achievement(title, description) {
    this.success(`🏆 ${title}`, {
      caption: description,
      timeout: 5000,
      icon: 'emoji_events',
      color: 'amber'
    })
  }

  // XP gained
  static xpGained(amount) {
    this.success(`+${amount} XP`, {
      icon: 'star',
      timeout: 2000,
      position: 'center'
    })
  }

  // Answer feedback
  static correctAnswer() {
    this.success('Chính xác! 🎉', {
      timeout: 2000,
      position: 'center'
    })
  }

  static wrongAnswer(correctAnswer) {
    this.error('Sai rồi! 😔', {
      caption: `Đáp án đúng: ${correctAnswer}`,
      timeout: 3000,
      position: 'center'
    })
  }

  // Friend request notifications
  static friendRequestSent(friendName) {
    this.success(`Đã gửi lời mời kết bạn đến ${friendName}`)
  }

  static friendRequestReceived(friendName) {
    this.info(`${friendName} đã gửi lời mời kết bạn`, {
      timeout: 8000,
      actions: [
        {
          label: 'Xem',
          color: 'white',
          handler: () => {
            // Navigate to friends page
            window.location.href = '/dashboard/friends'
          }
        }
      ]
    })
  }

  // Room notifications
  static roomJoined(roomName) {
    this.success(`Đã tham gia phòng "${roomName}"`)
  }

  static roomLeft() {
    this.info('Đã rời khỏi phòng')
  }

  static roomFull() {
    this.warning('Phòng đã đầy, không thể tham gia')
  }

  // Reward notifications
  static rewardRedeemed(rewardName, pointsUsed) {
    this.success(`Đã đổi thành công "${rewardName}"`, {
      caption: `Sử dụng ${pointsUsed} điểm`,
      timeout: 5000
    })
  }

  static insufficientPoints(required, current) {
    this.warning(`Không đủ điểm! Cần ${required} điểm, bạn có ${current} điểm`)
  }

  // Offline notification
  static offline() {
    this.warning('Mất kết nối mạng. Một số tính năng có thể bị hạn chế.', {
      timeout: 0,
      icon: 'wifi_off'
    })
  }

  static online() {
    this.success('Đã kết nối lại mạng', {
      timeout: 2000,
      icon: 'wifi'
    })
  }
}

// Export as default and named export
export default NotificationService
export const notify = NotificationService
