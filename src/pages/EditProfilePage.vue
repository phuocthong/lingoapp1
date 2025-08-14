<template>
  <div class="edit-profile-page">
    <!-- Shared Sidebar Navigation -->
    <ProfileSidebar />

    <!-- Main Content -->
    <div class="edit-profile-content">
      <!-- Page Header -->
      <div class="page-header">
        <div class="header-top">
          <button class="back-button" @click="$router.go(-1)">
            <q-icon name="arrow_back" />
            <span>Quay lại</span>
          </button>
          <h1 class="page-title">Chỉnh sửa thông tin cá nhân</h1>
        </div>
      </div>

      <!-- Edit Form -->
      <div class="edit-form-container">
        <div class="form-section">
          <!-- Avatar Upload -->
          <div class="avatar-section">
            <div class="avatar-upload">
              <q-avatar size="120px" class="profile-avatar">
                <img :src="editForm.avatar" alt="User Avatar" />
              </q-avatar>
              <div class="avatar-overlay" @click="triggerFileUpload">
                <q-icon name="camera_alt" size="24px" />
                <span>Đổi ảnh</span>
              </div>
              <input
                ref="fileInput"
                type="file"
                accept="image/*"
                @change="handleAvatarChange"
                style="display: none"
              />
            </div>
            <p class="avatar-help">Nhấp để thay đổi ảnh đại diện</p>
          </div>

          <!-- Form Fields -->
          <div class="form-fields">
            <!-- Full Name -->
            <div class="form-group">
              <label class="form-label">Họ và tên</label>
              <div class="input-wrapper">
                <input
                  v-model="editForm.name"
                  type="text"
                  placeholder="Nhập họ và tên"
                  class="form-input"
                  :class="{ error: errors.name }"
                />
              </div>
              <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
            </div>

            <!-- Username -->
            <div class="form-group">
              <label class="form-label">Tên người dùng</label>
              <div class="input-wrapper">
                <input
                  v-model="editForm.username"
                  type="text"
                  placeholder="Nhập tên người dùng"
                  class="form-input"
                  :class="{ error: errors.username }"
                />
              </div>
              <span v-if="errors.username" class="error-message">{{ errors.username }}</span>
            </div>

            <!-- Email -->
            <div class="form-group">
              <label class="form-label">Email</label>
              <div class="input-wrapper">
                <input
                  v-model="editForm.email"
                  type="email"
                  placeholder="Nhập địa chỉ email"
                  class="form-input"
                  :class="{ error: errors.email }"
                />
              </div>
              <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
            </div>

            <!-- Phone -->
            <div class="form-group">
              <label class="form-label">Số điện thoại</label>
              <div class="input-wrapper">
                <input
                  v-model="editForm.phone"
                  type="tel"
                  placeholder="Nhập số điện thoại"
                  class="form-input"
                  :class="{ error: errors.phone }"
                />
              </div>
              <span v-if="errors.phone" class="error-message">{{ errors.phone }}</span>
            </div>

            <!-- Bio -->
            <div class="form-group">
              <label class="form-label">Giới thiệu bản thân</label>
              <div class="input-wrapper">
                <textarea
                  v-model="editForm.bio"
                  placeholder="Viết một vài dòng giới thiệu về bản thân"
                  class="form-textarea"
                  :class="{ error: errors.bio }"
                  rows="4"
                ></textarea>
              </div>
              <span v-if="errors.bio" class="error-message">{{ errors.bio }}</span>
            </div>

            <!-- Privacy Settings -->
            <div class="form-group">
              <label class="form-label">Cài đặt riêng tư</label>
              <div class="privacy-options">
                <label class="privacy-option">
                  <input
                    v-model="editForm.isPublicProfile"
                    type="checkbox"
                    class="privacy-checkbox"
                  />
                  <span class="privacy-text">Cho phép người khác xem hồ sơ của tôi</span>
                </label>
                <label class="privacy-option">
                  <input
                    v-model="editForm.allowFriendRequests"
                    type="checkbox"
                    class="privacy-checkbox"
                  />
                  <span class="privacy-text">Cho phép nhận lời mời kết bạn</span>
                </label>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="form-actions">
            <button type="button" class="cancel-btn" @click="cancelEdit">Hủy bỏ</button>
            <button type="submit" class="save-btn" :disabled="loading" @click="handleSave">
              <span v-if="loading">Đang lưu...</span>
              <span v-else>Lưu thay đổi</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import ProfileSidebar from '../components/ProfileSidebar.vue'
import { auth } from '../utils/auth.js'
import { apiService } from '../services/api.js'

const router = useRouter()
const fileInput = ref(null)
const loading = ref(false)

// Form data
const editForm = reactive({
  name: '',
  username: '',
  email: '',
  phone: '',
  bio: '',
  avatar: '',
  isPublicProfile: true,
  allowFriendRequests: true,
})

// Form validation errors
const errors = reactive({
  name: '',
  username: '',
  email: '',
  phone: '',
  bio: '',
})

// Load current user data
onMounted(() => {
  const currentUser = auth.getCurrentUser()
  if (currentUser) {
    editForm.name = currentUser.name || ''
    editForm.username = currentUser.username || ''
    editForm.email = currentUser.email || ''
    editForm.phone = currentUser.phone || '12345678910'
    editForm.bio = currentUser.bio || ''
    editForm.avatar = currentUser.avatar || ''
    editForm.isPublicProfile = currentUser.isPublicProfile ?? true
    editForm.allowFriendRequests = currentUser.allowFriendRequests ?? true
  }
})

// Validation function
const validateForm = () => {
  // Reset errors
  Object.keys(errors).forEach((key) => {
    errors[key] = ''
  })

  let isValid = true

  // Name validation
  if (!editForm.name.trim()) {
    errors.name = 'Vui lòng nhập họ và tên'
    isValid = false
  } else if (editForm.name.length < 2) {
    errors.name = 'Họ và tên phải có ít nhất 2 ký tự'
    isValid = false
  }

  // Username validation
  if (!editForm.username.trim()) {
    errors.username = 'Vui lòng nhập tên người dùng'
    isValid = false
  } else if (editForm.username.length < 3) {
    errors.username = 'Tên người dùng phải có ít nhất 3 ký tự'
    isValid = false
  } else if (!/^[a-zA-Z0-9_]+$/.test(editForm.username)) {
    errors.username = 'Tên người dùng chỉ đ��ợc chứa chữ, số và dấu gạch dưới'
    isValid = false
  }

  // Email validation
  if (!editForm.email.trim()) {
    errors.email = 'Vui lòng nhập địa chỉ email'
    isValid = false
  } else if (!/\S+@\S+\.\S+/.test(editForm.email)) {
    errors.email = 'Địa chỉ email không hợp lệ'
    isValid = false
  }

  // Phone validation (optional)
  if (editForm.phone && !/^[0-9+\-\s()]+$/.test(editForm.phone)) {
    errors.phone = 'Số điện thoại không hợp lệ'
    isValid = false
  }

  // Bio validation (optional)
  if (editForm.bio && editForm.bio.length > 500) {
    errors.bio = 'Giới thiệu không được vượt quá 500 ký tự'
    isValid = false
  }

  return isValid
}

// Handle avatar upload
const triggerFileUpload = () => {
  fileInput.value?.click()
}

const handleAvatarChange = async (event) => {
  const file = event.target.files[0]
  if (file) {
    if (file.size > 5 * 1024 * 1024) {
      // 5MB limit
      alert('Kích thước file không được vượt quá 5MB')
      return
    }

    if (!file.type.startsWith('image/')) {
      alert('Vui lòng chọn file hình ảnh')
      return
    }

    // Show loading state while uploading
    loading.value = true

    try {
      const reader = new FileReader()
      reader.onload = async (e) => {
        const imageData = e.target.result

        try {
          // Upload avatar to server
          const response = await apiService.uploadAvatar(imageData, file.name)

          if (response.success) {
            editForm.avatar = response.avatarUrl
            alert('Ảnh đại diện đã được tải lên thành công!')
          } else {
            throw new Error(response.message || 'Upload failed')
          }
        } catch (error) {
          console.error('Avatar upload error:', error)
          // Fallback to local preview if API upload fails
          editForm.avatar = imageData
          alert('Không thể tải ảnh lên server, sẽ sử dụng ảnh tạm thời')
        } finally {
          loading.value = false
        }
      }
      reader.readAsDataURL(file)
    } catch (error) {
      console.error('File reading error:', error)
      alert('Không thể đọc file ảnh')
      loading.value = false
    }
  }
}

// Handle form submission
const handleSave = async () => {
  if (!validateForm()) return

  loading.value = true

  try {
    // Prepare update data
    const updateData = {
      name: editForm.name,
      username: editForm.username,
      email: editForm.email,
      phone: editForm.phone,
      bio: editForm.bio,
      avatar: editForm.avatar,
      isPublicProfile: editForm.isPublicProfile,
      allowFriendRequests: editForm.allowFriendRequests,
    }

    // Try to update via API
    const response = await apiService.updateProfile(updateData)

    if (response.success) {
      // Update local storage with new user data
      const updatedUser = response.user
      if (localStorage.getItem('user_token')) {
        localStorage.setItem('user_data', JSON.stringify(updatedUser))
      } else {
        sessionStorage.setItem('user_data', JSON.stringify(updatedUser))
      }

      alert('Thông tin đã được cập nhật thành công!')

      // Trigger event to update UI components
      window.dispatchEvent(new CustomEvent('userDataUpdate'))

      router.push('/dashboard/profile')
    } else {
      throw new Error(response.message || 'Update failed')
    }
  } catch (error) {
    console.error('Update failed:', error)

    // Fallback to local storage update for demo mode
    const currentUser = auth.getCurrentUser()
    if (currentUser) {
      const updatedUser = {
        ...currentUser,
        name: editForm.name,
        username: editForm.username,
        email: editForm.email,
        phone: editForm.phone,
        bio: editForm.bio,
        avatar: editForm.avatar,
        isPublicProfile: editForm.isPublicProfile,
        allowFriendRequests: editForm.allowFriendRequests,
      }

      // Update in storage
      if (localStorage.getItem('user_token')) {
        localStorage.setItem('user_data', JSON.stringify(updatedUser))
      } else {
        sessionStorage.setItem('user_data', JSON.stringify(updatedUser))
      }

      alert('Thông tin đã được cập nhật (chế độ demo)!')
      router.push('/dashboard/profile')
    } else {
      alert('Cập nhật thông tin thất bại. Vui lòng thử lại.')
    }
  } finally {
    loading.value = false
  }
}

// Cancel edit
const cancelEdit = () => {
  router.push('/dashboard/profile')
}
</script>

<style scoped>
.edit-profile-page {
  display: flex;
  min-height: 100vh;
  background: #ffffff;
  max-width: 1800px;
  margin: 0 auto;
}

.edit-profile-content {
  flex: 1;
  padding: 20px 32px;
  max-width: 1000px;
  margin: 0 auto;
}

/* Page Header */
.page-header {
  margin-bottom: 32px;
}

.header-top {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
}

.back-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: transparent;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  color: #374151;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.back-button:hover {
  background: #f9fafb;
  border-color: #d1d5db;
}

.page-title {
  font-size: 28px;
  font-weight: 600;
  color: #000;
  margin: 0;
}

/* Form Container */
.edit-form-container {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.form-section {
  padding: 32px;
}

/* Avatar Section */
.avatar-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
  padding-bottom: 32px;
  border-bottom: 1px solid #e2e8f0;
}

.avatar-upload {
  position: relative;
  cursor: pointer;
  margin-bottom: 12px;
}

.profile-avatar {
  border: 3px solid #e2e8f0;
  transition: all 0.3s ease;
}

.avatar-upload:hover .profile-avatar {
  border-color: #2563eb;
}

.avatar-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
  font-size: 12px;
  gap: 4px;
}

.avatar-upload:hover .avatar-overlay {
  opacity: 1;
}

.avatar-help {
  font-size: 14px;
  color: #6b7280;
  text-align: center;
  margin: 0;
}

/* Form Fields */
.form-fields {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-bottom: 40px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group:nth-child(5), /* Bio field spans both columns */
.form-group:nth-child(6) {
  /* Privacy settings span both columns */
  grid-column: 1 / -1;
}

.form-label {
  color: #374151;
  font-size: 14px;
  font-weight: 500;
}

.input-wrapper {
  position: relative;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background: #fff;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #374151;
  outline: none;
  transition: all 0.2s ease;
}

.form-input:focus,
.form-textarea:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.form-input.error,
.form-textarea.error {
  border-color: #ef4444;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: #9ca3af;
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}

.error-message {
  color: #ef4444;
  font-size: 12px;
  margin-top: 4px;
}

/* Privacy Options */
.privacy-options {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.privacy-option {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}

.privacy-checkbox {
  width: 16px;
  height: 16px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  cursor: pointer;
}

.privacy-text {
  color: #374151;
  font-size: 14px;
  user-select: none;
}

/* Form Actions */
.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 24px;
  padding-top: 32px;
  border-top: 1px solid #e2e8f0;
}

.cancel-btn,
.save-btn {
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 120px;
}

.cancel-btn {
  background: transparent;
  border: 1px solid #d1d5db;
  color: #374151;
}

.cancel-btn:hover {
  background: #f9fafb;
  border-color: #9ca3af;
}

.save-btn {
  background: #2563eb;
  border: 1px solid #2563eb;
  color: white;
}

.save-btn:hover:not(:disabled) {
  background: #1d4ed8;
  border-color: #1d4ed8;
}

.save-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .edit-profile-content {
    padding: 16px;
  }

  .form-fields {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .form-group:nth-child(5),
  .form-group:nth-child(6) {
    grid-column: 1;
  }
}

@media (max-width: 768px) {
  .edit-profile-page {
    flex-direction: column;
  }

  .header-top {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .page-title {
    font-size: 24px;
  }

  .form-section {
    padding: 24px 16px;
  }

  .form-actions {
    flex-direction: column;
    gap: 12px;
  }

  .cancel-btn,
  .save-btn {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .edit-profile-content {
    padding: 8px;
  }

  .form-section {
    padding: 16px;
  }

  .avatar-section {
    margin-bottom: 24px;
    padding-bottom: 24px;
  }

  .form-fields {
    gap: 16px;
    margin-bottom: 24px;
  }
}
</style>
