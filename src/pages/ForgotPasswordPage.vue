<template>
  <div class="forgot-password-page">
    <div class="forgot-password-container">
      <!-- App Logo Section -->
      <div class="app-logo-section">
        <div class="app-logo">
          <img
            src="../assets/thumbnail.png"
            alt="English Vocabulary App"
            class="logo-image"
          />
        </div>
      </div>

      <!-- Reset Form Section -->
      <div class="auth-section">
        <!-- Reset Password Title -->
        <div class="page-header">
          <h1 class="page-title">Quên mật khẩu</h1>
          <p class="page-subtitle">
            Nhập email của bạn và chúng tôi sẽ gửi cho bạn liên kết để đặt lại mật khẩu.
          </p>
        </div>

        <!-- Reset Form -->
        <div class="auth-form" v-if="!emailSent">
          <!-- Email Field -->
          <div class="form-group">
            <label class="form-label">Địa chỉ email</label>
            <div class="input-wrapper">
              <input
                v-model="resetForm.email"
                type="email"
                placeholder="Nhập địa chỉ email của bạn"
                class="form-input"
                :class="{ error: errors.email }"
              />
            </div>
            <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
          </div>

          <!-- Reset Button -->
          <button
            type="submit"
            class="reset-button"
            :disabled="loading"
            @click="handlePasswordReset"
          >
            <span v-if="loading">Đang gửi...</span>
            <span v-else>Gửi liên kết đặt lại</span>
          </button>

          <!-- Back to Login -->
          <div class="back-to-login">
            <button type="button" class="back-link" @click="$router.push('/login')">
              ← Quay lại đăng nhập
            </button>
          </div>
        </div>

        <!-- Success Message -->
        <div class="success-section" v-else>
          <div class="success-icon">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="24" cy="24" r="24" fill="#10B981" />
              <path
                d="M18 24l6 6 12-12"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h2 class="success-title">Email đã được gửi!</h2>
          <p class="success-message">
            Chúng tôi đã gửi liên kết đặt lại mật khẩu đến địa chỉ email
            <strong>{{ resetForm.email }}</strong>
          </p>
          <p class="success-note">
            Vui lòng kiểm tra hộp thư đến của bạn và làm theo hướng dẫn để đặt lại mật khẩu.
          </p>

          <button
            type="button"
            class="resend-button"
            @click="handleResendEmail"
            :disabled="resendLoading"
          >
            <span v-if="resendLoading">Đang gửi lại...</span>
            <span v-else>Gửi lại email</span>
          </button>

          <div class="back-to-login">
            <button type="button" class="back-link" @click="$router.push('/login')">
              ← Quay lại đăng nhập
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'


// Form state
const resetForm = reactive({
  email: '',
})

const loading = ref(false)
const resendLoading = ref(false)
const emailSent = ref(false)
const errors = reactive({
  email: '',
})

// Validation
const validateForm = () => {
  errors.email = ''

  if (!resetForm.email.trim()) {
    errors.email = 'Vui lòng nhập địa chỉ email'
    return false
  }

  if (!/\S+@\S+\.\S+/.test(resetForm.email)) {
    errors.email = 'Địa chỉ email không hợp lệ'
    return false
  }

  return true
}

// Handle password reset
const handlePasswordReset = async () => {
  if (!validateForm()) return

  loading.value = true

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Show success message
    emailSent.value = true
  } catch (error) {
    console.error('Password reset failed:', error)
    errors.email = 'Có lỗi xảy ra. Vui lòng thử lại.'
  } finally {
    loading.value = false
  }
}

// Handle resend email
const handleResendEmail = async () => {
  resendLoading.value = true

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Show confirmation (you could add a toast notification here)
    console.log('Email resent successfully')
  } catch (error) {
    console.error('Resend failed:', error)
  } finally {
    resendLoading.value = false
  }
}
</script>

<style scoped>
.forgot-password-page {
  min-height: 100vh;
  background: #fffefc;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.forgot-password-container {
  display: flex;
  width: 100%;
  max-width: 1200px;
  min-height: 700px;
  gap: 40px;
  align-items: center;
}

/* App Logo Section */
.app-logo-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-image {
  width: 100%;
  max-width: 680px;
  height: auto;
  border-radius: 29px;
  object-fit: cover;
}

/* Auth Section */
.auth-section {
  width: 100%;
  max-width: 454px;
  padding: 0 20px;
}

.page-header {
  text-align: center;
  margin-bottom: 40px;
}

.page-title {
  color: #000;
  font-family: 'Poppins', sans-serif;
  font-size: 32px;
  font-weight: 600;
  margin: 0 0 16px 0;
}

.page-subtitle {
  color: #5b5b5b;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
}

/* Form Styles */
.auth-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  color: #000;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
}

.input-wrapper {
  position: relative;
}

.form-input {
  width: 100%;
  height: 54px;
  padding: 0 20px;
  border: 1px solid #2563eb;
  border-radius: 40px;
  background: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: 300;
  color: #000;
  outline: none;
  transition: all 0.3s ease;
}

.form-input::placeholder {
  color: #acacac;
}

.form-input:focus {
  border-color: #1d4ed8;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.form-input.error {
  border-color: #ef4444;
}

.error-message {
  color: #ef4444;
  font-size: 12px;
  font-family: 'Poppins', sans-serif;
}

/* Reset Button */
.reset-button {
  width: 100%;
  height: 49px;
  background: #2563eb;
  border: none;
  border-radius: 36px;
  color: white;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 12px;
}

.reset-button:hover:not(:disabled) {
  background: #1d4ed8;
  transform: translateY(-1px);
}

.reset-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Back to Login */
.back-to-login {
  text-align: center;
  margin-top: 20px;
}

.back-link {
  color: #2563eb;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s ease;
}

.back-link:hover {
  color: #1d4ed8;
  text-decoration: underline;
}

/* Success Section */
.success-section {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.success-icon {
  margin-bottom: 8px;
}

.success-title {
  color: #000;
  font-family: 'Poppins', sans-serif;
  font-size: 28px;
  font-weight: 600;
  margin: 0;
}

.success-message {
  color: #5b5b5b;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
}

.success-note {
  color: #6b7280;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
}

.resend-button {
  width: 100%;
  height: 49px;
  background: #10b981;
  border: none;
  border-radius: 36px;
  color: white;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s ease;
}

.resend-button:hover:not(:disabled) {
  background: #059669;
  transform: translateY(-1px);
}

.resend-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .forgot-password-container {
    flex-direction: column;
    gap: 20px;
  }

  .app-logo-section {
    max-width: 400px;
  }

  .auth-section {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .forgot-password-page {
    padding: 10px;
  }

  .forgot-password-container {
    min-height: auto;
  }

  .logo-image {
    max-width: 300px;
  }

  .auth-section {
    padding: 0 10px;
  }

  .page-title {
    font-size: 28px;
  }

  .page-subtitle {
    font-size: 14px;
  }

  .form-label {
    font-size: 14px;
  }

  .form-input {
    height: 48px;
    font-size: 14px;
  }

  .success-title {
    font-size: 24px;
  }

  .success-message {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 24px;
  }

  .page-subtitle {
    font-size: 13px;
  }

  .success-title {
    font-size: 20px;
  }

  .success-message {
    font-size: 13px;
  }
}
</style>
