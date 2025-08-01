<template>
  <div class="change-password-page">
    <div class="change-password-container">
      <!-- Profile Sidebar -->
      <ProfileSidebar />

      <!-- Main Content -->
      <div class="change-password-content">
        <div class="page-header">
          <h1 class="page-title">Đổi mật khẩu</h1>
          <p class="page-subtitle">Cập nhật mật khẩu của bạn để bảo mật tài khoản</p>
        </div>

        <!-- Change Password Form -->
        <div class="change-password-form">
          <!-- Current Password -->
          <div class="form-group">
            <label class="form-label">Mật khẩu hiện tại</label>
            <div class="input-wrapper">
              <input
                v-model="passwordForm.currentPassword"
                :type="showCurrentPassword ? 'text' : 'password'"
                placeholder="Nhập mật khẩu hiện tại"
                class="form-input"
                :class="{ error: errors.currentPassword }"
              />
              <button
                type="button"
                class="password-toggle"
                @click="showCurrentPassword = !showCurrentPassword"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g v-if="!showCurrentPassword" clip-path="url(#clip0_13_410)">
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
            <span v-if="errors.currentPassword" class="error-message">{{
              errors.currentPassword
            }}</span>
          </div>

          <!-- New Password -->
          <div class="form-group">
            <label class="form-label">Mật khẩu mới</label>
            <div class="input-wrapper">
              <input
                v-model="passwordForm.newPassword"
                :type="showNewPassword ? 'text' : 'password'"
                placeholder="Nhập mật khẩu mới"
                class="form-input"
                :class="{ error: errors.newPassword }"
              />
              <button
                type="button"
                class="password-toggle"
                @click="showNewPassword = !showNewPassword"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g v-if="!showNewPassword" clip-path="url(#clip0_13_410)">
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
                </svg>
              </button>
            </div>
            <span v-if="errors.newPassword" class="error-message">{{ errors.newPassword }}</span>
            <div class="password-requirements">
              <div class="requirement" :class="{ met: passwordRequirements.length }">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 3L4.5 8.5L2 6"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Ít nhất 6 ký tự
              </div>
              <div class="requirement" :class="{ met: passwordRequirements.uppercase }">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 3L4.5 8.5L2 6"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Chứa chữ hoa
              </div>
              <div class="requirement" :class="{ met: passwordRequirements.lowercase }">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 3L4.5 8.5L2 6"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Chứa chữ thường
              </div>
              <div class="requirement" :class="{ met: passwordRequirements.number }">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 3L4.5 8.5L2 6"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Chứa số
              </div>
            </div>
          </div>

          <!-- Confirm Password -->
          <div class="form-group">
            <label class="form-label">Xác nhận mật khẩu mới</label>
            <div class="input-wrapper">
              <input
                v-model="passwordForm.confirmPassword"
                :type="showConfirmPassword ? 'text' : 'password'"
                placeholder="Nhập lại mật khẩu mới"
                class="form-input"
                :class="{ error: errors.confirmPassword }"
              />
              <button
                type="button"
                class="password-toggle"
                @click="showConfirmPassword = !showConfirmPassword"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g v-if="!showConfirmPassword" clip-path="url(#clip0_13_410)">
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
                </svg>
              </button>
            </div>
            <span v-if="errors.confirmPassword" class="error-message">{{
              errors.confirmPassword
            }}</span>
          </div>

          <!-- Action Buttons -->
          <div class="form-actions">
            <button type="button" class="cancel-button" @click="$router.push('/dashboard/profile')">
              Hủy
            </button>
            <button
              type="submit"
              class="change-password-button"
              :disabled="loading || !isFormValid"
              @click="handleChangePassword"
            >
              <span v-if="loading">Đang cập nhật...</span>
              <span v-else>Cập nhật mật khẩu</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import ProfileSidebar from '../components/ProfileSidebar.vue'

const router = useRouter()

// Form state
const passwordForm = reactive({
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
})

const showCurrentPassword = ref(false)
const showNewPassword = ref(false)
const showConfirmPassword = ref(false)
const loading = ref(false)
const errors = reactive({
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
})

// Password requirements validation
const passwordRequirements = computed(() => ({
  length: passwordForm.newPassword.length >= 6,
  uppercase: /[A-Z]/.test(passwordForm.newPassword),
  lowercase: /[a-z]/.test(passwordForm.newPassword),
  number: /\d/.test(passwordForm.newPassword),
}))

// Form validation
const isFormValid = computed(() => {
  return (
    passwordForm.currentPassword.trim() &&
    passwordForm.newPassword.trim() &&
    passwordForm.confirmPassword.trim() &&
    passwordRequirements.value.length &&
    passwordRequirements.value.uppercase &&
    passwordRequirements.value.lowercase &&
    passwordRequirements.value.number &&
    passwordForm.newPassword === passwordForm.confirmPassword
  )
})

const validateForm = () => {
  // Reset errors
  Object.keys(errors).forEach((key) => {
    errors[key] = ''
  })

  let isValid = true

  // Current password validation
  if (!passwordForm.currentPassword.trim()) {
    errors.currentPassword = 'Vui lòng nhập mật khẩu hiện tại'
    isValid = false
  }

  // New password validation
  if (!passwordForm.newPassword.trim()) {
    errors.newPassword = 'Vui lòng nhập mật khẩu mới'
    isValid = false
  } else if (!passwordRequirements.value.length) {
    errors.newPassword = 'Mật khẩu phải có ít nhất 6 ký tự'
    isValid = false
  } else if (
    !passwordRequirements.value.uppercase ||
    !passwordRequirements.value.lowercase ||
    !passwordRequirements.value.number
  ) {
    errors.newPassword = 'Mật khẩu phải chứa ít nhất một chữ hoa, một chữ thường và một số'
    isValid = false
  }

  // Confirm password validation
  if (!passwordForm.confirmPassword.trim()) {
    errors.confirmPassword = 'Vui lòng xác nhận mật khẩu mới'
    isValid = false
  } else if (passwordForm.newPassword !== passwordForm.confirmPassword) {
    errors.confirmPassword = 'Mật khẩu xác nhận không khớp'
    isValid = false
  }

  return isValid
}

// Handle password change
const handleChangePassword = async () => {
  if (!validateForm()) return

  loading.value = true

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Show success and redirect to profile
    router.push('/dashboard/profile?passwordChanged=true')
  } catch (error) {
    console.error('Password change failed:', error)
    errors.currentPassword = 'Đổi mật khẩu thất bại. Vui lòng thử lại.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.change-password-page {
  display: flex;
  min-height: 100vh;
  background: #ffffff;
}

.change-password-container {
  display: flex;
  width: 100%;
  min-height: 100vh;
}

/* Main Content */
.change-password-content {
  flex: 1;
  padding: 32px;
  max-width: 600px;
  margin: 0 auto;
}

.page-header {
  margin-bottom: 40px;
  text-align: center;
}

.page-title {
  font-size: 32px;
  font-weight: 600;
  color: #000;
  margin: 0 0 12px 0;
  font-family: 'Poppins', sans-serif;
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
.change-password-form {
  display: flex;
  flex-direction: column;
  gap: 28px;
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
  font-weight: 500;
}

.input-wrapper {
  position: relative;
}

.form-input {
  width: 100%;
  height: 54px;
  padding: 0 50px 0 20px;
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
  margin-top: 4px;
}

/* Password Requirements */
.password-requirements {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
  padding: 16px;
  background: #f8fafc;
  border-radius: 8px;
}

.requirement {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #6b7280;
  font-family: 'Poppins', sans-serif;
  transition: color 0.3s ease;
}

.requirement.met {
  color: #10b981;
}

.requirement svg {
  opacity: 0.3;
  transition: opacity 0.3s ease;
}

.requirement.met svg {
  opacity: 1;
}

/* Form Actions */
.form-actions {
  display: flex;
  gap: 16px;
  margin-top: 20px;
}

.cancel-button {
  flex: 1;
  height: 49px;
  background: transparent;
  border: 1px solid #d1d5db;
  border-radius: 36px;
  color: #6b7280;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cancel-button:hover {
  background: #f9fafb;
  border-color: #9ca3af;
}

.change-password-button {
  flex: 2;
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
}

.change-password-button:hover:not(:disabled) {
  background: #1d4ed8;
  transform: translateY(-1px);
}

.change-password-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .change-password-container {
    flex-direction: column;
  }
}

@media (max-width: 768px) {
  .change-password-content {
    padding: 20px 16px;
  }

  .page-title {
    font-size: 28px;
  }

  .page-subtitle {
    font-size: 14px;
  }

  .form-input {
    height: 48px;
    font-size: 14px;
  }

  .form-actions {
    flex-direction: column;
  }

  .cancel-button,
  .change-password-button {
    flex: none;
  }
}

@media (max-width: 480px) {
  .change-password-content {
    padding: 16px 12px;
  }

  .page-title {
    font-size: 24px;
  }

  .password-requirements {
    padding: 12px;
  }
}
</style>
