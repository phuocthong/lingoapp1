<template>
  <q-page class="home-page">
    <!-- Main content area -->
    <div class="main-content">
      <!-- Chat section -->
      <div class="chat-section">
        <!-- Chat header -->
        <div class="chat-header">
          <div class="bot-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_48_1041)">
                <path
                  d="M10.8001 7.46666V4.13333H7.4668"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.8 7.46667H5.79997C4.87949 7.46667 4.1333 8.21287 4.1333 9.13334V15.8C4.1333 16.7205 4.87949 17.4667 5.79997 17.4667H15.8C16.7204 17.4667 17.4666 16.7205 17.4666 15.8V9.13334C17.4666 8.21287 16.7204 7.46667 15.8 7.46667Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.4668 12.4667H4.13346"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.4668 12.4667H19.1335"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.3 11.6333V13.3"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.30005 11.6333V13.3"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </div>
          <div class="chat-header-info">
            <div class="chat-title">Thách đấu với Bot</div>
            <div class="chat-subtitle">Bot sẽ đưa ra câu hỏi mỗi 30-60 giây</div>
          </div>
        </div>

        <!-- Chat messages -->
        <div class="chat-messages">
          <!-- Bot message 1 -->
          <div class="message-item">
            <div class="bot-avatar">
              <svg
                width="16"
                height="16"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_48_511)">
                  <path
                    d="M8.79997 5.33332V2.66666H6.1333"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.8001 5.33334H4.80013C4.06375 5.33334 3.4668 5.9303 3.4668 6.66668V12C3.4668 12.7364 4.06375 13.3333 4.80013 13.3333H12.8001C13.5365 13.3333 14.1335 12.7364 14.1335 12V6.66668C14.1335 5.9303 13.5365 5.33334 12.8001 5.33334Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.1333 9.33334H3.46663"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.1333 9.33334H15.4666"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.8 8.66666V9.99999"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.80005 8.66666V9.99999"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </div>
            <div class="message-bubble">
              <div class="message-text">
                Xin chào! Tôi là EnglishBot. Tôi sẽ đưa ra các câu hỏi tiếng Anh định kỳ để các bạn
                trả lời.
              </div>
              <div class="message-time">21:57</div>
            </div>
          </div>

          <!-- Bot message 2 -->
          <div class="message-item">
            <div class="bot-avatar">
              <svg
                width="16"
                height="16"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_48_523)">
                  <path
                    d="M8.79997 5.73332V3.06665H6.1333"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.8001 5.73334H4.80013C4.06375 5.73334 3.4668 6.33029 3.4668 7.06667V12.4C3.4668 13.1364 4.06375 13.7333 4.80013 13.7333H12.8001C13.5365 13.7333 14.1335 13.1364 14.1335 12.4V7.06667C14.1335 6.33029 13.5365 5.73334 12.8001 5.73334Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.1333 9.73334H3.46663"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.1333 9.73334H15.4666"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.8 9.06665V10.4"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.80005 9.06665V10.4"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </div>
            <div class="message-bubble">
              <div class="message-text">Dịch từ "Wonderful" sang tiếng Việt</div>
              <div class="message-time">21:57</div>
            </div>
          </div>
        </div>

        <!-- Chat input (disabled) -->
        <div class="chat-input-section">
          <div class="input-container">
            <input
              type="text"
              placeholder="Đăng nhập để tham gia trả lời..."
              disabled
              class="chat-input"
            />
            <q-btn class="send-btn" disabled>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_48_1055)">
                  <path
                    d="M12.6667 7.83331H3.33333C2.59695 7.83331 2 8.43027 2 9.16665V13.8333C2 14.5697 2.59695 15.1666 3.33333 15.1666H12.6667C13.403 15.1666 14 14.5697 14 13.8333V9.16665C14 8.43027 13.403 7.83331 12.6667 7.83331Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.66675 7.83331V5.16665C4.66675 4.28259 5.01794 3.43475 5.64306 2.80962C6.26818 2.1845 7.11603 1.83331 8.00008 1.83331C8.88414 1.83331 9.73198 2.1845 10.3571 2.80962C10.9822 3.43475 11.3334 4.28259 11.3334 5.16665V7.83331"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </q-btn>
          </div>
          <div class="warning-message">
            <div class="warning-dot"></div>
            <div class="warning-text">Vui lòng đăng nhập để tham gia trả lời câu hỏi</div>
          </div>
          <div class="auth-buttons">
            <q-btn flat class="register-btn-small" @click="register">Đăng ký miễn phí</q-btn>
            <q-btn class="login-btn-small" @click="login">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2.10004H12.6667C13.0203 2.10004 13.3594 2.24051 13.6095 2.49056C13.8595 2.74061 14 3.07975 14 3.43337V12.7667C14 13.1203 13.8595 13.4595 13.6095 13.7095C13.3594 13.9596 13.0203 14.1 12.6667 14.1H10"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.66675 11.4334L10.0001 8.10006L6.66675 4.76672"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 8.10004H2"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Đăng nhập ngay
            </q-btn>
          </div>
        </div>
      </div>

      <!-- Right sidebar -->
      <div class="right-sidebar">
        <!-- Question history -->
        <div class="history-section">
          <div class="section-header">
            <svg
              width="20"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_48_1161)">
                <path
                  d="M10.8001 18.3333C15.4025 18.3333 19.1335 14.6024 19.1335 10C19.1335 5.39763 15.4025 1.66667 10.8001 1.66667C6.19776 1.66667 2.4668 5.39763 2.4668 10C2.4668 14.6024 6.19776 18.3333 10.8001 18.3333Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.8 5V10L14.1334 11.6667"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
            <div class="section-title">Lịch sử câu hỏi</div>
          </div>
          <div class="section-subtitle">20 câu hỏi gần nhất</div>

          <!-- History items -->
          <div class="history-list">
            <div class="history-item">
              <div class="question-title">Dịch từ "Beautiful" sang tiếng Việt</div>
              <div class="question-meta">
                <div class="answer-info">Đáp án: " đẹp "</div>
                <div class="question-date">10:30 - 26/07/2024</div>
              </div>
              <div class="question-stats">
                <div class="stats-left">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_48_1082)">
                      <path
                        d="M8.2002 10.7V9.70004C8.2002 9.16961 7.98948 8.6609 7.61441 8.28583C7.23934 7.91076 6.73063 7.70004 6.2002 7.70004H3.2002C2.66976 7.70004 2.16105 7.91076 1.78598 8.28583C1.41091 8.6609 1.2002 9.16961 1.2002 9.70004V10.7"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.7002 5.70004C5.80476 5.70004 6.7002 4.80461 6.7002 3.70004C6.7002 2.59547 5.80476 1.70004 4.7002 1.70004C3.59563 1.70004 2.7002 2.59547 2.7002 3.70004C2.7002 4.80461 3.59563 5.70004 4.7002 5.70004Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.2002 10.7V9.70005C11.1999 9.25691 11.0524 8.82643 10.7809 8.4762C10.5094 8.12597 10.1293 7.87583 9.7002 7.76505"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.2002 1.76505C8.6304 1.8752 9.01171 2.1254 9.28401 2.4762C9.55632 2.82701 9.70412 3.25846 9.70412 3.70255C9.70412 4.14663 9.55632 4.57809 9.28401 4.92889C9.01171 5.27969 8.6304 5.52989 8.2002 5.64005"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                  <span class="correct-answers">15 đúng</span>
                  <span class="separator">/</span>
                  <span class="total-answers">23 trả lời</span>
                </div>
                <div class="details-link">▼ Xem chi tiết</div>
              </div>
            </div>

            <div class="history-item">
              <div class="question-title">Dịch từ "Happy" sang tiếng Việt</div>
              <div class="question-meta">
                <div class="answer-info">Đáp án: " hạnh phúc "</div>
                <div class="question-date">10:25 - 26/07/2024</div>
              </div>
              <div class="question-stats">
                <div class="stats-left">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_48_1099)">
                      <path
                        d="M8.2002 11.2V10.2C8.2002 9.66961 7.98948 9.1609 7.61441 8.78583C7.23934 8.41076 6.73063 8.20004 6.2002 8.20004H3.2002C2.66976 8.20004 2.16105 8.41076 1.78598 8.78583C1.41091 9.1609 1.2002 9.66961 1.2002 10.2V11.2"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.7002 6.20004C5.80476 6.20004 6.7002 5.30461 6.7002 4.20004C6.7002 3.09547 5.80476 2.20004 4.7002 2.20004C3.59563 2.20004 2.7002 3.09547 2.7002 4.20004C2.7002 5.30461 3.59563 6.20004 4.7002 6.20004Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.2002 11.2V10.2C11.1999 9.75691 11.0524 9.32643 10.7809 8.9762C10.5094 8.62597 10.1293 8.37583 9.7002 8.26505"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.2002 2.26505C8.6304 2.3752 9.01171 2.6254 9.28401 2.9762C9.55632 3.32701 9.70412 3.75846 9.70412 4.20255C9.70412 4.64663 9.55632 5.07809 9.28401 5.42889C9.01171 5.77969 8.6304 6.02989 8.2002 6.14005"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                  <span class="correct-answers">12 đúng</span>
                  <span class="separator">/</span>
                  <span class="total-answers">18 trả lời</span>
                </div>
                <div class="details-link">▼ Xem chi tiết</div>
              </div>
            </div>

            <div class="history-item">
              <div class="question-title">Dịch từ "Wonderful" sang tiếng Việt</div>
              <div class="question-meta">
                <div class="answer-info">Đáp án: " tuyệt vời "</div>
                <div class="question-date">10:20 - 26/07/2024</div>
              </div>
              <div class="question-stats">
                <div class="stats-left">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_48_1116)">
                      <path
                        d="M8.2002 10.9V9.90002C8.2002 9.36959 7.98948 8.86088 7.61441 8.48581C7.23934 8.11074 6.73063 7.90002 6.2002 7.90002H3.2002C2.66976 7.90002 2.16105 8.11074 1.78598 8.48581C1.41091 8.86088 1.2002 9.36959 1.2002 9.90002V10.9"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.7002 5.90002C5.80476 5.90002 6.7002 5.00459 6.7002 3.90002C6.7002 2.79545 5.80476 1.90002 4.7002 1.90002C3.59563 1.90002 2.7002 2.79545 2.7002 3.90002C2.7002 5.00459 3.59563 5.90002 4.7002 5.90002Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.2002 10.9V9.90003C11.1999 9.45689 11.0524 9.02641 10.7809 8.67618C10.5094 8.32596 10.1293 8.07581 9.7002 7.96503"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.2002 1.96503C8.6304 2.07518 9.01171 2.32538 9.28401 2.67618C9.55632 3.02699 9.70412 3.45844 9.70412 3.90253C9.70412 4.34661 9.55632 4.77807 9.28401 5.12887C9.01171 5.47968 8.6304 5.72988 8.2002 5.84003"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                  <span class="correct-answers">18 đúng</span>
                  <span class="separator">/</span>
                  <span class="total-answers">25 trả lời</span>
                </div>
                <div class="details-link">▼ Xem chi tiết</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Leaderboard -->
        <div class="leaderboard-section">
          <div class="section-header">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_87_58)">
                <path
                  d="M4.99618 7.49998H3.74618C3.19364 7.49998 2.66374 7.28049 2.27304 6.88979C1.88234 6.49908 1.66284 5.96918 1.66284 5.41665C1.66284 4.86411 1.88234 4.33421 2.27304 3.94351C2.66374 3.55281 3.19364 3.33331 3.74618 3.33331H4.99618"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.9961 7.49998H16.2461C16.7986 7.49998 17.3285 7.28049 17.7192 6.88979C18.1099 6.49908 18.3294 5.96918 18.3294 5.41665C18.3294 4.86411 18.1099 4.33421 17.7192 3.94351C17.3285 3.55281 16.7986 3.33331 16.2461 3.33331H14.9961"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.32935 18.3333H16.6627"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.32935 12.2167V14.1667C8.32935 14.625 7.93768 14.9833 7.52101 15.175C6.53768 15.625 5.82935 16.8667 5.82935 18.3333"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.6628 12.2167V14.1667C11.6628 14.625 12.0545 14.9833 12.4712 15.175C13.4545 15.625 14.1628 16.8667 14.1628 18.3333"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.9961 1.66669H4.99609V7.50002C4.99609 8.8261 5.52288 10.0979 6.46056 11.0356C7.39824 11.9732 8.67001 12.5 9.99609 12.5C11.3222 12.5 12.5939 11.9732 13.5316 11.0356C14.4693 10.0979 14.9961 8.8261 14.9961 7.50002V1.66669Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
            <div class="section-title">Bảng xếp hạng</div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_87_66)">
                <path
                  d="M15.4632 4.76666L9.79655 10.4333L6.46322 7.1L2.12988 11.4333"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.4629 4.76666H15.4629V8.76666"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </div>

          <!-- Time filter -->
          <div class="time-filter">
            <q-btn class="filter-btn active">Tổng</q-btn>
            <q-btn class="filter-btn">Tuần</q-btn>
            <q-btn class="filter-btn">Tháng</q-btn>
            <q-btn class="filter-btn">Năm</q-btn>
          </div>

          <!-- Leaderboard list -->
          <div class="leaderboard-list">
            <div class="leaderboard-item">
              <div class="rank-icon gold">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_87_81)">
                    <path
                      d="M8.50801 2.17732C8.53678 2.12506 8.57905 2.08148 8.63042 2.05113C8.68178 2.02077 8.74035 2.00476 8.80001 2.00476C8.85967 2.00476 8.91823 2.02077 8.9696 2.05113C9.02096 2.08148 9.06323 2.12506 9.09201 2.17732L11.06 5.91332C11.1069 5.99983 11.1724 6.07488 11.2518 6.13307C11.3312 6.19126 11.4225 6.23116 11.5191 6.2499C11.6157 6.26863 11.7153 6.26575 11.8106 6.24144C11.906 6.21714 11.9948 6.17202 12.0707 6.10932L14.922 3.66666C14.9767 3.62214 15.0442 3.59614 15.1146 3.59239C15.1851 3.58865 15.2549 3.60735 15.3141 3.64582C15.3732 3.68429 15.4186 3.74053 15.4438 3.80645C15.4689 3.87237 15.4725 3.94457 15.454 4.01266L13.5647 10.8433C13.5261 10.9831 13.443 11.1065 13.328 11.1948C13.213 11.2831 13.0723 11.3315 12.9273 11.3327H4.67334C4.52823 11.3316 4.38741 11.2833 4.27227 11.195C4.15712 11.1067 4.07394 10.9832 4.03534 10.8433L2.14667 4.01332C2.12817 3.94524 2.13175 3.87304 2.1569 3.80712C2.18205 3.7412 2.22746 3.68495 2.28661 3.64649C2.34575 3.60802 2.41558 3.58931 2.48603 3.59306C2.55649 3.5968 2.62394 3.6228 2.67867 3.66732L5.52934 6.10999C5.60521 6.17268 5.69401 6.2178 5.78938 6.24211C5.88475 6.26641 5.98432 6.2693 6.08094 6.25056C6.17756 6.23183 6.26883 6.19193 6.3482 6.13374C6.42757 6.07554 6.49307 6.0005 6.54001 5.91399L8.50801 2.17732Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.1333 14H13.4666"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </div>
              <div class="user-avatar gold-user">MA</div>
              <div class="user-info">
                <div class="user-name">Minh Anh</div>
                <div class="user-streak">Streak: 15</div>
              </div>
              <div class="user-score">
                <div class="score-number">2,456</div>
                <div class="score-label">Câu đúng</div>
              </div>
            </div>

            <div class="leaderboard-item">
              <div class="rank-icon silver">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_87_95)">
                    <path
                      d="M5.6066 9.99998L2.57327 4.75998C2.44247 4.5339 2.38096 4.27437 2.39637 4.01363C2.41177 3.75289 2.50342 3.50242 2.65994 3.29331L3.73327 1.86665C3.85747 1.70105 4.01851 1.56665 4.20365 1.47408C4.38879 1.38151 4.59294 1.33331 4.79994 1.33331H12.7999C13.0069 1.33331 13.2111 1.38151 13.3962 1.47408C13.5814 1.56665 13.7424 1.70105 13.8666 1.86665L14.9333 3.29331C15.0908 3.50175 15.1837 3.75188 15.2003 4.01263C15.2168 4.27338 15.1565 4.53326 15.0266 4.75998L11.9933 9.99998"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.13338 8.00001L4.21338 1.46667"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.4668 8.00001L13.3868 1.46667"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.1333 4.66669H11.4666"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.80013 14.6667C10.6411 14.6667 12.1335 13.1743 12.1335 11.3333C12.1335 9.49238 10.6411 8 8.80013 8C6.95918 8 5.4668 9.49238 5.4668 11.3333C5.4668 13.1743 6.95918 14.6667 8.80013 14.6667Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.80013 12V10.6667H8.4668"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </div>
              <div class="user-avatar silver-user">TH</div>
              <div class="user-info">
                <div class="user-name">Thành Hòa</div>
                <div class="user-streak">Streak: 23</div>
              </div>
              <div class="user-score">
                <div class="score-number">2,195</div>
                <div class="score-label">Câu đúng</div>
              </div>
            </div>

            <div class="leaderboard-item">
              <div class="rank-icon bronze">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_87_113)">
                    <path
                      d="M5.6066 9.99998L2.57327 4.75998C2.44247 4.5339 2.38096 4.27437 2.39637 4.01363C2.41177 3.75289 2.50342 3.50242 2.65994 3.29331L3.73327 1.86665C3.85747 1.70105 4.01851 1.56665 4.20365 1.47408C4.38879 1.38151 4.59294 1.33331 4.79994 1.33331H12.7999C13.0069 1.33331 13.2111 1.38151 13.3962 1.47408C13.5814 1.56665 13.7424 1.70105 13.8666 1.86665L14.9333 3.29331C15.0908 3.50175 15.1837 3.75188 15.2003 4.01263C15.2168 4.27338 15.1565 4.53326 15.0266 4.75998L11.9933 9.99998"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.13338 8.00001L4.21338 1.46667"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.4668 8.00001L13.3868 1.46667"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.1333 4.66669H11.4666"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.80013 14.6667C10.6411 14.6667 12.1335 13.1743 12.1335 11.3333C12.1335 9.49238 10.6411 8 8.80013 8C6.95918 8 5.4668 9.49238 5.4668 11.3333C5.4668 13.1743 6.95918 14.6667 8.80013 14.6667Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.80013 12V10.6667H8.4668"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </div>
              <div class="user-avatar bronze-user">VN</div>
              <div class="user-info">
                <div class="user-name">Văn Nam</div>
                <div class="user-streak">Streak: 12</div>
              </div>
              <div class="user-score">
                <div class="score-number">1,957</div>
                <div class="score-label">Câu đúng</div>
              </div>
            </div>

            <div class="leaderboard-item">
              <div class="rank-icon fourth">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_87_131)">
                    <path
                      d="M6.56247 1.14745C6.58438 1.10318 6.61823 1.06591 6.6602 1.03986C6.70216 1.01381 6.75058 1 6.79997 1C6.84937 1 6.89778 1.01381 6.93975 1.03986C6.98171 1.06591 7.01556 1.10318 7.03747 1.14745L8.19247 3.48695C8.26856 3.64093 8.38088 3.77415 8.51978 3.87517C8.65869 3.9762 8.82004 4.042 8.98997 4.06695L11.573 4.44495C11.6219 4.45204 11.6679 4.47268 11.7057 4.50455C11.7435 4.53641 11.7717 4.57822 11.787 4.62525C11.8023 4.67228 11.8041 4.72265 11.7923 4.77066C11.7804 4.81868 11.7554 4.86242 11.72 4.89695L9.85197 6.71595C9.72878 6.836 9.63661 6.98419 9.58339 7.14776C9.53017 7.31133 9.5175 7.48539 9.54647 7.65495L9.98747 10.2249C9.99611 10.2739 9.99083 10.3242 9.97222 10.3703C9.95362 10.4163 9.92244 10.4563 9.88224 10.4854C9.84205 10.5146 9.79446 10.5319 9.7449 10.5354C9.69535 10.5388 9.64582 10.5283 9.60197 10.5049L7.29297 9.29095C7.14083 9.21106 6.97156 9.16932 6.79972 9.16932C6.62788 9.16932 6.45861 9.21106 6.30647 9.29095L3.99797 10.5049C3.95414 10.5282 3.90467 10.5386 3.8552 10.5351C3.80572 10.5316 3.75823 10.5142 3.71812 10.4851C3.67801 10.4559 3.64689 10.416 3.6283 10.3701C3.60971 10.3241 3.6044 10.2738 3.61297 10.2249L4.05347 7.65545C4.08257 7.48581 4.06996 7.31165 4.01674 7.14797C3.96352 6.98429 3.87128 6.83602 3.74797 6.71595L1.87997 4.89745C1.84427 4.86296 1.81897 4.81914 1.80695 4.77098C1.79494 4.72282 1.79669 4.67226 1.81201 4.62504C1.82733 4.57783 1.85561 4.53587 1.89361 4.50394C1.93162 4.47201 1.97782 4.4514 2.02697 4.44445L4.60947 4.06695C4.7796 4.0422 4.94117 3.97648 5.08026 3.87544C5.21936 3.77441 5.33182 3.64108 5.40797 3.48695L6.56247 1.14745Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </div>
              <div class="user-avatar fourth-user">TT</div>
              <div class="user-info">
                <div class="user-name">Thu Trang</div>
                <div class="user-streak">Streak: 8</div>
              </div>
              <div class="user-score">
                <div class="score-number">1,834</div>
                <div class="score-label">Câu đúng</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Features section -->
    <div class="features-section">
      <div class="features-container">
        <div class="features-header">
          <h2 class="features-title">Học Tập Thông Minh Cùng Bạn Bè</h2>
          <p class="features-description">
            Khám phá kiến thức mới mỗi ngày với câu hỏi ngẫu nhiên, thử thách bạn bè và leo lên bảng
            xếp hạng!
          </p>
        </div>

        <div class="features-grid">
          <div class="feature-item">
            <div class="feature-icon-container">
              <svg
                width="30"
                height="30"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5 15.8259L4.31 11.3559L5 27.8259H2L2.72 10.7109L0.5 9.82587L15.5 3.82587L30.5 9.82587L15.5 15.8259ZM15.5 8.32587C14.675 8.32587 14 8.65587 14 9.07587C14 9.49587 14.675 9.82587 15.5 9.82587C16.325 9.82587 17 9.49587 17 9.07587C17 8.65587 16.325 8.32587 15.5 8.32587ZM15.5 17.3259L23.855 13.9809C24.92 15.3909 25.655 17.0859 25.895 18.9309C25.445 18.8709 24.98 18.8259 24.5 18.8259C20.675 18.8259 17.33 20.8809 15.5 23.9409C14.5707 22.3824 13.2528 21.0918 11.6753 20.1952C10.0977 19.2986 8.31452 18.8268 6.5 18.8259C6.02 18.8259 5.555 18.8709 5.105 18.9309C5.345 17.0859 6.08 15.3909 7.145 13.9809L15.5 17.3259Z"
                  fill="white"
                />
              </svg>
            </div>
            <h3 class="feature-item-title">Học ngẫu nhiên</h3>
            <p class="feature-item-description">
              Khám phá kiến thức mới với câu hỏi được chọn ngẫu nhiên từ kho dữ liệu phong phú
            </p>
          </div>

          <div class="feature-item">
            <div class="feature-icon-container">
              <svg
                width="27"
                height="22"
                viewBox="0 0 28 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_72_244)">
                  <path
                    d="M4.22707 10.2345C5.72736 10.2345 6.94714 9.01476 6.94714 7.51448C6.94714 6.01419 5.72736 4.79441 4.22707 4.79441C2.72679 4.79441 1.50701 6.01419 1.50701 7.51448C1.50701 9.01476 2.72679 10.2345 4.22707 10.2345ZM23.2676 10.2345C24.7678 10.2345 25.9876 9.01476 25.9876 7.51448C25.9876 6.01419 24.7678 4.79441 23.2676 4.79441C21.7673 4.79441 20.5475 6.01419 20.5475 7.51448C20.5475 9.01476 21.7673 10.2345 23.2676 10.2345ZM24.6276 11.5946H21.9075C21.1595 11.5946 20.4837 11.8963 19.9907 12.3851C21.7035 13.3244 22.919 15.0202 23.1825 17.0347H25.9876C26.7399 17.0347 27.3477 16.4269 27.3477 15.6747V14.3146C27.3477 12.8144 26.1279 11.5946 24.6276 11.5946ZM13.7473 11.5946C16.3781 11.5946 18.5074 9.46528 18.5074 6.83446C18.5074 4.20364 16.3781 2.07434 13.7473 2.07434C11.1165 2.07434 8.98719 4.20364 8.98719 6.83446C8.98719 9.46528 11.1165 11.5946 13.7473 11.5946ZM17.0114 12.9546H16.6586C15.7746 13.3796 14.7928 13.6346 13.7473 13.6346C12.7018 13.6346 11.7243 13.3796 10.836 12.9546H10.4832C7.78016 12.9546 5.58711 15.1477 5.58711 17.8507V19.0748C5.58711 20.201 6.50088 21.1148 7.62716 21.1148H19.8675C20.9937 21.1148 21.9075 20.201 21.9075 19.0748V17.8507C21.9075 15.1477 19.7145 12.9546 17.0114 12.9546ZM7.50391 12.3851C7.01089 11.8963 6.33513 11.5946 5.58711 11.5946H2.86704C1.36675 11.5946 0.146973 12.8144 0.146973 14.3146V15.6747C0.146973 16.4269 0.754738 17.0347 1.50701 17.0347H4.30783C4.57558 15.0202 5.79111 13.3244 7.50391 12.3851Z"
                    fill="white"
                  />
                </g>
              </svg>
            </div>
            <h3 class="feature-item-title">Thử thách bạn bè</h3>
            <p class="feature-item-description">
              Tạo cuộc thi với bạn bè và xem ai là người giỏi nhất
            </p>
          </div>

          <div class="feature-item">
            <div class="feature-icon-container">
              <svg
                width="24"
                height="24"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.7244 2.25519C11.5653 2.25519 10.5128 2.34931 9.77563 2.49397C9.48816 2.551 9.26561 2.61683 9.09406 2.67989C9.26561 2.74295 9.48816 2.80878 9.77563 2.86581C10.5128 3.01047 11.5653 3.10459 12.7244 3.10459C13.8835 3.10459 14.936 3.01047 15.6732 2.86581C15.9607 2.80878 16.1832 2.74295 16.3548 2.67989C16.1832 2.61683 15.9607 2.551 15.6732 2.49397C14.936 2.34931 13.8835 2.25519 12.7244 2.25519ZM8.05086 2.50139C7.16529 2.91403 6.68773 3.7078 6.80828 4.49878C6.90101 5.06999 7.31366 5.58882 7.9674 5.85773C8.34295 6.01537 8.79733 6.09883 9.33052 6.09419C9.94718 7.2394 10.7817 8.18525 11.6766 8.62571V10.6611C10.8884 11.1387 10.3645 12.1309 9.84981 13.1509C11.6488 13.6099 13.8047 13.5867 15.5944 13.1463C15.0844 12.1263 14.5558 11.1387 13.7723 10.6611V8.62571C14.6671 8.18525 15.5017 7.2394 16.1183 6.09419C16.6515 6.09883 17.1059 6.01537 17.4815 5.85773C18.1352 5.58882 18.5478 5.06999 18.6406 4.49878C18.7611 3.7078 18.2836 2.91403 17.398 2.50139C17.4165 2.55702 17.4258 2.61637 17.4258 2.67989C17.4258 2.88158 17.3192 3.04664 17.2079 3.15049C17.1013 3.25435 16.9807 3.32343 16.8463 3.38603C16.5773 3.51121 16.2389 3.60487 15.8309 3.68461C15.0195 3.84504 13.9299 3.93916 12.7244 3.93916C11.5189 3.93916 10.4294 3.84504 9.61799 3.68461C9.20998 3.60487 8.87151 3.51121 8.6026 3.38603C8.46814 3.32343 8.34759 3.25435 8.24095 3.15049C8.12968 3.04664 8.02304 2.88158 8.02304 2.67989C8.02304 2.61637 8.03231 2.55702 8.05086 2.50139ZM8.35686 3.25759C8.4635 3.92247 8.65824 4.598 8.92715 5.23923C8.66751 5.21373 8.45887 5.15994 8.28732 5.089C7.85149 4.90818 7.6753 4.64251 7.63357 4.36989C7.57794 4.00221 7.78658 3.52837 8.35686 3.25759ZM17.092 3.25759C17.6623 3.52837 17.8709 4.00221 17.8153 4.36989C17.7736 4.64251 17.5974 4.90818 17.1615 5.089C16.99 5.15994 16.7813 5.21373 16.5217 5.23923C16.7906 4.598 16.9854 3.92247 17.092 3.25759ZM20.37 13.4384C19.8971 13.4476 19.4381 13.6795 19.0393 14.0968C18.5942 14.5743 18.2511 15.293 18.163 16.1229C18.0749 16.9528 18.2511 17.7271 18.5849 18.2881C18.9234 18.8538 19.401 19.1969 19.9434 19.2525C20.4905 19.3128 21.0284 19.081 21.4781 18.6034C21.9278 18.1259 22.2663 17.4072 22.359 16.5773C22.4471 15.7473 22.2709 14.9731 21.9371 14.412C21.594 13.8464 21.1211 13.5033 20.574 13.4476C20.5044 13.4384 20.4395 13.4384 20.37 13.4384ZM5.07887 13.4384C5.00933 13.4384 4.93978 13.4384 4.87487 13.4476C4.32776 13.5079 3.85484 13.8557 3.51638 14.412C3.17792 14.9777 3.00173 15.752 3.09446 16.5819C3.18255 17.4118 3.52102 18.1305 3.97075 18.6081C4.42049 19.081 4.95832 19.3174 5.50543 19.2572C6.05253 19.1969 6.52545 18.8538 6.86392 18.2928C7.20238 17.7271 7.37857 16.9528 7.28584 16.1229C7.19774 15.293 6.85928 14.5743 6.40491 14.0968C6.01544 13.6841 5.55179 13.4523 5.07887 13.4384ZM15.1818 14.0921C14.681 14.1895 14.1664 14.259 13.6425 14.2961C14.2684 16.3269 15.3765 18.1676 16.6005 19.9573C16.8602 19.5771 17.1476 19.2757 17.4629 19.0346C17.602 18.928 17.7457 18.8352 17.8895 18.7564L17.8941 18.7518C17.8848 18.7379 17.8802 18.7286 17.8709 18.7147C17.6901 18.4133 17.551 18.0749 17.4536 17.7086C16.6237 16.6839 15.7891 15.5943 15.1818 14.0921ZM10.2625 14.1014C9.65508 15.5943 8.82515 16.6839 7.99986 17.7039C7.90249 18.0702 7.75876 18.4133 7.57794 18.7193C7.5733 18.7286 7.56403 18.7425 7.55475 18.7518L7.55939 18.7564C7.70312 18.8352 7.84685 18.928 7.98595 19.0346C8.30123 19.2757 8.58869 19.5771 8.84833 19.9573C10.0724 18.1722 11.1758 16.3315 11.8064 14.3008C11.2825 14.2637 10.7632 14.1988 10.2625 14.1014ZM21.8861 19.3684C21.3158 19.8738 20.6064 20.1659 19.8553 20.0825C19.3129 20.0268 18.826 19.7811 18.4319 19.4148C18.2697 19.4936 18.1167 19.5863 17.9729 19.6976C17.2682 20.2355 16.6515 21.6357 16.2064 23.6757H23.4347V20.9031C23.3327 20.7733 23.0174 20.3699 22.5399 19.9109C22.3358 19.7115 22.1087 19.5261 21.8861 19.3684ZM3.56274 19.3731C3.34019 19.5261 3.11301 19.7115 2.909 19.9109C2.43144 20.3699 2.11616 20.7733 2.01416 20.9031V23.6757H9.24243C8.79733 21.6357 8.18068 20.2355 7.47593 19.6976C7.3322 19.5863 7.1792 19.4936 7.01692 19.4148C6.62282 19.7811 6.14063 20.0268 5.59352 20.0871C4.84705 20.1705 4.12839 19.8784 3.56274 19.3731Z"
                  fill="white"
                />
              </svg>
            </div>
            <h3 class="feature-item-title">Bảng xếp hạng</h3>
            <p class="feature-item-description">
              Theo dõi tiến trình và so sánh thành tích với người khác
            </p>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const register = () => {
  router.push('/register')
}

const login = () => {
  router.push('/login')
}
</script>

<style scoped>
.home-page {
  background: linear-gradient(135deg, #f8fafc 0%, #f0fdfa 100%);
  min-height: 100vh;
}

/* Main content */
.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  display: grid;
  grid-template-columns: 1fr 352px;
  gap: 24px;
  align-items: start;
}

/* Chat section */
.chat-section {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 20px rgba(14, 165, 233, 0.1);
  backdrop-filter: blur(10px);
  overflow: hidden;
}

.chat-header {
  display: flex;
  padding: 16px;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid #e2e8f0;
  background: linear-gradient(135deg, #f0f9ff 0%, #f0fdfa 100%);
}

.bot-icon {
  display: flex;
  padding: 8px;
  background: linear-gradient(135deg, #0ea5e9 0%, #14b8a6 100%);
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(14, 165, 233, 0.3);
}

.chat-header-info {
  flex: 1;
}

.chat-title {
  color: #0f172a;
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}

.chat-subtitle {
  color: #475569;
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}

.chat-messages {
  padding: 16px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.message-item {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.bot-avatar {
  display: flex;
  padding: 8px;
  background: #ede9fe;
  border-radius: 50%;
  flex-shrink: 0;
}

.message-bubble {
  display: flex;
  padding: 9px 16px;
  flex-direction: column;
  gap: 3px;
  border-radius: 8px;
  background: #f3f4f6;
  max-width: 450px;
}

.message-text {
  color: #0f172a;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}

.message-time {
  color: #475569;
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}

.chat-input-section {
  padding: 16px;
  border-top: 1px solid #e2e8f0;
  background: #f9fafb;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.input-container {
  display: flex;
  gap: 8px;
  align-items: center;
}

.chat-input {
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  background: #f3f4f6;
  color: #999;
  font-family: Inter;
  font-size: 14px;
  opacity: 0.5;
}

.chat-input:disabled {
  cursor: not-allowed;
}

.send-btn {
  display: flex;
  padding: 12px;
  background: #2563eb;
  border-radius: 6px;
  opacity: 0.5;
  min-width: 48px;
  height: 40px;
  justify-content: center;
  align-items: center;
}

.warning-message {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
}

.warning-dot {
  width: 8px;
  height: 8px;
  background: #ef4444;
  border-radius: 50%;
}

.warning-text {
  color: #475569;
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}

.auth-buttons {
  display: flex;
  gap: 8px;
  justify-content: center;
}

.register-btn-small {
  padding: 9px 12px;
  border: 1px solid #e9d5ff;
  border-radius: 6px;
  background: white;
  color: #5b21b6;
  font-size: 12px;
  font-weight: 500;
}

.login-btn-small {
  display: flex;
  padding: 9px 12px;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  background: #2563eb;
  color: white;
  font-size: 12px;
  font-weight: 500;
}

/* Right sidebar */
.right-sidebar {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.history-section,
.leaderboard-section {
  background: white;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.section-header {
  display: flex;
  padding: 16px;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid #e2e8f0;
}

.section-title {
  color: #0f172a;
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  flex: 1;
}

.section-subtitle {
  padding: 0 16px 16px;
  color: #475569;
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}

/* History list */
.history-list {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.history-item {
  padding: 16px;
  border: 1px solid #dbeafe;
  border-radius: 8px;
  background: #eff6ff;
}

.question-title {
  color: #0f172a;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 6px;
}

.question-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.answer-info {
  color: #16a34a;
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
}

.question-date {
  color: #475569;
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}

.question-stats {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.stats-left {
  display: flex;
  align-items: center;
  gap: 4px;
}

.correct-answers {
  color: #16a34a;
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
}

.separator {
  color: #4b5563;
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}

.total-answers {
  color: #4b5563;
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}

.details-link {
  color: #2563eb;
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  cursor: pointer;
}

/* Time filter */
.time-filter {
  display: flex;
  padding: 0 16px 16px;
  gap: 4px;
}

.filter-btn {
  padding: 6px 12px;
  border-radius: 6px;
  background: #f3f4f6;
  color: #4b5563;
  font-size: 12px;
  font-weight: 400;
  border: none;
  min-height: auto;
}

.filter-btn.active {
  background: #ede9fe;
  color: #5b21b6;
  font-weight: 500;
}

/* Leaderboard list */
.leaderboard-list {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.leaderboard-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 12px;
  border-radius: 8px;
}

.rank-icon {
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.rank-icon.gold svg path {
  stroke: #eab308;
}

.rank-icon.silver svg path {
  stroke: #9ca3af;
}

.rank-icon.bronze svg path {
  stroke: #d97706;
}

.rank-icon.fourth svg path {
  stroke: #3b82f6;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
}

.user-avatar.gold-user {
  background: linear-gradient(90deg, #eab308 0%, #facc15 100%);
}

.user-avatar.silver-user {
  background: linear-gradient(90deg, #9ca3af 0%, #d1d5db 100%);
}

.user-avatar.bronze-user {
  background: linear-gradient(90deg, #d97706 0%, #f59e0b 100%);
}

.user-avatar.fourth-user {
  background: #3b82f6;
}

.user-info {
  flex: 1;
}

.user-name {
  color: #0f172a;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}

.user-streak {
  color: #475569;
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}

.user-score {
  text-align: right;
}

.score-number {
  color: #0f172a;
  font-family: Inter;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
}

.score-label {
  color: #475569;
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}

/* Features section */
.features-section {
  margin-top: 48px;
  padding: 48px 0;
  background: white;
}

.features-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.features-header {
  text-align: center;
  margin-bottom: 48px;
}

.features-title {
  color: #2f327d;
  font-family: Poppins;
  font-size: 24px;
  font-weight: 700;
  line-height: 180%;
  margin-bottom: 16px;
}

.features-description {
  color: #696984;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 180%;
  max-width: 600px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.feature-item {
  background: white;
  border-radius: 20px;
  padding: 32px 24px;
  text-align: center;
  box-shadow: 0 10px 60px rgba(38, 45, 118, 0.08);
}

.feature-icon-container {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
}

.feature-item:nth-child(1) .feature-icon-container {
  background: #2563eb;
}

.feature-item:nth-child(2) .feature-icon-container {
  background: #00cbb8;
}

.feature-item:nth-child(3) .feature-icon-container {
  background: #29b9e7;
}

.feature-item-title {
  color: #2f327d;
  font-family: Poppins;
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 16px;
}

.feature-item-description {
  color: #696984;
  font-family: Poppins;
  font-size: 20px;
  font-weight: 400;
  line-height: 180%;
}

/* Responsive */
@media (max-width: 1024px) {
  .main-content {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .header-content {
    gap: 48px;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 24px;
  }

  .nav-section {
    order: 3;
  }

  .auth-section {
    order: 2;
    flex-direction: column;
    gap: 8px;
  }

  .main-content {
    padding: 16px;
  }

  .feature-item-title {
    font-size: 24px;
  }

  .feature-item-description {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .header-content {
    padding: 0 16px;
  }

  .features-title {
    font-size: 20px;
  }

  .features-description {
    font-size: 14px;
  }

  .nav-section {
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
  }
}
</style>
