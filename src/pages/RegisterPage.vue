<template>
  <div class="register-page">
    <div class="register-container">
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

      <!-- Auth Form Section -->
      <div class="auth-section">
        <!-- Create Account Title -->
        <div class="page-header">
          <h1 class="page-title">Tạo tài khoản</h1>
        </div>

        <!-- Tab Navigation -->
        <div class="auth-tabs">
          <button class="tab-button" @click="$router.push('/login')">Đăng nhập</button>
          <button class="tab-button active" @click="$router.push('/register')">Đăng ký</button>
        </div>

        <!-- Auth Form -->
        <div class="auth-form">
          <!-- Email Field -->
          <div class="form-group">
            <label class="form-label">Địa chỉ email</label>
            <div class="input-wrapper">
              <input
                v-model="registerForm.email"
                type="email"
                placeholder="Nhập địa chỉ email của bạn"
                class="form-input"
                :class="{ error: errors.email }"
              />
            </div>
            <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
          </div>

          <!-- Username Field -->
          <div class="form-group">
            <label class="form-label">Tên người dùng</label>
            <div class="input-wrapper">
              <input
                v-model="registerForm.username"
                type="text"
                placeholder="Nhập tên đăng nhập của bạn"
                class="form-input"
                :class="{ error: errors.username }"
              />
            </div>
            <span v-if="errors.username" class="error-message">{{ errors.username }}</span>
          </div>

          <!-- Password Field -->
          <div class="form-group">
            <label class="form-label">Mật khẩu</label>
            <div class="input-wrapper">
              <input
                v-model="registerForm.password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Nhập mật khẩu"
                class="form-input"
                :class="{ error: errors.password }"
              />
              <button type="button" class="password-toggle" @click="showPassword = !showPassword">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g v-if="!showPassword" clip-path="url(#clip0_13_410)">
                    <path
                      d="M8.86304 6.14936L11.4397 8.72604L11.452 8.59107C11.452 7.23728 10.3518 6.13708 8.99801 6.13708L8.86304 6.14936Z"
                      fill="black"
                    />
                    <path
                      d="M8.99795 4.50103C11.2556 4.50103 13.0879 6.33335 13.0879 8.59102C13.0879 9.11863 12.9816 9.6217 12.7976 10.0839L15.1902 12.4765C16.4254 11.4458 17.3988 10.1125 18 8.59102C16.5808 5.00003 13.092 2.45605 8.99798 2.45605C7.85278 2.45605 6.75669 2.66054 5.73828 3.02864L7.50515 4.79141C7.96727 4.61146 8.47034 4.50103 8.99795 4.50103Z"
                      fill="black"
                    />
                    <path
                      d="M0.817983 2.27207L2.68301 4.1371L3.05521 4.5093C1.70552 5.56452 0.638037 6.96739 0 8.59109C1.41515 12.1821 4.90798 14.7261 8.99797 14.7261C10.2659 14.7261 11.4765 14.4807 12.5849 14.0348L12.9326 14.3825L15.317 16.771L16.36 15.7322L1.86093 1.22913L0.817983 2.27207ZM5.34153 6.79151L6.60533 8.05531C6.56852 8.2312 6.54398 8.40704 6.54398 8.59109C6.54398 9.94488 7.64417 11.0451 8.99797 11.0451C9.18202 11.0451 9.3579 11.0205 9.52968 10.9837L10.7935 12.2475C10.2495 12.5175 9.64421 12.6811 8.99797 12.6811C6.7403 12.6811 4.90798 10.8488 4.90798 8.59109C4.90798 7.94488 5.07159 7.33955 5.34153 6.79151Z"
                      fill="black"
                    />
                  </g>
                  <g v-else>
                    <path
                      d="M9 2.25C13.5 2.25 17.25 6 17.25 9C17.25 12 13.5 15.75 9 15.75C4.5 15.75 0.75 12 0.75 9C0.75 6 4.5 2.25 9 2.25ZM9 4.5C7.5 4.5 6.375 5.625 6.375 7.125V10.875C6.375 12.375 7.5 13.5 9 13.5C10.5 13.5 11.625 12.375 11.625 10.875V7.125C11.625 5.625 10.5 4.5 9 4.5Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_13_410">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
            <span v-if="errors.password" class="error-message">{{ errors.password }}</span>
          </div>

          <!-- Terms and Privacy Policy -->
          <div class="terms-section">
            <label class="terms-wrapper">
              <input v-model="registerForm.agreeToTerms" type="checkbox" class="checkbox-input" />
              <span class="terms-text">
                Khi đăng ký, bạn phải đồng ý với
                <a href="#" class="terms-link">Các chính sách</a>
                và
                <a href="#" class="terms-link">Chính sách bảo mật</a>
                của chúng tôi.
              </span>
            </label>
            <span v-if="errors.agreeToTerms" class="error-message">{{ errors.agreeToTerms }}</span>
          </div>

          <!-- Register Button -->
          <button type="submit" class="register-button" :disabled="loading" @click="handleRegister">
            <span v-if="loading">Đang đăng ký...</span>
            <span v-else>Đăng ký</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '../utils/auth.js'

const router = useRouter()

// Form state
const registerForm = reactive({
  email: '',
  username: '',
  password: '',
  agreeToTerms: false,
})

const showPassword = ref(false)
const loading = ref(false)
const errors = reactive({
  email: '',
  username: '',
  password: '',
  agreeToTerms: '',
})

// Validation
const validateForm = () => {
  // Reset errors
  Object.keys(errors).forEach((key) => {
    errors[key] = ''
  })

  let isValid = true

  // Email validation
  if (!registerForm.email.trim()) {
    errors.email = 'Vui lòng nhập địa chỉ email'
    isValid = false
  } else if (!/\S+@\S+\.\S+/.test(registerForm.email)) {
    errors.email = 'Địa chỉ email không hợp lệ'
    isValid = false
  }

  // Username validation
  if (!registerForm.username.trim()) {
    errors.username = 'Vui lòng nh���p tên người dùng'
    isValid = false
  } else if (registerForm.username.length < 3) {
    errors.username = 'Tên người dùng phải có ít nhất 3 ký tự'
    isValid = false
  }

  // Password validation
  if (!registerForm.password.trim()) {
    errors.password = 'Vui lòng nhập mật khẩu'
    isValid = false
  } else if (registerForm.password.length < 6) {
    errors.password = 'Mật khẩu phải có ít nhất 6 ký tự'
    isValid = false
  }

  // Terms agreement validation
  if (!registerForm.agreeToTerms) {
    errors.agreeToTerms = 'Bạn phải đồng ý với các điều khoản và chính sách'
    isValid = false
  }

  return isValid
}

// Handle registration
const handleRegister = async () => {
  if (!validateForm()) return

  loading.value = true

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Use the existing auth utility
    login()

    // Navigate to dashboard
    router.push('/dashboard')
  } catch (error) {
    console.error('Registration failed:', error)
    errors.email = 'Đăng ký thất bại. Vui lòng thử lại.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.register-page {
  min-height: 100vh;
  background: #fffefc;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.register-container {
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
  max-width: 435px;
  padding: 0 20px;
}

.page-header {
  text-align: center;
  margin-bottom: 20px;
}

.page-title {
  color: #000;
  font-family: 'Poppins', sans-serif;
  font-size: 25px;
  font-weight: 400;
  margin: 0;
}

/* Tab Navigation */
.auth-tabs {
  display: flex;
  background: rgba(37, 99, 235, 0.6);
  border-radius: 33px;
  padding: 4px;
  margin-bottom: 30px;
  height: 59px;
  align-items: center;
}

.tab-button {
  flex: 1;
  height: 40px;
  border: none;
  border-radius: 20px;
  background: transparent;
  color: white;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-button.active {
  background: #2563eb;
  font-weight: 500;
}

.tab-button:hover {
  background: rgba(255, 255, 255, 0.1);
}

.tab-button.active:hover {
  background: #2563eb;
}

/* Form Styles */
.auth-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
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

.password-toggle {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.error-message {
  color: #ef4444;
  font-size: 12px;
  font-family: 'Poppins', sans-serif;
}

/* Terms Section */
.terms-section {
  margin: 10px 0;
}

.terms-wrapper {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  cursor: pointer;
}

.checkbox-input {
  width: 15px;
  height: 15px;
  border: 1px solid #b8b8d2;
  background: #fff;
  cursor: pointer;
  margin-top: 2px;
  flex-shrink: 0;
}

.terms-text {
  color: #858597;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
}

.terms-link {
  color: #858597;
  text-decoration: underline;
}

.terms-link:hover {
  color: #2563eb;
}

/* Register Button */
.register-button {
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
  margin-top: 20px;
}

.register-button:hover:not(:disabled) {
  background: #1d4ed8;
  transform: translateY(-1px);
}

.register-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .register-container {
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
  .register-page {
    padding: 10px;
  }

  .register-container {
    min-height: auto;
  }

  .logo-image {
    max-width: 300px;
  }

  .auth-section {
    padding: 0 10px;
  }

  .page-title {
    font-size: 22px;
  }

  .form-label {
    font-size: 14px;
  }

  .form-input {
    height: 48px;
    font-size: 14px;
  }

  .auth-tabs {
    height: 50px;
  }

  .tab-button {
    font-size: 14px;
    height: 36px;
  }

  .terms-text {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .auth-tabs {
    flex-direction: column;
    height: auto;
    gap: 8px;
    padding: 8px;
  }

  .tab-button {
    width: 100%;
    height: 40px;
  }

  .terms-wrapper {
    flex-direction: column;
    gap: 8px;
  }

  .checkbox-input {
    margin-top: 0;
  }
}
</style>
