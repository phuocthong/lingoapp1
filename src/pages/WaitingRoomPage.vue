<template>
  <div class="waiting-room-page">
    <!-- Main Content -->
    <main class="main-content">
      <div class="content-container">
        <!-- Room Header -->
        <div class="room-header">
          <h1 class="room-title">🏠 Phòng chờ</h1>
          <h2 class="room-subtitle">⚡ Thử thách nhanh {{ totalQuestions }} câu</h2>

          <div class="room-stats">
            <div class="room-stat">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_154_864)">
                  <path
                    d="M4.00065 6.00008H3.00065C2.55862 6.00008 2.1347 5.82449 1.82214 5.51193C1.50958 5.19937 1.33398 4.77544 1.33398 4.33341C1.33398 3.89139 1.50958 3.46746 1.82214 3.1549C2.1347 2.84234 2.55862 2.66675 3.00065 2.66675H4.00065"
                    stroke="#4B5563"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.001 6.00008H13.001C13.443 6.00008 13.8669 5.82449 14.1795 5.51193C14.492 5.19937 14.6676 4.77544 14.6676 4.33341C14.6676 3.89139 14.492 3.46746 14.1795 3.1549C13.8669 2.84234 13.443 2.66675 13.001 2.66675H12.001"
                    stroke="#4B5563"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.66797 14.6667H13.3346"
                    stroke="#4B5563"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.66797 9.77344V11.3334C6.66797 11.7001 6.35464 11.9868 6.0213 12.1401C5.23464 12.5001 4.66797 13.4934 4.66797 14.6668"
                    stroke="#4B5563"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.33398 9.77344V11.3334C9.33398 11.7001 9.64732 11.9868 9.98065 12.1401C10.7673 12.5001 11.334 13.4934 11.334 14.6668"
                    stroke="#4B5563"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.001 1.33325H4.00098V5.99992C4.00098 7.06078 4.4224 8.0782 5.17255 8.82835C5.9227 9.57849 6.94011 9.99992 8.00098 9.99992C9.06184 9.99992 10.0793 9.57849 10.8294 8.82835C11.5795 8.0782 12.001 7.06078 12.001 5.99992V1.33325Z"
                    stroke="#4B5563"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
              <span>{{ totalQuestions }} câu hỏi</span>
            </div>

            <div class="room-stat">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_154_875)">
                  <path
                    d="M7.99967 14.6666C11.6816 14.6666 14.6663 11.6818 14.6663 7.99992C14.6663 4.31802 11.6816 1.33325 7.99967 1.33325C4.31778 1.33325 1.33301 4.31802 1.33301 7.99992C1.33301 11.6818 4.31778 14.6666 7.99967 14.6666Z"
                    stroke="#4B5563"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 4V8L10.6667 9.33333"
                    stroke="#4B5563"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
              <span>{{ timePerQuestion }}s mỗi câu</span>
            </div>

            <div class="room-stat">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6663 14V12.6667C10.6663 11.9594 10.3854 11.2811 9.88529 10.781C9.3852 10.281 8.70692 10 7.99967 10H3.99967C3.29243 10 2.61415 10.281 2.11406 10.781C1.61396 11.2811 1.33301 11.9594 1.33301 12.6667V14"
                  stroke="#4B5563"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.99967 7.33333C7.47243 7.33333 8.66634 6.13943 8.66634 4.66667C8.66634 3.19391 7.47243 2 5.99967 2C4.52692 2 3.33301 3.19391 3.33301 4.66667C3.33301 6.13943 4.52692 7.33333 5.99967 7.33333Z"
                  stroke="#4B5563"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.667 14V12.6667C14.6666 12.0758 14.4699 11.5019 14.1079 11.0349C13.7459 10.5679 13.2391 10.2344 12.667 10.0867"
                  stroke="#4B5563"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.667 2.08667C11.2406 2.23354 11.749 2.56714 12.1121 3.03488C12.4752 3.50262 12.6722 4.07789 12.6722 4.67C12.6722 5.26212 12.4752 5.83739 12.1121 6.30513C11.749 6.77287 11.2406 7.10647 10.667 7.25334"
                  stroke="#4B5563"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Tối đa {{ maxParticipants }} người</span>
            </div>
          </div>
        </div>

        <!-- Content Grid -->
        <div class="content-grid">
          <!-- Participants Section -->
          <div class="participants-section">
            <div class="section-header">
              <div class="section-title-container">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.738 17.5V15.8333C13.738 14.9493 13.3868 14.1014 12.7616 13.4763C12.1365 12.8512 11.2887 12.5 10.4046 12.5H5.40462C4.52057 12.5 3.67272 12.8512 3.0476 13.4763C2.42248 14.1014 2.07129 14.9493 2.07129 15.8333V17.5"
                    stroke="#020817"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.90462 9.16667C9.74557 9.16667 11.238 7.67428 11.238 5.83333C11.238 3.99238 9.74557 2.5 7.90462 2.5C6.06367 2.5 4.57129 3.99238 4.57129 5.83333C4.57129 7.67428 6.06367 9.16667 7.90462 9.16667Z"
                    stroke="#020817"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.7373 17.4999V15.8333C18.7368 15.0947 18.4909 14.3773 18.0384 13.7935C17.586 13.2098 16.9524 12.7929 16.2373 12.6083"
                    stroke="#020817"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.7373 2.60828C14.4543 2.79186 15.0898 3.20886 15.5437 3.79354C15.9975 4.37821 16.2438 5.0973 16.2438 5.83744C16.2438 6.57759 15.9975 7.29668 15.5437 7.88135C15.0898 8.46603 14.4543 8.88303 13.7373 9.06661"
                    stroke="#020817"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <h3 class="section-title">
                  Người tham gia ({{ participants.length }}/{{ maxParticipants }})
                </h3>
              </div>
              <div class="status-badge" :class="roomStatusClass">{{ roomStatusText }}</div>
            </div>

            <!-- Participant Cards -->
            <div class="participants-grid">
              <div
                v-for="participant in participants"
                :key="participant.id"
                class="participant-card"
                :class="{ 'participant-owner': participant.isOwner }"
              >
                <div class="participant-avatar">{{ participant.initials }}</div>
                <div class="participant-info">
                  <div class="participant-name-row">
                    <span class="participant-name">{{ participant.name }}</span>
                    <svg
                      v-if="participant.isOwner"
                      width="16"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_154_915)">
                        <path
                          d="M8.31245 2.17745C8.34122 2.12518 8.3835 2.0816 8.43486 2.05125C8.48622 2.02089 8.54479 2.00488 8.60445 2.00488C8.66411 2.00488 8.72268 2.02089 8.77404 2.05125C8.8254 2.0816 8.86767 2.12518 8.89645 2.17745L10.8644 5.91345C10.9114 5.99995 10.9769 6.075 11.0563 6.13319C11.1356 6.19138 11.2269 6.23128 11.3235 6.25002C11.4201 6.26876 11.5197 6.26587 11.6151 6.24156C11.7104 6.21726 11.7992 6.17214 11.8751 6.10945L14.7264 3.66678C14.7812 3.62226 14.8486 3.59626 14.9191 3.59251C14.9895 3.58877 15.0594 3.60748 15.1185 3.64594C15.1777 3.68441 15.2231 3.74065 15.2482 3.80657C15.2734 3.87249 15.2769 3.94469 15.2584 4.01278L13.3691 10.8434C13.3305 10.9832 13.2475 11.1066 13.1325 11.1949C13.0174 11.2832 12.8768 11.3316 12.7318 11.3328H4.47778C4.33267 11.3318 4.19186 11.2834 4.07671 11.1951C3.96156 11.1068 3.87838 10.9833 3.83978 10.8434L1.95112 4.01345C1.93262 3.94536 1.9362 3.87316 1.96134 3.80724C1.98649 3.74132 2.0319 3.68508 2.09105 3.64661C2.1502 3.60814 2.22002 3.58944 2.29048 3.59318C2.36093 3.59692 2.42838 3.62293 2.48312 3.66745L5.33378 6.11011C5.40965 6.17281 5.49845 6.21793 5.59382 6.24223C5.6892 6.26654 5.78876 6.26942 5.88538 6.25069C5.982 6.23195 6.07327 6.19205 6.15264 6.13386C6.23202 6.07567 6.29752 6.00062 6.34445 5.91411L8.31245 2.17745Z"
                          stroke="#EAB308"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3.9375 14H13.2708"
                          stroke="#EAB308"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                    <div v-if="participant.isCurrentUser" class="badge you-badge">Bạn</div>
                  </div>

                  <!-- Status badges -->
                  <div class="participant-badges">
                    <div v-if="participant.isOwner" class="owner-badge">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_154_921)">
                          <path
                            d="M6.38522 2.03323C6.4068 1.99403 6.4385 1.96135 6.47702 1.93858C6.51555 1.91582 6.55947 1.90381 6.60422 1.90381C6.64896 1.90381 6.69289 1.91582 6.73141 1.93858C6.76993 1.96135 6.80163 1.99403 6.82322 2.03323L8.29922 4.83523C8.33441 4.90011 8.38354 4.9564 8.44307 5.00004C8.5026 5.04368 8.57105 5.07361 8.64352 5.08766C8.71598 5.10171 8.79066 5.09955 8.86218 5.08132C8.93371 5.06309 9.00032 5.02925 9.05722 4.98223L11.1957 3.15023C11.2368 3.11684 11.2874 3.09734 11.3402 3.09453C11.393 3.09172 11.4454 3.10575 11.4898 3.1346C11.5341 3.16345 11.5682 3.20564 11.587 3.25508C11.6059 3.30452 11.6086 3.35867 11.5947 3.40973L10.1777 8.53273C10.1488 8.63756 10.0865 8.73011 10.0002 8.79634C9.91396 8.86256 9.80846 8.89886 9.69972 8.89973H3.50922C3.40038 8.89897 3.29477 8.86272 3.20841 8.79649C3.12205 8.73025 3.05966 8.63765 3.03072 8.53273L1.61422 3.41023C1.60034 3.35917 1.60303 3.30502 1.62189 3.25558C1.64075 3.20614 1.67481 3.16395 1.71917 3.1351C1.76353 3.10625 1.81589 3.09222 1.86874 3.09503C1.92158 3.09784 1.97216 3.11734 2.01322 3.15073L4.15122 4.98273C4.20812 5.02975 4.27472 5.06359 4.34625 5.08182C4.41778 5.10005 4.49245 5.10221 4.56492 5.08816C4.63738 5.07411 4.70583 5.04418 4.76536 5.00054C4.82489 4.9569 4.87402 4.90061 4.90922 4.83573L6.38522 2.03323Z"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3.10449 10.9001H10.1045"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                      </svg>
                      <span>Chủ phòng</span>
                    </div>

                    <div
                      class="ready-badge"
                      :class="{ ready: participant.isReady, 'not-ready': !participant.isReady }"
                    >
                      <svg
                        v-if="participant.isReady"
                        width="12"
                        height="12"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_154_1328)">
                          <path
                            d="M8.60449 11.2999V10.2999C8.60449 9.76949 8.39378 9.26079 8.01871 8.88571C7.64363 8.51064 7.13493 8.29993 6.60449 8.29993H3.60449C3.07406 8.29993 2.56535 8.51064 2.19028 8.88571C1.81521 9.26079 1.60449 9.76949 1.60449 10.2999V11.2999"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5.10449 6.29993C6.20906 6.29993 7.10449 5.4045 7.10449 4.29993C7.10449 3.19536 6.20906 2.29993 5.10449 2.29993C3.99992 2.29993 3.10449 3.19536 3.10449 4.29993C3.10449 5.4045 3.99992 6.29993 5.10449 6.29993Z"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.60449 6.29993L9.60449 7.29993L11.6045 5.29993"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                      </svg>
                      <svg
                        v-else
                        width="12"
                        height="12"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_154_1074)">
                          <path
                            d="M8.60059 11.3V10.3C8.60059 9.76962 8.38987 9.26091 8.0148 8.88584C7.63973 8.51076 7.13102 8.30005 6.60059 8.30005H3.60059C3.07015 8.30005 2.56145 8.51076 2.18637 8.88584C1.8113 9.26091 1.60059 9.76962 1.60059 10.3V11.3"
                            stroke="#8457FF"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5.10059 6.30005C6.20516 6.30005 7.10059 5.40462 7.10059 4.30005C7.10059 3.19548 6.20516 2.30005 5.10059 2.30005C3.99602 2.30005 3.10059 3.19548 3.10059 4.30005C3.10059 5.40462 3.99602 6.30005 5.10059 6.30005Z"
                            stroke="#8457FF"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9.10059 4.80005L11.6006 7.30005"
                            stroke="#8457FF"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M11.6006 4.80005L9.10059 7.30005"
                            stroke="#8457FF"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                      </svg>
                      <span>{{ participant.isReady ? 'Sẵn sàng' : 'Chưa sẵn sàng' }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Side Panel -->
          <div class="right-panel">
            <!-- Room Info -->
            <div class="room-info-card">
              <h3 class="card-title">Thông tin phòng</h3>

              <div class="info-list">
                <div class="info-item">
                  <span class="info-label">Tổng số câu:</span>
                  <span class="info-value">{{ totalQuestions }}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Thời gian/câu:</span>
                  <span class="info-value">{{ timePerQuestion }}s</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Người chơi:</span>
                  <span class="info-value">{{ participants.length }}/{{ maxParticipants }}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Chủ phòng:</span>
                  <span class="info-value">{{ roomOwnerName }}</span>
                </div>
              </div>
            </div>

            <!-- User Status Section -->
            <div class="user-status-card">
              <h3 class="card-title">Trạng thái của bạn</h3>

              <button
                class="status-btn"
                :class="{ ready: currentUserReady, 'not-ready': !currentUserReady }"
                @click="toggleReady"
              >
                <svg
                  v-if="currentUserReady"
                  width="16"
                  height="16"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_154_1377)">
                    <path
                      d="M12.5996 16.5499V15.0499C12.5996 14.2543 12.2835 13.4912 11.7209 12.9286C11.1583 12.366 10.3953 12.0499 9.59961 12.0499H5.09961C4.30396 12.0499 3.5409 12.366 2.97829 12.9286C2.41568 13.4912 2.09961 14.2543 2.09961 15.0499V16.5499"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.34961 9.04993C9.00646 9.04993 10.3496 7.70678 10.3496 6.04993C10.3496 4.39307 9.00646 3.04993 7.34961 3.04993C5.69275 3.04993 4.34961 4.39307 4.34961 6.04993C4.34961 7.70678 5.69275 9.04993 7.34961 9.04993Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.5996 9.04993L14.0996 10.5499L17.0996 7.54993"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
                <svg
                  v-else
                  width="16"
                  height="16"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_154_1130)">
                    <path
                      d="M11.2708 14.7999V13.4666C11.2708 12.7593 10.9899 12.0811 10.4898 11.581C9.98969 11.0809 9.31141 10.7999 8.60417 10.7999H4.60417C3.89692 10.7999 3.21865 11.0809 2.71855 11.581C2.21845 12.0811 1.9375 12.7593 1.9375 13.4666V14.7999"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.60417 8.13326C8.07693 8.13326 9.27083 6.93935 9.27083 5.46659C9.27083 3.99383 8.07693 2.79993 6.60417 2.79993C5.13141 2.79993 3.9375 3.99383 3.9375 5.46659C3.9375 6.93935 5.13141 8.13326 6.60417 8.13326Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.9375 6.13324L15.2708 9.46657"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.2708 6.13324L11.9375 9.46657"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
                <span>{{ currentUserReady ? 'Đã sẵn sàng' : 'Chưa sẵn sàng' }}</span>
              </button>
            </div>

            <!-- Start Game Section (Only for Room Owner) -->
            <div v-if="isRoomOwner" class="start-game-card">
              <h3 class="card-title">Bắt đầu</h3>

              <button class="start-btn" :disabled="!canStartGame" @click="startGame">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.7998 2.6001L14.1331 8.6001L4.7998 14.6001V2.6001Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>Bắt đầu thử thách</span>
              </button>

              <p class="start-requirement">
                Cần ít nhất 2 người để bắt đầu
                ({{ participants.length }}/{{ maxParticipants }} người tham gia)
              </p>
            </div>

            <!-- Leave Room -->
            <div class="leave-room-card">
              <button class="leave-btn" @click="leaveRoom">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H6"
                    stroke="#DC2626"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.667 11.3334L14.0003 8.00008L10.667 4.66675"
                    stroke="#DC2626"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14 8H6"
                    stroke="#DC2626"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>Rời khỏi phòng</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// Room data
const totalQuestions = ref(10)
const timePerQuestion = ref(20)
const maxParticipants = ref(4)
const roomCode = ref('ABC')
const roomName = ref('Phòng chờ')
// const currentUserId = ref('user1') // This would come from auth - currently using isCurrentUser flag
const currentUserReady = ref(false)

// Sample participants data - would come from real-time server
// When user creates room, they should be the only participant and owner
const participants = ref([
  {
    id: 'user1',
    name: 'Người Dùng',
    initials: 'ND',
    isOwner: true,
    isReady: false,
    isCurrentUser: true,
  },
])

// Computed properties
const isRoomOwner = computed(() => {
  const currentUser = participants.value.find((p) => p.isCurrentUser)
  return currentUser?.isOwner || false
})

const roomOwnerName = computed(() => {
  const owner = participants.value.find((p) => p.isOwner)
  return owner?.name || 'Unknown'
})

const canStartGame = computed(() => {
  const readyCount = participants.value.filter((p) => p.isReady).length
  const totalParticipants = participants.value.length
  return readyCount >= 2 && totalParticipants >= 2
})

const roomStatusClass = computed(() => {
  if (canStartGame.value) {
    return 'ready'
  }
  return 'waiting'
})

const roomStatusText = computed(() => {
  if (canStartGame.value) {
    return '🟢 Sẵn sàng'
  }
  return '🟡 Chờ'
})

// Authentication check
const checkAuthentication = () => {
  // Simple auth check - in real app this would check actual login status
  const isLoggedIn = localStorage.getItem('user_token') || sessionStorage.getItem('user_session')

  if (!isLoggedIn) {
    // Redirect to challenges page with message
    router.push('/dashboard/challenges')
    return false
  }
  return true
}

// Initialize room data from query params
onMounted(() => {
  // Check authentication first
  if (!checkAuthentication()) {
    return
  }

  if (route.query.roomCode) {
    roomCode.value = route.query.roomCode
  }
  if (route.query.roomName) {
    roomName.value = route.query.roomName
  }
  if (route.query.questions) {
    totalQuestions.value = parseInt(route.query.questions)
  }
  if (route.query.timePerQuestion) {
    timePerQuestion.value = parseInt(route.query.timePerQuestion)
  }
  if (route.query.maxPlayers) {
    maxParticipants.value = parseInt(route.query.maxPlayers)
  }

  // Check if user joined or created room
  if (route.query.mode === 'join') {
    // Joining someone else's room - user is not owner
    const currentUser = participants.value.find((p) => p.isCurrentUser)
    if (currentUser) {
      currentUser.isOwner = false
    }
  } else {
    // Created own room - user is owner
    const currentUser = participants.value.find((p) => p.isCurrentUser)
    if (currentUser) {
      currentUser.isOwner = true
    }
  }
})

// Methods
const toggleReady = () => {
  currentUserReady.value = !currentUserReady.value

  // Update participant data
  const currentUser = participants.value.find((p) => p.isCurrentUser)
  if (currentUser) {
    currentUser.isReady = currentUserReady.value
  }
}

const startGame = () => {
  if (canStartGame.value && isRoomOwner.value) {
    // Handle starting the game
    console.log('Starting game...')
    // Navigate to challenge start countdown page
    router.push({
      path: '/dashboard/challenge-start',
      query: {
        questions: totalQuestions.value,
        timePerQuestion: timePerQuestion.value,
        participants: participants.value.length,
      },
    })
  }
}

const leaveRoom = () => {
  // Handle leaving the room
  router.push('/dashboard/challenges')
}
</script>

<style scoped>
.waiting-room-page {
  min-height: 100vh;
  background: linear-gradient(90deg, #eff6ff 100%, #f5f3ff 0%);
  font-family:
    'Inter',
    -apple-system,
    'Roboto',
    'Helvetica',
    sans-serif;
  contain: layout style;
}

/* Main Content */
.main-content {
  padding: 32px 16px;
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Room Header */
.room-header {
  text-align: center;
  margin-bottom: 32px;
}

.room-title {
  font-size: 30px;
  font-weight: 700;
  color: #111827;
  margin: 0 0 12px 0;
}

.room-subtitle {
  font-size: 20px;
  font-weight: 400;
  color: #374151;
  margin: 0 0 20px 0;
}

.room-stats {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
}

.room-stat {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #4b5563;
  font-size: 14px;
}

/* Content Grid */
.content-grid {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 32px;
  align-items: start;
  will-change: auto;
}

/* Participants Section */
.participants-section {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 24px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.section-title-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

.section-title {
  font-size: 24px;
  font-weight: 600;
  color: #000;
  margin: 0;
}

.status-badge {
  padding: 3px 10px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 600;
}

.status-badge.waiting {
  background: #f2f0ff;
  color: #8457ff;
}

.status-badge.ready {
  background: #8457ff;
  color: #fff;
}

/* Participants Grid */
.participants-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
}

.participant-card {
  background: #f0fdf4;
  border: 1px solid #86efac;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.participant-card.participant-owner {
  border-color: #86efac;
}

.participant-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(90deg, #7c3aed 100%, #3b82f6 0%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  flex-shrink: 0;
}

.participant-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.participant-name-row {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.participant-name {
  color: #111827;
  font-size: 16px;
  font-weight: 500;
}

.you-badge {
  padding: 3px 10px;
  border: 1px solid #e2e8f0;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 600;
  color: #020817;
  background: #fff;
}

.participant-badges {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.owner-badge {
  display: flex;
  align-items: center;
  gap: 4px;
  background: #8457ff;
  color: white;
  padding: 2px 10px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 600;
}

.ready-badge {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 2px 10px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 600;
}

.ready-badge.ready {
  background: #16a34a;
  color: white;
}

.ready-badge.not-ready {
  background: #f2f0ff;
  color: #8457ff;
}

/* Right Panel */
.right-panel {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* Card Styles */
.room-info-card,
.user-status-card,
.start-game-card,
.leave-room-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 24px;
}

.card-title {
  font-size: 24px;
  font-weight: 600;
  color: #000;
  margin: 0 0 24px 0;
}

/* Room Info */
.info-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info-label {
  color: #4b5563;
  font-size: 16px;
  font-weight: 400;
}

.info-value {
  color: #000;
  font-size: 16px;
  font-weight: 500;
}

/* User Status */
.status-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.status-btn.ready {
  background: #2563eb;
  color: white;
}

.status-btn.not-ready {
  background: #2563eb;
  color: white;
}

.status-btn:hover {
  opacity: 0.9;
}

/* Start Game */
.start-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #2563eb;
  color: white;
  padding: 12px 16px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: 12px;
}

.start-btn:hover:not(:disabled) {
  background: #1d4ed8;
}

.start-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.start-requirement {
  color: #6b7280;
  font-size: 14px;
  text-align: center;
  margin: 0;
}

/* Leave Room */
.leave-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #fff;
  border: 1px solid #fca5a5;
  color: #dc2626;
  padding: 12px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s ease;
}

.leave-btn:hover {
  background: #fef2f2;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .right-panel {
    order: -1;
  }
}

@media (max-width: 768px) {
  .main-content {
    padding: 16px 8px;
  }

  .room-stats {
    flex-direction: column;
    gap: 16px;
  }

  .participants-grid {
    grid-template-columns: 1fr;
  }

  .participant-name-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
}

@media (max-width: 480px) {
  .participants-section,
  .room-info-card,
  .user-status-card,
  .start-game-card,
  .leave-room-card {
    padding: 16px;
  }

  .participant-card {
    flex-direction: column;
    text-align: center;
  }

  .participant-info {
    align-items: center;
  }
}
</style>
