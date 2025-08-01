<template>
  <div class="login-page">
    <div class="login-container">
      <!-- App Logo Section -->
      <div class="app-logo-section">
        <div class="app-logo">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets%2Ff046890c17ca436cab38cffc651fb9cb%2F2f58a553e41b49a5aed3a7ab28e72a98?format=webp&width=800" 
            alt="English Vocabulary App"
            class="logo-image"
          />
        </div>
      </div>

      <!-- Auth Form Section -->
      <div class="auth-section">
        <!-- Lingo Challenge Brand -->
        <div class="brand-header">
          <img 
            src="https://cdn.builder.io/o/assets%2Ff046890c17ca436cab38cffc651fb9cb%2Fe58ecc89c116450db70e65318c82b89d?alt=media&token=a4091b44-ab16-4937-956a-505cb03c063e&apiKey=f046890c17ca436cab38cffc651fb9cb" 
            alt="Lingo Challenge"
            class="brand-image"
          />
        </div>

        <!-- Tab Navigation -->
        <div class="auth-tabs">
          <button 
            class="tab-button active"
            @click="$router.push('/login')"
          >
            Đăng nhập
          </button>
          <button 
            class="tab-button"
            @click="$router.push('/register')"
          >
            Đăng ký
          </button>
        </div>

        <!-- Auth Form -->
        <div class="auth-form">
          <!-- Welcome Message -->
          <p class="welcome-message">
            Hãy cùng chúng tôi thử thách từ vựng, kết nối bạn bè.
          </p>

          <!-- Username Field -->
          <div class="form-group">
            <label class="form-label">Tên đăng nhập</label>
            <div class="input-wrapper">
              <input 
                v-model="loginForm.username"
                type="text" 
                placeholder="Nhập tên đăng nhập của bạn"
                class="form-input"
                :class="{ 'error': errors.username }"
              />
            </div>
            <span v-if="errors.username" class="error-message">{{ errors.username }}</span>
          </div>

          <!-- Password Field -->
          <div class="form-group">
            <label class="form-label">Mật khẩu</label>
            <div class="input-wrapper">
              <input 
                v-model="loginForm.password"
                :type="showPassword ? 'text' : 'password'" 
                placeholder="Nhập mật khẩu"
                class="form-input"
                :class="{ 'error': errors.password }"
              />
              <button 
                type="button"
                class="password-toggle"
                @click="showPassword = !showPassword"
              >
                <svg 
                  width="18" 
                  height="18" 
                  viewBox="0 0 18 18" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g v-if="!showPassword" clip-path="url(#clip0_13_410)">
                    <path d="M8.86304 6.14936L11.4397 8.72604L11.452 8.59107C11.452 7.23728 10.3518 6.13708 8.99801 6.13708L8.86304 6.14936Z" fill="black"/>
                    <path d="M8.99795 4.50103C11.2556 4.50103 13.0879 6.33335 13.0879 8.59102C13.0879 9.11863 12.9816 9.6217 12.7976 10.0839L15.1902 12.4765C16.4254 11.4458 17.3988 10.1125 18 8.59102C16.5808 5.00003 13.092 2.45605 8.99798 2.45605C7.85278 2.45605 6.75669 2.66054 5.73828 3.02864L7.50515 4.79141C7.96727 4.61146 8.47034 4.50103 8.99795 4.50103Z" fill="black"/>
                    <path d="M0.817983 2.27207L2.68301 4.1371L3.05521 4.5093C1.70552 5.56452 0.638037 6.96739 0 8.59109C1.41515 12.1821 4.90798 14.7261 8.99797 14.7261C10.2659 14.7261 11.4765 14.4807 12.5849 14.0348L12.9326 14.3825L15.317 16.771L16.36 15.7322L1.86093 1.22913L0.817983 2.27207ZM5.34153 6.79151L6.60533 8.05531C6.56852 8.2312 6.54398 8.40704 6.54398 8.59109C6.54398 9.94488 7.64417 11.0451 8.99797 11.0451C9.18202 11.0451 9.3579 11.0205 9.52968 10.9837L10.7935 12.2475C10.2495 12.5175 9.64421 12.6811 8.99797 12.6811C6.7403 12.6811 4.90798 10.8488 4.90798 8.59109C4.90798 7.94488 5.07159 7.33955 5.34153 6.79151Z" fill="black"/>
                  </g>
                  <g v-else>
                    <path d="M9 2.25C13.5 2.25 17.25 6 17.25 9C17.25 12 13.5 15.75 9 15.75C4.5 15.75 0.75 12 0.75 9C0.75 6 4.5 2.25 9 2.25ZM9 4.5C7.5 4.5 6.375 5.625 6.375 7.125V10.875C6.375 12.375 7.5 13.5 9 13.5C10.5 13.5 11.625 12.375 11.625 10.875V7.125C11.625 5.625 10.5 4.5 9 4.5Z" fill="black"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_13_410">
                      <rect width="18" height="18" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
            <span v-if="errors.password" class="error-message">{{ errors.password }}</span>
          </div>

          <!-- Remember Me & Forgot Password -->
          <div class="form-options">
            <label class="checkbox-wrapper">
              <input 
                v-model="loginForm.rememberMe"
                type="checkbox" 
                class="checkbox-input"
              />
              <span class="checkbox-text">Nhớ tài khoản này</span>
            </label>
            <button 
              type="button"
              class="forgot-password-link"
              @click="$router.push('/forgot-password')"
            >
              Quên mật khẩu
            </button>
          </div>

          <!-- Login Button -->
          <button 
            type="submit"
            class="login-button"
            :disabled="loading"
            @click="handleLogin"
          >
            <span v-if="loading">Đang đăng nhập...</span>
            <span v-else>Đăng nhập</span>
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
const loginForm = reactive({
  username: '',
  password: '',
  rememberMe: false
})

const showPassword = ref(false)
const loading = ref(false)
const errors = reactive({
  username: '',
  password: ''
})

// Validation
const validateForm = () => {
  errors.username = ''
  errors.password = ''
  
  let isValid = true
  
  if (!loginForm.username.trim()) {
    errors.username = 'Vui lòng nhập tên đăng nhập'
    isValid = false
  }
  
  if (!loginForm.password.trim()) {
    errors.password = 'Vui lòng nhập mật khẩu'
    isValid = false
  } else if (loginForm.password.length < 6) {
    errors.password = 'Mật khẩu phải có ít nhất 6 ký tự'
    isValid = false
  }
  
  return isValid
}

// Handle login
const handleLogin = async () => {
  if (!validateForm()) return
  
  loading.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Use the existing auth utility
    login()
    
    // Navigate to dashboard
    router.push('/dashboard')
  } catch (error) {
    console.error('Login failed:', error)
    errors.password = 'Đăng nhập thất bại. Vui lòng thử lại.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  background: #FFFEFC;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.login-container {
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

.brand-header {
  margin-bottom: 40px;
  text-align: center;
}

.brand-image {
  max-width: 320px;
  height: auto;
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
  background: #2563EB;
  font-weight: 500;
}

.tab-button:hover {
  background: rgba(255, 255, 255, 0.1);
}

.tab-button.active:hover {
  background: #2563EB;
}

/* Form Styles */
.auth-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.welcome-message {
  color: #5B5B5B;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0 0 20px 0;
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
  border: 1px solid #2563EB;
  border-radius: 40px;
  background: #FFF;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: 300;
  color: #000;
  outline: none;
  transition: all 0.3s ease;
}

.form-input::placeholder {
  color: #ACACAC;
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

/* Form Options */
.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
}

.checkbox-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.checkbox-input {
  width: 15px;
  height: 15px;
  border: 1px solid #000;
  background: #FFF;
  cursor: pointer;
}

.checkbox-text {
  color: #000;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 300;
}

.forgot-password-link {
  color: #000;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 300;
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: underline;
}

.forgot-password-link:hover {
  color: #2563EB;
}

/* Login Button */
.login-button {
  width: 100%;
  height: 49px;
  background: #2563EB;
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

.login-button:hover:not(:disabled) {
  background: #1d4ed8;
  transform: translateY(-1px);
}

.login-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .login-container {
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
  .login-page {
    padding: 10px;
  }
  
  .login-container {
    min-height: auto;
  }
  
  .logo-image {
    max-width: 300px;
  }
  
  .brand-image {
    max-width: 250px;
  }
  
  .auth-section {
    padding: 0 10px;
  }
  
  .welcome-message {
    font-size: 14px;
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
  
  .form-options {
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }
}
</style>
