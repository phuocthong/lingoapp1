<template>
  <q-page class="friends-page">
    <div class="friends-container">
      <!-- Sidebar -->
      <div class="sidebar">
        <div class="nav-links">
          <div class="nav-link" @click="$router.push('/dashboard')">
            <svg
              class="nav-icon"
              width="29"
              height="30"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.8885 4.18286C13.7852 4.18286 12.7029 4.48899 11.7593 5.06801L5.72131 8.77317C4.83341 9.31801 4.09923 10.0855 3.5897 11.0015C3.08016 11.9174 2.81248 12.951 2.8125 14.0023V21.6963C2.8125 23.3179 3.44865 24.873 4.58099 26.0196C5.71334 27.1662 7.24913 27.8104 8.85051 27.8104H20.9265C22.5279 27.8104 24.0637 27.1662 25.1961 26.0196C26.3284 24.873 26.9645 23.3179 26.9645 21.6963V14.001C26.9643 12.95 26.6965 11.9165 26.187 11.0008C25.6775 10.0851 24.9434 9.31788 24.0557 8.77318L18.0177 5.06802C17.0741 4.489 15.9919 4.18286 14.8885 4.18286ZM13.011 7.15959C13.5772 6.81219 14.2265 6.62851 14.8885 6.62851C15.5505 6.62851 16.1999 6.81219 16.766 7.15959L22.804 10.8648C23.3366 11.1916 23.7771 11.6519 24.0828 12.2013C24.3885 12.7507 24.5491 13.3705 24.5493 14.001V21.6963C24.5493 22.6692 24.1677 23.6023 23.4882 24.2903C22.8088 24.9783 21.8874 25.3648 20.9265 25.3648H19.7189V21.6963C19.7189 20.399 19.21 19.1549 18.3041 18.2376C17.3983 17.3203 16.1696 16.805 14.8885 16.805C13.6074 16.805 12.3788 17.3203 11.4729 18.2376C10.567 19.1549 10.0581 20.399 10.0581 21.6963V25.3648H8.85051C7.88968 25.3648 6.96821 24.9783 6.2888 24.2903C5.60939 23.6023 5.2277 22.6692 5.2277 21.6963V14.0023C5.22769 13.3715 5.3883 12.7513 5.69402 12.2017C5.99974 11.6521 6.44025 11.1917 6.97299 10.8648L13.011 7.15959ZM16.5963 19.9669C17.0493 20.4256 17.3037 21.0477 17.3037 21.6963V25.3648H12.4733V21.6963C12.4733 21.0477 12.7278 20.4256 13.1807 19.9669C13.6337 19.5083 14.248 19.2506 14.8885 19.2506C15.5291 19.2506 16.1434 19.5083 16.5963 19.9669Z"
                fill="#5C5E64"
              />
            </svg>
            <span class="nav-label">Dashboard</span>
          </div>

          <div class="nav-link active">
            <svg
              class="nav-icon"
              width="29"
              height="30"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.8884 4.33421C13.287 4.33421 11.7512 4.97838 10.6188 6.125C9.48649 7.27162 8.85035 8.82678 8.85035 10.4483C8.85035 12.0699 9.48649 13.6251 10.6188 14.7717C10.6985 14.8523 10.7801 14.9305 10.8637 15.0062C9.82934 15.4861 8.87712 16.1518 8.05713 16.9821C6.24537 18.8167 5.22754 21.3049 5.22754 23.8994V25.1223C5.22754 25.7976 5.7682 26.3451 6.43514 26.3451C7.10208 26.3451 7.64274 25.7976 7.64274 25.1223V23.8994C7.64274 21.9535 8.40612 20.0874 9.76493 18.7114C11.1238 17.3355 12.9667 16.5625 14.8884 16.5625C16.81 16.5625 18.653 17.3355 20.0118 18.7114C21.3706 20.0874 22.134 21.9535 22.134 23.8994V25.1223C22.134 25.7976 22.6746 26.3451 23.3416 26.3451C24.0085 26.3451 24.5492 25.7976 24.5492 25.1223V23.8994C24.5492 21.3049 23.5313 18.8167 21.7196 16.9821C20.8996 16.1518 19.9474 15.4861 18.913 15.0062C18.9966 14.9305 19.0782 14.8523 19.1579 14.7717C20.2902 13.6251 20.9264 12.0699 20.9264 10.4483C20.9264 8.82678 20.2902 7.27162 19.1579 6.125C18.0255 4.97838 16.4897 4.33421 14.8884 4.33421ZM12.3266 7.85434C13.0061 7.16636 13.9275 6.77987 14.8884 6.77987C15.8492 6.77987 16.7707 7.16636 17.4501 7.85434C18.1295 8.54231 18.5112 9.4754 18.5112 10.4483C18.5112 11.4213 18.1295 12.3544 17.4501 13.0423C16.7707 13.7303 15.8492 14.1168 14.8884 14.1168C13.9275 14.1168 13.0061 13.7303 12.3266 13.0423C11.6472 12.3544 11.2656 11.4213 11.2656 10.4483C11.2656 9.4754 11.6472 8.54231 12.3266 7.85434Z"
                fill="#5C5E64"
              />
            </svg>
            <span class="nav-label">Bạn bè</span>
          </div>

          <div class="nav-link" @click="$router.push('/dashboard/add-friends')">
            <svg
              class="nav-icon"
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.8984 21.0974H21.7207C21.5111 20.0765 21.1419 19.1377 20.6133 18.281C20.0846 17.4242 19.4421 16.6859 18.6855 16.0661C17.929 15.4463 17.0768 14.9633 16.1289 14.6169C15.181 14.2706 14.1875 14.0974 13.1484 14.0974C12.3464 14.0974 11.5716 14.2022 10.8242 14.4118C10.0768 14.6215 9.37956 14.9131 8.73242 15.2868C8.08529 15.6605 7.4974 16.1163 6.96875 16.654C6.4401 17.1918 5.98438 17.7842 5.60156 18.4314C5.21875 19.0785 4.92253 19.7758 4.71289 20.5232C4.50326 21.2706 4.39844 22.0453 4.39844 22.8474H2.64844C2.64844 21.7536 2.80794 20.7009 3.12695 19.6892C3.44596 18.6775 3.90625 17.7432 4.50781 16.8864C5.10938 16.0297 5.82031 15.2686 6.64062 14.6032C7.46094 13.9379 8.39062 13.4138 9.42969 13.031C8.39974 12.3565 7.59766 11.5088 7.02344 10.488C6.44922 9.46717 6.15755 8.33696 6.14844 7.09738C6.14844 6.13124 6.33073 5.22433 6.69531 4.37668C7.0599 3.52902 7.55664 2.78618 8.18555 2.14816C8.81445 1.51014 9.55729 1.00884 10.4141 0.644257C11.2708 0.279673 12.1823 0.0973816 13.1484 0.0973816C14.1146 0.0973816 15.0215 0.279673 15.8691 0.644257C16.7168 1.00884 17.4596 1.50558 18.0977 2.13449C18.7357 2.7634 19.237 3.50624 19.6016 4.36301C19.9661 5.21978 20.1484 6.13124 20.1484 7.09738C20.1484 7.69894 20.0755 8.28683 19.9297 8.86105C19.7839 9.43527 19.5651 9.97759 19.2734 10.488C18.9818 10.9984 18.64 11.4678 18.248 11.8962C17.8561 12.3246 17.3958 12.7029 16.8672 13.031C17.888 13.4229 18.8268 13.9607 19.6836 14.6443C20.5404 15.3279 21.2786 16.1299 21.8984 17.0505V21.0974ZM7.89844 7.09738C7.89844 7.82655 8.03516 8.50558 8.30859 9.13449C8.58203 9.7634 8.95573 10.3194 9.42969 10.8025C9.90365 11.2855 10.4596 11.6638 11.0977 11.9372C11.7357 12.2107 12.4193 12.3474 13.1484 12.3474C13.8685 12.3474 14.5475 12.2107 15.1855 11.9372C15.8236 11.6638 16.3796 11.2901 16.8535 10.8161C17.3275 10.3422 17.7057 9.78618 17.9883 9.14816C18.2708 8.51014 18.4076 7.82655 18.3984 7.09738C18.3984 6.37733 18.2617 5.69829 17.9883 5.06027C17.7148 4.42225 17.3411 3.86626 16.8672 3.3923C16.3932 2.91835 15.8327 2.54009 15.1855 2.25754C14.5384 1.97499 13.8594 1.83827 13.1484 1.84738C12.4193 1.84738 11.7402 1.9841 11.1113 2.25754C10.4824 2.53098 9.92643 2.90467 9.44336 3.37863C8.96029 3.85259 8.58203 4.41314 8.30859 5.06027C8.03516 5.70741 7.89844 6.38644 7.89844 7.09738ZM25.3984 22.8474H28.8984V24.5974H25.3984V28.0974H23.6484V24.5974H20.1484V22.8474H23.6484V19.3474H25.3984V22.8474Z"
                fill="#5C5E64"
              />
            </svg>
            <span class="nav-label">Thêm bạn bè</span>
          </div>

          <div class="nav-link" @click="$router.push('/dashboard/tasks')">
            <svg
              class="nav-icon"
              width="29"
              height="29"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0585 11.1867C9.39158 11.1867 8.85092 11.7342 8.85092 12.4095C8.85092 13.0849 9.39158 13.6324 10.0585 13.6324H19.7193C20.3863 13.6324 20.9269 13.0849 20.9269 12.4095C20.9269 11.7342 20.3863 11.1867 19.7193 11.1867H10.0585Z"
                fill="#5C5E64"
              />
              <path
                d="M10.0585 16.078C9.39158 16.078 8.85092 16.6255 8.85092 17.3009C8.85092 17.9762 9.39158 18.5237 10.0585 18.5237H14.8889C15.5559 18.5237 16.0965 17.9762 16.0965 17.3009C16.0965 16.6255 15.5559 16.078 14.8889 16.078H10.0585Z"
                fill="#5C5E64"
              />
              <path
                d="M10.0585 20.9693C9.39158 20.9693 8.85092 21.5168 8.85092 22.1922C8.85092 22.8675 9.39158 23.415 10.0585 23.415H19.7193C20.3863 23.415 20.9269 22.8675 20.9269 22.1922C20.9269 21.5168 20.3863 20.9693 19.7193 20.9693H10.0585Z"
                fill="#5C5E64"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25.6109 6.46366C25.5138 6.22549 25.3711 6.00911 25.1911 5.82695L21.3901 1.97803C21.0281 1.611 20.537 1.40457 20.0247 1.40411H5.95267C5.44023 1.40411 4.94878 1.61025 4.58643 1.97717C4.22407 2.34408 4.02051 2.84173 4.02051 3.36064V26.3498C4.02051 26.6067 4.07049 26.8611 4.16759 27.0985C4.26468 27.3359 4.407 27.5516 4.58643 27.7332C4.76584 27.9149 4.97884 28.059 5.21326 28.1574C5.44769 28.2557 5.69894 28.3063 5.95267 28.3063H23.8252C24.0789 28.3063 24.3302 28.2557 24.5646 28.1574C24.799 28.059 25.012 27.9149 25.1914 27.7332C25.3709 27.5516 25.5132 27.3359 25.6103 27.0985C25.7074 26.8611 25.7574 26.6067 25.7574 26.3498V7.21292L24.5497 7.21254L25.7573 7.21553L25.7574 7.21292C25.7576 6.95585 25.7079 6.70125 25.6109 6.46366ZM18.5117 6.90683C18.5117 7.91985 19.3227 8.74107 20.3231 8.74107H23.3421V25.8606H6.43571V3.84977H18.5117V6.90683ZM22.2381 6.29542L20.9269 4.96769V6.29542H22.2381Z"
                fill="#5C5E64"
              />
            </svg>
            <span class="nav-label">Nhiệm vụ</span>
          </div>

          <div class="nav-link" @click="$router.push('/dashboard/rewards')">
            <svg
              class="nav-icon"
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.06413 10.8885H23.7308V8.33116C23.7308 8.1515 23.6561 7.98661 23.5068 7.8365C23.3575 7.68639 23.193 7.61172 23.0133 7.6125H5.78163C5.60274 7.6125 5.43824 7.68716 5.28813 7.8365C5.13802 7.98583 5.06335 8.15072 5.06413 8.33116V10.8885ZM3.89746 8.33116C3.89746 7.79372 4.07752 7.34533 4.43763 6.986C4.79774 6.62666 5.24574 6.44661 5.78163 6.44583H23.0133C23.55 6.44583 23.998 6.62589 24.3573 6.986C24.7166 7.34611 24.8967 7.7945 24.8975 8.33116V13.6698H5.06413V20.895C5.06413 21.0739 5.1388 21.2384 5.28813 21.3885C5.43746 21.5386 5.60196 21.6133 5.78163 21.6125H11.216V22.7792H5.78163C5.24496 22.7792 4.79657 22.5995 4.43646 22.2402C4.07635 21.8808 3.89669 21.4321 3.89746 20.8938V8.33116ZM17.4798 24.5747L13.33 20.4237L14.1548 19.5977L17.4798 22.9098L24.117 16.2727L24.943 17.1127L17.4798 24.5747ZM5.06413 8.33V20.895C5.06413 21.0739 5.1388 21.2372 5.28813 21.3873C5.43746 21.5374 5.60196 21.6133 5.78163 21.6125L5.06413 21.6113V16.2937V19.6128V7.6125H5.7828C5.60313 7.6125 5.43824 7.68716 5.28813 7.8365C5.13802 7.98583 5.06335 8.15072 5.06413 8.33116"
                fill="#5C5E64"
              />
            </svg>
            <span class="nav-label">Đổi điểm</span>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="friends-content">
        <div class="page-header">
          <h1 class="page-title">Bạn bè</h1>
        </div>

        <!-- Search Bar -->
        <div class="search-container">
          <div class="search-input">
            <svg
              class="search-icon"
              width="21"
              height="21"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.75597 17.2396C13.6344 17.2396 16.7785 14.0955 16.7785 10.217C16.7785 6.33857 13.6344 3.19446 9.75597 3.19446C5.87751 3.19446 2.7334 6.33857 2.7334 10.217C2.7334 14.0955 5.87751 17.2396 9.75597 17.2396Z"
                stroke="black"
                stroke-opacity="0.3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.5343 18.9953L14.7158 15.1767"
                stroke="black"
                stroke-opacity="0.3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input type="text" placeholder="Tìm kiếm bạn bè" class="search-field" />
          </div>
        </div>

        <!-- Friends List -->
        <div class="friends-list">
          <div v-for="friend in friends" :key="friend.id" class="friend-item">
            <div class="friend-avatar">
              <img :src="friend.avatar" :alt="friend.name" />
              <div class="online-indicator"></div>
            </div>

            <div class="friend-info">
              <div class="friend-name">{{ friend.name }}</div>
              <div class="friend-username">{{ friend.username }}</div>
              <div class="friend-status">
                <svg
                  class="fire-icon"
                  width="11"
                  height="11"
                  viewBox="0 0 12 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.98088 0.500019C6.98088 2.73256 8.15792 3.85481 9.17185 4.92164C10.1417 5.94187 11.0649 6.91361 11.0649 8.76451C11.0649 11.795 8.70141 13.9601 5.67095 13.9601C2.63986 13.9601 0.0439453 11.8057 0.0439453 8.76451C0.0439453 7.48041 0.649785 6.2385 1.62404 5.67926C1.81612 5.56905 2.04725 5.68367 2.12975 5.8896C2.76015 7.4634 3.53729 7.43569 3.94034 7.03264C4.18469 6.78892 4.23633 6.32981 3.93782 5.73405C2.42322 2.70359 5.11109 0.520171 6.58286 0.158053C6.79447 0.106412 6.97017 0.282748 6.98088 0.500019ZM5.67095 13.0155C8.2272 13.0155 10.1203 11.2269 10.1203 8.76451C10.1203 7.29273 9.43195 6.56724 8.43376 5.51615L8.42054 5.50166C7.51367 4.5463 6.44368 3.3913 6.1225 1.37225C5.64698 1.6518 5.23667 2.0297 4.91901 2.48065C4.42338 3.20111 4.19666 4.13884 4.78298 5.31147C5.16273 6.07035 5.27231 7.03705 4.60853 7.70083C4.19477 8.11459 3.49887 8.39357 2.74692 8.06987C2.27334 7.86583 1.89484 7.46844 1.5894 6.94258C1.23232 7.3872 0.988603 8.03838 0.988603 8.76451C0.988603 11.1872 3.05929 13.0155 5.67095 13.0155Z"
                    fill="#FFFF00"
                  />
                </svg>
                <span class="status-text">{{ friend.streak }} ngày • {{ friend.status }}</span>
              </div>
            </div>

            <div class="friend-actions">
              <q-btn class="challenge-btn" color="primary">
                <svg
                  class="sword-icon"
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.3479 19.506L14.5939 16.7574L12.6139 18.7374L12.3646 18.489C12.0886 18.213 11.9506 17.8719 11.9506 17.4657C11.9506 17.0595 12.0886 16.7184 12.3646 16.4424L16.0456 12.7614C16.3216 12.4854 16.6627 12.3474 17.0689 12.3474C17.4751 12.3474 17.8162 12.4854 18.0922 12.7614L18.3406 13.0107L16.3606 14.9907L19.1092 17.7447C19.255 17.8899 19.3279 18.0594 19.3279 18.2532C19.3279 18.447 19.255 18.6165 19.1092 18.7617L18.3649 19.506C18.2197 19.6512 18.0502 19.7238 17.8564 19.7238C17.6626 19.7238 17.4931 19.6512 17.3479 19.506ZM19.2928 5.80892L9.35499 15.7638L10.021 16.4253C10.297 16.7013 10.435 17.0424 10.435 17.4486C10.435 17.8548 10.297 18.1956 10.021 18.471L9.77169 18.7203L7.79169 16.7403L5.03769 19.4889C4.89249 19.6341 4.72299 19.7067 4.52919 19.7067C4.33539 19.7067 4.16589 19.6341 4.02069 19.4889L3.27639 18.7446C3.13119 18.5994 3.05859 18.4299 3.05859 18.2361C3.05859 18.0423 3.13119 17.8725 3.27639 17.7267L6.02499 14.9727L4.04499 12.9927L4.29429 12.7443C4.57029 12.4683 4.91109 12.3303 5.31669 12.3303C5.72289 12.3303 6.06399 12.4683 6.33999 12.7443L7.01859 13.4283L16.9735 3.48962H19.2928V5.80892ZM7.27059 10.0047L3.09279 5.80892V3.48962H5.41209L9.57279 7.66742L7.27059 10.0047Z"
                    fill="white"
                  />
                </svg>
                Thử thách
              </q-btn>

              <div class="menu-btn">•••</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import ProfileSidebar from '../components/ProfileSidebar.vue'

// Mock friends data
const friends = ref([
  {
    id: 1,
    name: 'Người dùng',
    username: '@nguoidung',
    avatar: 'https://via.placeholder.com/55',
    streak: '15',
    status: 'Đang hoạt động',
  },
  {
    id: 2,
    name: 'Người dùng',
    username: '@nguoidung',
    avatar: 'https://via.placeholder.com/55',
    streak: '15',
    status: 'Đang hoạt động',
  },
  {
    id: 3,
    name: 'Người dùng',
    username: '@nguoidung',
    avatar: 'https://via.placeholder.com/55',
    streak: '15',
    status: 'Đang hoạt động',
  },
  {
    id: 4,
    name: 'Người dùng',
    username: '@nguoidung',
    avatar: 'https://via.placeholder.com/55',
    streak: '15',
    status: 'Đang hoạt động',
  },
  {
    id: 5,
    name: 'Người dùng',
    username: '@nguoidung',
    avatar: 'https://via.placeholder.com/55',
    streak: '15',
    status: 'Đang hoạt động',
  },
  {
    id: 6,
    name: 'Người dùng',
    username: '@nguoidung',
    avatar: 'https://via.placeholder.com/55',
    streak: '15',
    status: 'Đang hoạt động',
  },
])
</script>

<style scoped>
.friends-page {
  background: #fff;
  min-height: 100vh;
}

.friends-container {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 285px;
  background: #fff;
  border-right: 1px solid rgba(92, 94, 100, 0.7);
  padding: 0;
  flex-shrink: 0;
}

.nav-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 17px;
  padding: 15px 17px;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.nav-link:hover {
  background: rgba(109, 40, 217, 0.1);
}

.nav-link.active {
  background: rgba(109, 40, 217, 0.1);
}

.nav-link.active .nav-label {
  color: #6d28d9;
  font-weight: 600;
}

.nav-icon {
  width: 29px;
  height: 29px;
  flex-shrink: 0;
}

.nav-label {
  font-size: 20px;
  font-weight: 500;
  color: #5c5e64;
  line-height: 29px;
  letter-spacing: -0.4px;
}

.friends-content {
  flex: 1;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.page-header {
  padding-top: 10px;
}

.page-title {
  font-size: 32px;
  font-weight: 700;
  color: #000;
  margin: 0;
}

.search-container {
  width: 100%;
  max-width: 895px;
}

.search-input {
  position: relative;
  width: 100%;
  height: 43px;
}

.search-field {
  width: 100%;
  height: 100%;
  padding: 0 32px 0 40px;
  border: 1px solid rgba(107, 114, 128, 0.3);
  border-radius: 8px;
  background: #fff;
  font-size: 14px;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.5);
  outline: none;
}

.search-field::placeholder {
  color: rgba(0, 0, 0, 0.5);
}

.search-icon {
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 21px;
  height: 21px;
}

.friends-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 895px;
}

.friend-item {
  display: flex;
  align-items: center;
  padding: 22px;
  background: #fff;
  border: 1px solid rgba(107, 114, 128, 0.3);
  border-radius: 8px;
  position: relative;
}

.friend-avatar {
  position: relative;
  margin-right: 18px;
}

.friend-avatar img {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: 1.6px solid #858597;
  object-fit: cover;
}

.online-indicator {
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 9px;
  height: 9px;
  background: #24da67;
  border: 1px solid #fff;
  border-radius: 50%;
}

.friend-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.friend-name {
  font-size: 18px;
  font-weight: 500;
  color: #000;
  line-height: normal;
}

.friend-username {
  font-size: 16px;
  font-weight: 300;
  color: #000;
  line-height: normal;
}

.friend-status {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 4px;
}

.fire-icon {
  width: 11px;
  height: 11px;
}

.status-text {
  font-size: 13px;
  font-weight: 400;
  color: #ffff00;
  line-height: 180%;
}

.friend-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: auto;
}

.challenge-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background: #2563eb;
  color: #fff;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
  height: 36px;
  min-width: 143px;
}

.sword-icon {
  width: 22px;
  height: 22px;
}

.menu-btn {
  font-size: 18px;
  color: #ffff00;
  cursor: pointer;
  padding: 4px 8px;
  line-height: 180%;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .sidebar {
    width: 240px;
  }

  .nav-label {
    font-size: 18px;
  }
}

@media (max-width: 768px) {
  .friends-container {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid rgba(92, 94, 100, 0.7);
  }

  .nav-links {
    flex-direction: row;
    overflow-x: auto;
    padding: 0 16px;
  }

  .nav-link {
    flex-direction: column;
    min-width: 80px;
    text-align: center;
    gap: 8px;
    padding: 12px 8px;
  }

  .nav-label {
    font-size: 12px;
    white-space: nowrap;
  }

  .nav-icon {
    width: 24px;
    height: 24px;
  }

  .friends-content {
    padding: 16px;
  }

  .page-title {
    font-size: 24px;
  }

  .friend-item {
    padding: 16px;
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }

  .friend-actions {
    margin-left: 0;
    width: 100%;
    justify-content: center;
  }

  .challenge-btn {
    flex: 1;
    max-width: 200px;
  }
}
</style>
