<template>
  <q-page class="rewards-page">
    <div class="rewards-container">
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

          <div class="nav-link">
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

          <div class="nav-link" @click="$router.push('/dashboard/tasks')">
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
            <span class="nav-label">Nhiệm vụ</span>
          </div>

          <div class="nav-link active">
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
      <div class="rewards-content">
        <!-- Header with User Points -->
        <div class="rewards-header">
          <div class="header-info">
            <h1 class="rewards-title">Cửa hàng thẻ cào</h1>
            <p class="rewards-subtitle">Đổi điểm tích lũy để nh��n thẻ cào điện thoại</p>
          </div>
          <div class="user-points">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_380_2448)">
                <path
                  d="M6.66699 12.4668C9.42842 12.4668 11.667 10.2282 11.667 7.4668C11.667 4.70537 9.42842 2.4668 6.66699 2.4668C3.90557 2.4668 1.66699 4.70537 1.66699 7.4668C1.66699 10.2282 3.90557 12.4668 6.66699 12.4668Z"
                  stroke="#CA8A04"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.0745 9.44165C15.8623 9.73534 16.5633 10.2229 17.1127 10.8593C17.6621 11.4957 18.0421 12.2604 18.2177 13.0825C18.3932 13.9047 18.3586 14.7579 18.1171 15.5632C17.8755 16.3685 17.4348 17.0998 16.8357 17.6897C16.2366 18.2795 15.4985 18.7087 14.6895 18.9377C13.8806 19.1666 13.027 19.1879 12.2076 18.9995C11.3883 18.8112 10.6296 18.4192 10.0019 17.86C9.37416 17.3007 8.89757 16.5922 8.61621 15.8"
                  stroke="#CA8A04"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.83301 5.80005H6.66634V9.13338"
                  stroke="#CA8A04"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.9249 12.3667L14.5082 12.9584L12.1582 15.3084"
                  stroke="#CA8A04"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
            <span class="points-amount">1,250 điểm</span>
          </div>
        </div>

        <!-- Card Grid -->
        <div class="cards-grid">
          <!-- Viettel Card 1 -->
          <div class="card-item">
            <div class="popular-badge">🔥 Phổ biến</div>
            <div class="card-content">
              <svg
                width="32"
                height="32"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.5331 23.4933V27.4933C29.5346 27.8647 29.4586 28.2322 29.3098 28.5724C29.161 28.9127 28.9428 29.2181 28.6692 29.4691C28.3956 29.7202 28.0725 29.9113 27.7208 30.0303C27.369 30.1492 26.9963 30.1934 26.6264 30.16C22.5236 29.7142 18.5824 28.3122 15.1198 26.0667C11.8982 24.0195 9.1669 21.2882 7.11978 18.0667C4.86642 14.5883 3.4641 10.628 3.02645 6.50665C2.99313 6.13794 3.03695 5.76633 3.15511 5.41548C3.27328 5.06463 3.46321 4.74224 3.7128 4.46881C3.9624 4.19539 4.26619 3.97693 4.60484 3.82735C4.94348 3.67776 5.30957 3.60033 5.67978 3.59998H9.67978C10.3269 3.59361 10.9542 3.82275 11.4448 4.24469C11.9354 4.66663 12.2559 5.25258 12.3464 5.89332C12.5153 7.1734 12.8284 8.43029 13.2798 9.63998C13.4592 10.1172 13.498 10.6359 13.3917 11.1345C13.2853 11.6331 13.0383 12.0908 12.6798 12.4533L10.9864 14.1466C12.8845 17.4847 15.6484 20.2486 18.9864 22.1467L20.6798 20.4533C21.0423 20.0948 21.5 19.8478 21.9986 19.7414C22.4972 19.6351 23.0159 19.6739 23.4931 19.8533C24.7028 20.3047 25.9597 20.6178 27.2398 20.7867C27.8875 20.878 28.479 21.2043 28.9018 21.7033C29.3247 22.2024 29.5493 22.8394 29.5331 23.4933Z"
                  stroke="#4B5563"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div class="card-provider">Viettel</div>
              <div class="card-value">10,000 đ</div>
            </div>
            <div class="card-pricing">
              <div class="price-row">
                <span class="price-label">Giá gốc:</span>
                <span class="original-price">800 điểm</span>
              </div>
              <div class="price-row">
                <span class="price-label">Giá bán:</span>
                <span class="sale-price">800 điểm</span>
              </div>
            </div>
            <q-btn class="exchange-btn" @click="exchangeCard('viettel-10k')">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3333 5.73315H2.66667C2.29848 5.73315 2 6.03163 2 6.39982V7.73315C2 8.10134 2.29848 8.39982 2.66667 8.39982H13.3333C13.7015 8.39982 14 8.10134 14 7.73315V6.39982C14 6.03163 13.7015 5.73315 13.3333 5.73315Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 5.73315V14.3998"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.6663 8.3999V13.0666C12.6663 13.4202 12.5259 13.7593 12.2758 14.0094C12.0258 14.2594 11.6866 14.3999 11.333 14.3999H4.66634C4.31272 14.3999 3.97358 14.2594 3.72353 14.0094C3.47348 13.7593 3.33301 13.4202 3.33301 13.0666V8.3999"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.99967 5.73328C4.55765 5.73328 4.13372 5.55769 3.82116 5.24513C3.5086 4.93257 3.33301 4.50864 3.33301 4.06662C3.33301 3.62459 3.5086 3.20067 3.82116 2.88811C4.13372 2.57554 4.55765 2.39995 4.99967 2.39995C5.6428 2.38874 6.27302 2.70079 6.80817 3.29539C7.34331 3.88999 7.75852 4.73955 7.99967 5.73328C8.24082 4.73955 8.65604 3.88999 9.19118 3.29539C9.72632 2.70079 10.3566 2.38874 10.9997 2.39995C11.4417 2.39995 11.8656 2.57554 12.1782 2.88811C12.4907 3.20067 12.6663 3.62459 12.6663 4.06662C12.6663 4.50864 12.4907 4.93257 12.1782 5.24513C11.8656 5.55769 11.4417 5.73328 10.9997 5.73328"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Đổi ngay
            </q-btn>
          </div>

          <!-- Viettel Card 2 -->
          <div class="card-item">
            <div class="popular-badge">🔥 Phổ biến</div>
            <div class="card-content">
              <svg
                width="32"
                height="32"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.5331 22.6935V26.6935C29.5346 27.0648 29.4586 27.4324 29.3098 27.7726C29.161 28.1129 28.9428 28.4183 28.6692 28.6693C28.3956 28.9204 28.0725 29.1115 27.7208 29.2305C27.369 29.3494 26.9963 29.3936 26.6264 29.3602C22.5236 28.9144 18.5824 27.5124 15.1198 25.2668C11.8982 23.2197 9.1669 20.4884 7.11978 17.2668C4.86642 13.7885 3.4641 9.82817 3.02645 5.70684C2.99313 5.33813 3.03695 4.96653 3.15511 4.61568C3.27328 4.26483 3.46321 3.94243 3.7128 3.66901C3.9624 3.39558 4.26619 3.17712 4.60484 3.02754C4.94348 2.87796 5.30957 2.80053 5.67978 2.80018H9.67978C10.3269 2.79381 10.9542 3.02295 11.4448 3.44489C11.9354 3.86683 12.2559 4.45277 12.3464 5.09351C12.5153 6.3736 12.8284 7.63048 13.2798 8.84018C13.4592 9.31741 13.498 9.83606 13.3917 10.3347C13.2853 10.8333 13.0383 11.291 12.6798 11.6535L10.9864 13.3468C12.8845 16.6849 15.6484 19.4488 18.9864 21.3468L20.6798 19.6535C21.0423 19.295 21.5 19.048 21.9986 18.9416C22.4972 18.8353 23.0159 18.8741 23.4931 19.0535C24.7028 19.5049 25.9597 19.818 27.2398 19.9868C27.8875 20.0782 28.479 20.4045 28.9018 20.9035C29.3247 21.4026 29.5493 22.0396 29.5331 22.6935Z"
                  stroke="#4B5563"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div class="card-provider">Viettel</div>
              <div class="card-value">10,000 đ</div>
            </div>
            <div class="card-pricing">
              <div class="price-row">
                <span class="price-label">Giá gốc:</span>
                <span class="original-price">800 điểm</span>
              </div>
              <div class="price-row">
                <span class="price-label">Giá bán:</span>
                <span class="sale-price">800 điểm</span>
              </div>
            </div>
            <q-btn class="exchange-btn" @click="exchangeCard('viettel-10k-2')">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3333 5.93335H2.66667C2.29848 5.93335 2 6.23183 2 6.60002V7.93335C2 8.30154 2.29848 8.60002 2.66667 8.60002H13.3333C13.7015 8.60002 14 8.30154 14 7.93335V6.60002C14 6.23183 13.7015 5.93335 13.3333 5.93335Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 5.93335V14.6"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.6663 8.6001V13.2668C12.6663 13.6204 12.5259 13.9595 12.2758 14.2096C12.0258 14.4596 11.6866 14.6001 11.333 14.6001H4.66634C4.31272 14.6001 3.97358 14.4596 3.72353 14.2096C3.47348 13.9595 3.33301 13.6204 3.33301 13.2668V8.6001"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.99967 5.93348C4.55765 5.93348 4.13372 5.75788 3.82116 5.44532C3.5086 5.13276 3.33301 4.70884 3.33301 4.26681C3.33301 3.82478 3.5086 3.40086 3.82116 3.0883C4.13372 2.77574 4.55765 2.60015 4.99967 2.60015C5.6428 2.58894 6.27302 2.90098 6.80817 3.49559C7.34331 4.09019 7.75852 4.93975 7.99967 5.93348C8.24082 4.93975 8.65604 4.09019 9.19118 3.49559C9.72632 2.90098 10.3566 2.58894 10.9997 2.60015C11.4417 2.60015 11.8656 2.77574 12.1782 3.0883C12.4907 3.40086 12.6663 3.82478 12.6663 4.26681C12.6663 4.70884 12.4907 5.13276 12.1782 5.44532C11.8656 5.75788 11.4417 5.93348 10.9997 5.93348"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Đổi ngay
            </q-btn>
          </div>

          <!-- Mobifone Card -->
          <div class="card-item insufficient">
            <div class="card-content">
              <svg
                width="32"
                height="32"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.9325 22.9599V26.9599C29.934 27.3312 29.858 27.6988 29.7092 28.039C29.5604 28.3792 29.3423 28.6847 29.0686 28.9357C28.795 29.1867 28.472 29.3778 28.1202 29.4968C27.7684 29.6158 27.3957 29.66 27.0259 29.6265C22.923 29.1807 18.9819 27.7787 15.5192 25.5332C12.2976 23.4861 9.56631 20.7548 7.5192 17.5332C5.26583 14.0548 3.86352 10.0945 3.42586 5.9732C3.39254 5.60449 3.43636 5.23288 3.55453 4.88203C3.6727 4.53119 3.86262 4.20879 4.11222 3.93536C4.36181 3.66194 4.6656 3.44348 5.00425 3.2939C5.3429 3.14431 5.70898 3.06688 6.0792 3.06654H10.0792C10.7263 3.06017 11.3536 3.28931 11.8442 3.71125C12.3348 4.13318 12.6553 4.71913 12.7459 5.35987C12.9147 6.63996 13.2278 7.89684 13.6792 9.10654C13.8586 9.58377 13.8974 10.1024 13.7911 10.601C13.6847 11.0997 13.4377 11.5574 13.0792 11.9199L11.3859 13.6132C13.2839 16.9513 16.0478 19.7151 19.3859 21.6132L21.0792 19.9199C21.4417 19.5614 21.8994 19.3143 22.398 19.208C22.8966 19.1017 23.4153 19.1405 23.8925 19.3199C25.1022 19.7713 26.3591 20.0844 27.6392 20.2532C28.2869 20.3446 28.8784 20.6708 29.3012 21.1699C29.7241 21.6689 29.9488 22.306 29.9325 22.9599Z"
                  stroke="#4B5563"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div class="card-provider">Mobifone</div>
              <div class="card-value">20,000 đ</div>
            </div>
            <div class="card-pricing">
              <div class="price-row">
                <span class="price-label">Giá gốc:</span>
                <div class="original-price-group">
                  <span class="strikethrough">1,667 điểm</span>
                  <span class="discount-badge">-10%</span>
                </div>
              </div>
              <div class="price-row">
                <span class="price-label">Giá bán:</span>
                <span class="sale-price">1,500 điểm</span>
              </div>
            </div>
            <q-btn class="exchange-btn disabled"> Không đủ điểm </q-btn>
          </div>

          <!-- Vietnamobile Card -->
          <div class="card-item insufficient">
            <div class="card-content">
              <svg
                width="32"
                height="32"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.5331 22.9599V26.9599C29.5346 27.3312 29.4586 27.6988 29.3098 28.039C29.161 28.3792 28.9428 28.6847 28.6692 28.9357C28.3956 29.1867 28.0725 29.3778 27.7208 29.4968C27.369 29.6158 26.9963 29.66 26.6264 29.6265C22.5236 29.1807 18.5824 27.7787 15.1198 25.5332C11.8982 23.4861 9.1669 20.7548 7.11978 17.5332C4.86642 14.0548 3.4641 10.0945 3.02645 5.9732C2.99313 5.60449 3.03695 5.23288 3.15511 4.88203C3.27328 4.53119 3.46321 4.20879 3.7128 3.93536C3.9624 3.66194 4.26619 3.44348 4.60484 3.2939C4.94348 3.14431 5.30957 3.06688 5.67978 3.06654H9.67978C10.3269 3.06017 10.9542 3.28931 11.4448 3.71125C11.9354 4.13318 12.2559 4.71913 12.3464 5.35987C12.5153 6.63996 12.8284 7.89684 13.2798 9.10654C13.4592 9.58377 13.498 10.1024 13.3917 10.601C13.2853 11.0997 13.0383 11.5574 12.6798 11.9199L10.9864 13.6132C12.8845 16.9513 15.6484 19.7151 18.9864 21.6132L20.6798 19.9199C21.0423 19.5614 21.5 19.3143 21.9986 19.208C22.4972 19.1017 23.0159 19.1405 23.4931 19.3199C24.7028 19.7713 25.9597 20.0844 27.2398 20.2532C27.8875 20.3446 28.479 20.6708 28.9018 21.1699C29.3247 21.6689 29.5493 22.306 29.5331 22.9599Z"
                  stroke="#4B5563"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div class="card-provider">Vietnamobile</div>
              <div class="card-value">30,000 đ</div>
            </div>
            <div class="card-pricing">
              <div class="price-row">
                <span class="price-label">Giá gốc:</span>
                <span class="original-price">2,300 điểm</span>
              </div>
              <div class="price-row">
                <span class="price-label">Giá bán:</span>
                <span class="sale-price">2,300 điểm</span>
              </div>
            </div>
            <q-btn class="exchange-btn disabled"> Không đủ điểm </q-btn>
          </div>
        </div>

        <!-- Information Section -->
        <div class="info-section">
          <h3 class="info-title">💡 Cách tích điểm:</h3>
          <div class="info-list">
            <div class="info-item">• Hoàn thành nhiệm vụ hàng ngày: 25-50 điểm</div>
            <div class="info-item">• Hoàn thành nhiệm vụ hàng tuần: 100-150 điểm</div>
            <div class="info-item">• Thách đấu với bạn bè và thắng: 20-30 điểm</div>
            <div class="info-item">• Duy trì streak liên tục: 10 điểm/ngày</div>
            <div class="info-item">• Đạt thành tích đặc biệt: 50-200 điểm</div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import ProfileSidebar from '../components/ProfileSidebar.vue'

const exchangeCard = (cardType) => {
  // Handle card exchange logic
  console.log('Exchanging card:', cardType)
  // You can add actual exchange logic here
}
</script>

<style scoped>
.rewards-page {
  background: white;
  min-height: 100vh;
}

.rewards-container {
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
.rewards-content {
  flex: 1;
  padding: 24px 32px;
}

.rewards-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
}

.header-info {
  flex: 1;
}

.rewards-title {
  color: #020817;
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  margin: 0 0 8px;
}

.rewards-subtitle {
  color: #4b5563;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0;
}

.user-points {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #fefce8;
  border-radius: 8px;
}

.points-amount {
  color: #ca8a04;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

/* Cards Grid */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 32px;
}

.card-item {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: white;
  padding: 24px;
  position: relative;
}

.card-item.insufficient {
  opacity: 0.8;
}

.popular-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  padding: 3px 11px;
  background: #3b82f6;
  color: white;
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  border-radius: 9999px;
  border: 1px solid transparent;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
  margin-top: 16px;
}

.card-content svg {
  margin-bottom: 16px;
}

.card-provider {
  color: #020817;
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  margin-bottom: 8px;
}

.card-value {
  color: #16a34a;
  font-family: Inter;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
}

.card-pricing {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
}

.price-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price-label {
  color: #4b5563;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}

.original-price {
  color: #020817;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}

.original-price-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

.strikethrough {
  color: #9ca3af;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-decoration: line-through;
}

.discount-badge {
  padding: 2px 8px;
  background: #ef4444;
  color: #f8fafc;
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  border-radius: 9999px;
}

.sale-price {
  color: #ca8a04;
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
}

.exchange-btn {
  width: 100%;
  padding: 10px 16px;
  background: linear-gradient(0deg, #3b82f6 0%, #3b82f6 100%);
  color: white;
  border-radius: 6px;
  border: none;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  min-height: auto;
  gap: 16px;
}

.exchange-btn.disabled {
  background: #f2f0ff;
  color: #8457ff;
  cursor: not-allowed;
}

.exchange-btn.disabled:hover {
  background: #f2f0ff;
}

/* Information Section */
.info-section {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  padding: 24px;
}

.info-title {
  color: #020817;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin: 0 0 16px;
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.info-item {
  color: #4b5563;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}

/* Responsive */
@media (max-width: 1024px) {
  .cards-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .rewards-container {
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

  .rewards-content {
    padding: 16px;
  }

  .rewards-header {
    flex-direction: column;
    gap: 16px;
  }

  .user-points {
    align-self: flex-start;
  }
}
</style>
