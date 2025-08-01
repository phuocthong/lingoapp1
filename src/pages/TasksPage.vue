<template>
  <q-page class="tasks-page">
    <div class="tasks-container">
      <!-- Sidebar Navigation -->
      <div class="sidebar">
        <div class="nav-links">
          <div class="nav-link" @click="$router.push('/dashboard')">
            <svg
              width="29"
              height="29"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.9891 4.18286C13.8858 4.18286 12.8035 4.48899 11.8599 5.06801L5.8219 8.77317C4.934 9.31801 4.19981 10.0855 3.69028 11.0015C3.18075 11.9174 2.91307 12.951 2.91309 14.0023V21.6963C2.91309 23.3179 3.54923 24.873 4.68158 26.0196C5.81392 27.1662 7.34972 27.8104 8.9511 27.8104H21.0271C22.6285 27.8104 24.1643 27.1662 25.2966 26.0196C26.429 24.873 27.0651 23.3179 27.0651 21.6963V14.001C27.0649 12.95 26.7971 11.9165 26.2876 11.0008C25.778 10.0851 25.044 9.31788 24.1563 8.77318L18.1183 5.06802C17.1747 4.489 16.0924 4.18286 14.9891 4.18286ZM13.1116 7.15959C13.6778 6.81219 14.3271 6.62851 14.9891 6.62851C15.6511 6.62851 16.3004 6.81219 16.8666 7.15959L22.9046 10.8648C23.4372 11.1916 23.8777 11.6519 24.1834 12.2013C24.4891 12.7507 24.6497 13.3705 24.6499 14.001V21.6963C24.6499 22.6692 24.2682 23.6023 23.5888 24.2903C22.9094 24.9783 21.9879 25.3648 21.0271 25.3648H19.8195V21.6963C19.8195 20.399 19.3106 19.1549 18.4047 18.2376C17.4988 17.3203 16.2702 16.805 14.9891 16.805C13.708 16.805 12.4794 17.3203 11.5735 18.2376C10.6676 19.1549 10.1587 20.399 10.1587 21.6963V25.3648H8.9511C7.99027 25.3648 7.06879 24.9783 6.38939 24.2903C5.70998 23.6023 5.32829 22.6692 5.32829 21.6963V14.0023C5.32828 13.3715 5.48889 12.7513 5.79461 12.2017C6.10033 11.6521 6.54083 11.1917 7.07358 10.8648L13.1116 7.15959ZM16.6969 19.9669C17.1499 20.4256 17.4043 21.0477 17.4043 21.6963V25.3648H12.5739V21.6963C12.5739 21.0477 12.8284 20.4256 13.2813 19.9669C13.7342 19.5083 14.3486 19.2506 14.9891 19.2506C15.6297 19.2506 16.244 19.5083 16.6969 19.9669Z"
                fill="#5C5E64"
              />
            </svg>
            <span class="nav-label">Dashboard</span>
          </div>

          <div class="nav-link" @click="$router.push('/dashboard/friends')">
            <svg
              width="29"
              height="29"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.9899 4.33423C13.3885 4.33423 11.8527 4.97839 10.7204 6.12502C9.58805 7.27164 8.95191 8.82679 8.95191 10.4484C8.95191 12.0699 9.58805 13.6251 10.7204 14.7717C10.8001 14.8524 10.8817 14.9305 10.9652 15.0062C9.9309 15.4861 8.97868 16.1518 8.15869 16.9821C6.34693 18.8167 5.3291 21.3049 5.3291 23.8994V25.1223C5.3291 25.7976 5.86976 26.3451 6.5367 26.3451C7.20364 26.3451 7.74431 25.7976 7.74431 25.1223V23.8994C7.74431 21.9536 8.50768 20.0874 9.8665 18.7114C11.2253 17.3355 13.0683 16.5625 14.9899 16.5625C16.9116 16.5625 18.7545 17.3355 20.1133 18.7114C21.4722 20.0874 22.2355 21.9536 22.2355 23.8994V25.1223C22.2355 25.7976 22.7762 26.3451 23.4431 26.3451C24.1101 26.3451 24.6507 25.7976 24.6507 25.1223V23.8994C24.6507 21.3049 23.6329 18.8167 21.8211 16.9821C21.0012 16.1518 20.0489 15.4861 19.0146 15.0062C19.0981 14.9305 19.1798 14.8524 19.2594 14.7717C20.3918 13.6251 21.0279 12.0699 21.0279 10.4484C21.0279 8.82679 20.3918 7.27164 19.2594 6.12502C18.1271 4.97839 16.5913 4.33423 14.9899 4.33423ZM12.4282 7.85435C13.1076 7.16638 14.0291 6.77988 14.9899 6.77988C15.9507 6.77988 16.8722 7.16638 17.5516 7.85435C18.231 8.54233 18.6127 9.47542 18.6127 10.4484C18.6127 11.4213 18.231 12.3544 17.5516 13.0424C16.8722 13.7303 15.9507 14.1168 14.9899 14.1168C14.0291 14.1168 13.1076 13.7303 12.4282 13.0424C11.7488 12.3544 11.3671 11.4213 11.3671 10.4484C11.3671 9.47542 11.7488 8.54233 12.4282 7.85435Z"
                fill="#5C5E64"
              />
            </svg>
            <span class="nav-label">Bạn bè</span>
          </div>

          <div class="nav-link">
            <svg
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21.0974H20.8223C20.6126 20.0766 20.2435 19.1378 19.7148 18.281C19.1862 17.4242 18.5436 16.686 17.7871 16.0662C17.0306 15.4464 16.1784 14.9633 15.2305 14.6169C14.2826 14.2706 13.2891 14.0974 12.25 14.0974C11.4479 14.0974 10.6732 14.2022 9.92578 14.4119C9.17839 14.6215 8.48112 14.9132 7.83398 15.2869C7.18685 15.6606 6.59896 16.1163 6.07031 16.6541C5.54167 17.1918 5.08594 17.7843 4.70312 18.4314C4.32031 19.0785 4.02409 19.7758 3.81445 20.5232C3.60482 21.2706 3.5 22.0453 3.5 22.8474H1.75C1.75 21.7537 1.90951 20.7009 2.22852 19.6892C2.54753 18.6775 3.00781 17.7432 3.60938 16.8865C4.21094 16.0297 4.92188 15.2686 5.74219 14.6033C6.5625 13.9379 7.49219 13.4138 8.53125 13.031C7.5013 12.3565 6.69922 11.5089 6.125 10.488C5.55078 9.4672 5.25911 8.337 5.25 7.09741C5.25 6.13127 5.43229 5.22437 5.79688 4.37671C6.16146 3.52905 6.6582 2.78621 7.28711 2.14819C7.91602 1.51017 8.65885 1.00887 9.51562 0.644287C10.3724 0.279704 11.2839 0.0974121 12.25 0.0974121C13.2161 0.0974121 14.123 0.279704 14.9707 0.644287C15.8184 1.00887 16.5612 1.50562 17.1992 2.13452C17.8372 2.76343 18.3385 3.50627 18.7031 4.36304C19.0677 5.21981 19.25 6.13127 19.25 7.09741C19.25 7.69897 19.1771 8.28687 19.0312 8.86108C18.8854 9.4353 18.6667 9.97762 18.375 10.488C18.0833 10.9985 17.7415 11.4679 17.3496 11.8962C16.9577 12.3246 16.4974 12.7029 15.9688 13.031C16.9896 13.4229 17.9284 13.9607 18.7852 14.6443C19.6419 15.3279 20.3802 16.13 21 17.0505V21.0974ZM7 7.09741C7 7.82658 7.13672 8.50562 7.41016 9.13452C7.68359 9.76343 8.05729 10.3194 8.53125 10.8025C9.00521 11.2856 9.5612 11.6638 10.1992 11.9373C10.8372 12.2107 11.5208 12.3474 12.25 12.3474C12.9701 12.3474 13.6491 12.2107 14.2871 11.9373C14.9251 11.6638 15.4811 11.2901 15.9551 10.8162C16.429 10.3422 16.8073 9.78621 17.0898 9.14819C17.3724 8.51017 17.5091 7.82658 17.5 7.09741C17.5 6.37736 17.3633 5.69832 17.0898 5.0603C16.8164 4.42228 16.4427 3.86629 15.9688 3.39233C15.4948 2.91838 14.9342 2.54012 14.2871 2.25757C13.64 1.97502 12.9609 1.8383 12.25 1.84741C11.5208 1.84741 10.8418 1.98413 10.2129 2.25757C9.58398 2.53101 9.02799 2.9047 8.54492 3.37866C8.06185 3.85262 7.68359 4.41317 7.41016 5.0603C7.13672 5.70744 7 6.38647 7 7.09741ZM24.5 22.8474H28V24.5974H24.5V28.0974H22.75V24.5974H19.25V22.8474H22.75V19.3474H24.5V22.8474Z"
                fill="#5C5E64"
              />
            </svg>
            <span class="nav-label">Thêm bạn bè</span>
          </div>

          <div class="nav-link active">
            <svg
              width="29"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.1591 11.1869C9.49217 11.1869 8.9515 11.7344 8.9515 12.4097C8.9515 13.0851 9.49217 13.6326 10.1591 13.6326H19.8199C20.4869 13.6326 21.0275 13.0851 21.0275 12.4097C21.0275 11.7344 20.4869 11.1869 19.8199 11.1869H10.1591Z"
                fill="#5C5E64"
              />
              <path
                d="M10.1591 16.0782C9.49217 16.0782 8.9515 16.6257 8.9515 17.301C8.9515 17.9764 9.49217 18.5239 10.1591 18.5239H14.9895C15.6565 18.5239 16.1971 17.9764 16.1971 17.301C16.1971 16.6257 15.6565 16.0782 14.9895 16.0782H10.1591Z"
                fill="#5C5E64"
              />
              <path
                d="M10.1591 20.9695C9.49217 20.9695 8.9515 21.517 8.9515 22.1923C8.9515 22.8677 9.49217 23.4152 10.1591 23.4152H19.8199C20.4869 23.4152 21.0275 22.8677 21.0275 22.1923C21.0275 21.517 20.4869 20.9695 19.8199 20.9695H10.1591Z"
                fill="#5C5E64"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25.7115 6.46384C25.6144 6.22568 25.4717 6.0093 25.2917 5.82713L21.4907 1.97821C21.1287 1.61119 20.6376 1.40475 20.1253 1.4043H6.05326C5.54082 1.4043 5.04936 1.61043 4.68701 1.97735C4.32466 2.34427 4.12109 2.84192 4.12109 3.36082V26.3499C4.12109 26.6069 4.17107 26.8613 4.26817 27.0987C4.36527 27.3361 4.50759 27.5517 4.68701 27.7334C4.86643 27.9151 5.07943 28.0592 5.31385 28.1575C5.54828 28.2559 5.79953 28.3065 6.05326 28.3065H23.9258C24.1795 28.3065 24.4307 28.2559 24.6652 28.1575C24.8996 28.0592 25.1126 27.9151 25.292 27.7334C25.4714 27.5517 25.6138 27.3361 25.7109 27.0987C25.808 26.8613 25.8579 26.6069 25.8579 26.3499V7.2131L24.6503 7.21272L25.8579 7.21572L25.8579 7.2131C25.8582 6.95604 25.8085 6.70144 25.7115 6.46384ZM18.6123 6.90701C18.6123 7.92004 19.4233 8.74125 20.4237 8.74125H23.4427V25.8608H6.5363V3.84995H18.6123V6.90701ZM22.3387 6.2956L21.0275 4.96787V6.2956H22.3387Z"
                fill="#5C5E64"
              />
            </svg>
            <span class="nav-label">Nhiệm v���</span>
          </div>

          <div class="nav-link" @click="$router.push('/dashboard/rewards')">
            <svg
              width="28"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.1652 10.8885H23.8319V8.33113C23.8319 8.15147 23.7572 7.98658 23.6079 7.83647C23.4585 7.68636 23.294 7.61169 23.1144 7.61247H5.8827C5.70382 7.61247 5.53932 7.68713 5.3892 7.83647C5.23909 7.9858 5.16443 8.15069 5.1652 8.33113V10.8885ZM3.99854 8.33113C3.99854 7.79369 4.17859 7.3453 4.5387 6.98597C4.89882 6.62663 5.34682 6.44658 5.8827 6.4458H23.1144C23.651 6.4458 24.099 6.62586 24.4584 6.98597C24.8177 7.34608 24.9978 7.79447 24.9985 8.33113V13.6698H5.1652V20.895C5.1652 21.0739 5.23987 21.2384 5.3892 21.3885C5.53854 21.5386 5.70304 21.6132 5.8827 21.6125H11.317V22.7791H5.8827C5.34604 22.7791 4.89765 22.5995 4.53754 22.2401C4.17743 21.8808 3.99776 21.432 3.99854 20.8938V8.33113ZM17.5809 24.5746L13.431 20.4236L14.2559 19.5976L17.5809 22.9098L24.218 16.2726L25.044 17.1126L17.5809 24.5746ZM5.1652 8.32997V20.895C5.1652 21.0739 5.23987 21.2372 5.3892 21.3873C5.53854 21.5374 5.70304 21.6132 5.8827 21.6125L5.1652 21.6113V16.2936V19.6128V7.61247H5.88387C5.7042 7.61247 5.53932 7.68713 5.3892 7.83647C5.23909 7.9858 5.16443 8.15069 5.1652 8.33113"
                fill="#5C5E64"
              />
            </svg>
            <span class="nav-label">Đổi điểm</span>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="tasks-content">
        <div class="tasks-header">
          <h1 class="tasks-title">Nhiệm vụ của tôi</h1>
        </div>

        <!-- Task Tabs -->
        <div class="task-tabs">
          <q-btn
            flat
            class="tab-btn"
            :class="{ active: activeTab === 'daily' }"
            @click="activeTab = 'daily'"
          >
            Hàng ngày ( 1 )
          </q-btn>
          <q-btn
            flat
            class="tab-btn"
            :class="{ active: activeTab === 'weekly' }"
            @click="activeTab = 'weekly'"
          >
            Hàng tuần ( 2 )
          </q-btn>
        </div>

        <!-- Task List -->
        <div class="task-list">
          <!-- Task Item 1 -->
          <div class="task-item">
            <div class="task-main">
              <div class="task-info">
                <div class="task-header">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_380_2262)">
                      <path
                        d="M5.93359 1.7334V4.40007"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.2666 1.7334V4.40007"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.2668 3.06689H3.93343C3.19705 3.06689 2.6001 3.66385 2.6001 4.40023V13.7336C2.6001 14.4699 3.19705 15.0669 3.93343 15.0669H13.2668C14.0031 15.0669 14.6001 14.4699 14.6001 13.7336V4.40023C14.6001 3.66385 14.0031 3.06689 13.2668 3.06689Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2.6001 7.06689H14.6001"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                  <span class="task-name">Thách đấu với 5 bạn bè</span>
                </div>
                <p class="task-description">
                  Tham gia thách đấu với ít nhất 5 người bạn trong tuần
                </p>

                <div class="task-progress">
                  <div class="progress-info">
                    <div class="progress-text">
                      <span>Tiến độ: 2/5</span>
                      <span>40 %</span>
                    </div>
                    <div class="progress-bar">
                      <div class="progress-fill" style="width: 40%"></div>
                    </div>
                  </div>
                  <div class="task-rewards">
                    <span class="reward-xp">+ 200 XP</span>
                    <span class="reward-points">+ 100 điểm</span>
                  </div>
                </div>

                <div class="task-meta">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_380_2281)">
                      <path
                        d="M6.6001 11.0002C9.36152 11.0002 11.6001 8.76167 11.6001 6.00024C11.6001 3.23882 9.36152 1.00024 6.6001 1.00024C3.83867 1.00024 1.6001 3.23882 1.6001 6.00024C1.6001 8.76167 3.83867 11.0002 6.6001 11.0002Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.6001 3.00024V6.00024L8.6001 7.00024"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                  <span class="task-deadline">Hạn: 1/8/2025</span>
                </div>
              </div>

              <div class="task-actions">
                <q-btn flat class="action-btn">+1</q-btn>
                <q-btn flat class="action-btn primary">Hoàn thành</q-btn>
                <q-btn flat class="action-btn danger">Xóa</q-btn>
              </div>
            </div>
          </div>

          <!-- Task Item 2 -->
          <div class="task-item">
            <div class="task-main">
              <div class="task-info">
                <div class="task-header">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_380_2297)">
                      <path
                        d="M4.60026 6.20003H3.60026C3.15823 6.20003 2.73431 6.02444 2.42175 5.71188C2.10919 5.39932 1.93359 4.97539 1.93359 4.53337C1.93359 4.09134 2.10919 3.66742 2.42175 3.35485C2.73431 3.04229 3.15823 2.8667 3.60026 2.8667H4.60026"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.6001 6.20003H13.6001C14.0421 6.20003 14.466 6.02444 14.7786 5.71188C15.0912 5.39932 15.2668 4.97539 15.2668 4.53337C15.2668 4.09134 15.0912 3.66742 14.7786 3.35485C14.466 3.04229 14.0421 2.8667 13.6001 2.8667H12.6001"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.2666 14.8667H13.9333"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.2666 9.97339V11.5334C7.2666 11.9001 6.95327 12.1867 6.61993 12.3401C5.83327 12.7001 5.2666 13.6934 5.2666 14.8667"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.93359 9.97339V11.5334C9.93359 11.9001 10.2469 12.1867 10.5803 12.3401C11.3669 12.7001 11.9336 13.6934 11.9336 14.8667"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.6001 1.5332H4.6001V6.19987C4.6001 7.26074 5.02153 8.27815 5.77167 9.0283C6.52182 9.77844 7.53923 10.1999 8.6001 10.1999C9.66096 10.1999 10.6784 9.77844 11.4285 9.0283C12.1787 8.27815 12.6001 7.26074 12.6001 6.19987V1.5332Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                  <span class="task-name">Đạt top 10 leaderboard</span>
                </div>
                <p class="task-description">Leo lên top 10 bảng xếp hạng tuần này</p>

                <div class="task-progress">
                  <div class="progress-info">
                    <div class="progress-text">
                      <span>Tiến độ: 0 / 1</span>
                      <span>0 %</span>
                    </div>
                    <div class="progress-bar">
                      <div class="progress-fill" style="width: 0%"></div>
                    </div>
                  </div>
                  <div class="task-rewards">
                    <span class="reward-xp">+ 300 XP</span>
                    <span class="reward-points">+ 150 điểm</span>
                  </div>
                </div>

                <div class="task-meta">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_380_2319)">
                      <path
                        d="M6.6001 11.3999C9.36152 11.3999 11.6001 9.16133 11.6001 6.3999C11.6001 3.63848 9.36152 1.3999 6.6001 1.3999C3.83867 1.3999 1.6001 3.63848 1.6001 6.3999C1.6001 9.16133 3.83867 11.3999 6.6001 11.3999Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.6001 3.3999V6.3999L8.6001 7.3999"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                  <span class="task-deadline">Hạn: 1/8/2025</span>
                </div>
              </div>

              <div class="task-actions">
                <q-btn flat class="action-btn">+1</q-btn>
                <q-btn flat class="action-btn primary">Hoàn thành</q-btn>
                <q-btn flat class="action-btn danger">Xóa</q-btn>
              </div>
            </div>
          </div>

          <!-- Task Item 3 -->
          <div class="task-item">
            <div class="task-main">
              <div class="task-info">
                <div class="task-header">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_380_2462)">
                      <path
                        d="M5.93359 1.3335V4.00016"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.2666 1.3335V4.00016"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.2668 2.66699H3.93343C3.19705 2.66699 2.6001 3.26395 2.6001 4.00033V13.3337C2.6001 14.07 3.19705 14.667 3.93343 14.667H13.2668C14.0031 14.667 14.6001 14.07 14.6001 13.3337V4.00033C14.6001 3.26395 14.0031 2.66699 13.2668 2.66699Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2.6001 6.66699H14.6001"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                  <span class="task-name">Thách đấu với 5 bạn bè</span>
                </div>
                <p class="task-description">
                  Tham gia thách đấu với ít nhất 5 người bạn trong tuần
                </p>

                <div class="task-progress">
                  <div class="progress-info">
                    <div class="progress-text">
                      <span>Tiến độ: 2/5</span>
                      <span>40 %</span>
                    </div>
                    <div class="progress-bar">
                      <div class="progress-fill" style="width: 40%"></div>
                    </div>
                  </div>
                  <div class="task-rewards">
                    <span class="reward-xp">+ 200 XP</span>
                    <span class="reward-points">+ 100 điểm</span>
                  </div>
                </div>

                <div class="task-meta">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_380_2481)">
                      <path
                        d="M6.6001 11.6003C9.36152 11.6003 11.6001 9.36177 11.6001 6.60034C11.6001 3.83892 9.36152 1.60034 6.6001 1.60034C3.83867 1.60034 1.6001 3.83892 1.6001 6.60034C1.6001 9.36177 3.83867 11.6003 6.6001 11.6003Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.6001 3.60034V6.60034L8.6001 7.60034"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                  <span class="task-deadline">Hạn: 1/8/2025</span>
                </div>
              </div>

              <div class="task-actions">
                <q-btn flat class="action-btn">+1</q-btn>
                <q-btn flat class="action-btn primary">Hoàn thành</q-btn>
                <q-btn flat class="action-btn danger">Xóa</q-btn>
              </div>
            </div>
          </div>

          <!-- Task Item 4 -->
          <div class="task-item">
            <div class="task-main">
              <div class="task-info">
                <div class="task-header">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_380_2497)">
                      <path
                        d="M4.60026 6.80037H3.60026C3.15823 6.80037 2.73431 6.62478 2.42175 6.31222C2.10919 5.99966 1.93359 5.57574 1.93359 5.13371C1.93359 4.69168 2.10919 4.26776 2.42175 3.9552C2.73431 3.64264 3.15823 3.46704 3.60026 3.46704H4.60026"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.6001 6.80037H13.6001C14.0421 6.80037 14.466 6.62478 14.7786 6.31222C15.0912 5.99966 15.2668 5.57574 15.2668 5.13371C15.2668 4.69168 15.0912 4.26776 14.7786 3.9552C14.466 3.64264 14.0421 3.46704 13.6001 3.46704H12.6001"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.2666 15.467H13.9333"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.2666 10.5737V12.1337C7.2666 12.5004 6.95327 12.7871 6.61993 12.9404C5.83327 13.3004 5.2666 14.2937 5.2666 15.4671"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.93359 10.5737V12.1337C9.93359 12.5004 10.2469 12.7871 10.5803 12.9404C11.3669 13.3004 11.9336 14.2937 11.9336 15.4671"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.6001 2.13354H4.6001V6.80021C4.6001 7.86108 5.02153 8.87849 5.77167 9.62864C6.52182 10.3788 7.53923 10.8002 8.6001 10.8002C9.66096 10.8002 10.6784 10.3788 11.4285 9.62864C12.1787 8.87849 12.6001 7.86108 12.6001 6.80021V2.13354Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                  <span class="task-name">Đạt top 10 leaderboard</span>
                </div>
                <p class="task-description">Leo lên top 10 bảng xếp hạng tuần này</p>

                <div class="task-progress">
                  <div class="progress-info">
                    <div class="progress-text">
                      <span>Tiến độ: 0 / 1</span>
                      <span>0 %</span>
                    </div>
                    <div class="progress-bar">
                      <div class="progress-fill" style="width: 0%"></div>
                    </div>
                  </div>
                  <div class="task-rewards">
                    <span class="reward-xp">+ 300 XP</span>
                    <span class="reward-points">+ 150 điểm</span>
                  </div>
                </div>

                <div class="task-meta">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_380_2519)">
                      <path
                        d="M6.6001 11.0002C9.36152 11.0002 11.6001 8.76167 11.6001 6.00024C11.6001 3.23882 9.36152 1.00024 6.6001 1.00024C3.83867 1.00024 1.6001 3.23882 1.6001 6.00024C1.6001 8.76167 3.83867 11.0002 6.6001 11.0002Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.6001 3.00024V6.00024L8.6001 7.00024"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                  <span class="task-deadline">Hạn: 1/8/2025</span>
                </div>
              </div>

              <div class="task-actions">
                <q-btn flat class="action-btn">+1</q-btn>
                <q-btn flat class="action-btn primary">Hoàn thành</q-btn>
                <q-btn flat class="action-btn danger">Xóa</q-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('weekly')
</script>

<style scoped>
.tasks-page {
  background: white;
  min-height: 100vh;
}

.tasks-container {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
}

/* Sidebar */
.sidebar {
  width: 285px;
  background: white;
  padding: 20px 0;
  border-right: 1px solid #e2e8f0;
}

.nav-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 20px;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 15px 18px;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.nav-link:hover {
  background: #f1f5f9;
}

.nav-link.active {
  background: #f0f9ff;
  border: 1px solid #0ea5e9;
}

.nav-link svg {
  width: 29px;
  height: 29px;
  flex-shrink: 0;
}

.nav-label {
  color: #5c5e64;
  font-family: Inter;
  font-size: 20px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: -0.4px;
}

.nav-link.active .nav-label {
  color: #0ea5e9;
}

/* Main Content */
.tasks-content {
  flex: 1;
  padding: 24px 32px;
}

.tasks-header {
  margin-bottom: 24px;
}

.tasks-title {
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  margin: 0;
}

/* Task Tabs */
.task-tabs {
  background: #f1f5f9;
  border-radius: 6px;
  padding: 4px;
  display: inline-flex;
  margin-bottom: 24px;
}

.tab-btn {
  padding: 6px 12px;
  border-radius: 4px;
  color: #64748b;
  font-size: 14px;
  font-weight: 500;
  min-height: auto;
}

.tab-btn.active {
  background: white;
  color: #64748b;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

/* Task List */
.task-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.task-item {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  padding: 24px;
}

.task-main {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
}

.task-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.task-header {
  display: flex;
  align-items: center;
  gap: 8px;
}

.task-name {
  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
}

.task-description {
  color: #4b5563;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0;
}

.task-progress {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.progress-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-width: 258px;
}

.progress-text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}

.progress-bar {
  width: 100%;
  height: 16px;
  background: #f2f0ff;
  border-radius: 9999px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: #8457ff;
  transition: width 0.3s ease;
}

.task-rewards {
  display: flex;
  gap: 8px;
}

.reward-xp,
.reward-points {
  padding: 3px 11px;
  border-radius: 9999px;
  border: 1px solid #e2e8f0;
  font-family: Inter;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
}

.reward-xp {
  background: white;
  color: #000;
}

.reward-points {
  background: #fefce8;
  color: #a16207;
}

.task-meta {
  display: flex;
  align-items: center;
  gap: 8px;
}

.task-deadline {
  color: #6b7280;
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}

.task-actions {
  display: flex;
  gap: 8px;
  align-items: flex-start;
}

.action-btn {
  padding: 8px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  background: white;
  color: #000;
  font-size: 14px;
  font-weight: 500;
  min-height: auto;
}

.action-btn.primary {
  background: white;
  color: #000;
}

.action-btn.danger {
  background: transparent;
  color: #ef4444;
  border: none;
}

.action-btn:hover {
  background: #f9fafb;
}

/* Responsive */
@media (max-width: 768px) {
  .tasks-container {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #e2e8f0;
  }

  .nav-links {
    flex-direction: row;
    overflow-x: auto;
    padding: 0 16px;
  }

  .nav-link {
    flex-shrink: 0;
    min-width: 140px;
  }

  .tasks-content {
    padding: 16px;
  }

  .task-main {
    flex-direction: column;
    gap: 16px;
  }

  .task-actions {
    justify-content: flex-start;
    width: 100%;
  }

  .task-progress {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
}
</style>
