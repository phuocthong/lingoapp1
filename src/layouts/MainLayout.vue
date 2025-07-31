<template>
  <q-layout view="lHh lpr lFf">
    <!-- Header -->
    <q-header class="bg-white text-grey-9 border-b-1" elevated>
      <q-toolbar class="q-px-lg">
        <!-- Logo -->
        <div class="row items-center no-wrap q-gutter-sm">
          <q-icon name="extension" size="24px" class="bg-purple-7 text-white q-pa-xs rounded" />
          <div class="text-h6 text-weight-bold text-grey-9">Logo</div>
        </div>

        <!-- Navigation -->
        <q-space />
        <div class="row items-center q-gutter-lg q-mr-lg">
          <div class="cursor-pointer text-body2 text-grey-7">Trang chủ</div>
          <div class="cursor-pointer text-body2 text-grey-7">Giới thiệu</div>

          <!-- Thử thách with dropdown -->
          <q-btn-dropdown
            flat
            no-caps
            dropdown-icon="keyboard_arrow_down"
            class="text-body2 text-grey-7"
            style="padding: 4px 8px;"
          >
            <template v-slot:label>
              <span class="text-body2 text-grey-7">Thử thách</span>
            </template>

            <q-list style="min-width: 200px">
              <q-item clickable v-close-popup @click="$router.push('/challenges')">
                <q-item-section avatar>
                  <q-icon name="emoji_events" color="amber" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Phòng th��� thách</q-item-label>
                  <q-item-label caption>Tham gia hoặc tạo phòng</q-item-label>
                </q-item-section>
              </q-item>

              <q-separator />

              <q-item clickable v-close-popup>
                <q-item-section avatar>
                  <q-icon name="extension" color="purple" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Thách đấu Bot</q-item-label>
                  <q-item-label caption>Thử thách với AI</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup>
                <q-item-section avatar>
                  <q-icon name="schedule" color="blue" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Thử thách nhanh</q-item-label>
                  <q-item-label caption>10 câu trong 5 phút</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>

          <div class="cursor-pointer text-body2 text-grey-7">Bạn bè</div>
        </div>

        <!-- Call to action -->
        <div class="row items-center q-gutter-sm">
          <div class="text-body2 text-grey-6 q-mr-sm">
            Tham gia ngay để trả lời câu hỏi và cạnh tranh!
          </div>
          
          <!-- Register button -->
          <q-btn 
            outline 
            color="purple-2" 
            text-color="blue-6"
            class="q-px-sm"
            size="sm"
            no-caps
          >
            <q-icon name="person_add" size="16px" class="q-mr-xs" />
            Đăng ký
          </q-btn>

          <!-- Login button -->
          <q-btn 
            color="blue-6" 
            class="q-px-sm"
            size="sm"
            no-caps
          >
            <q-icon name="login" size="16px" class="q-mr-xs" />
            Đăng nhập
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <!-- Main content -->
    <q-page-container class="bg-purple-1">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
//
</script>

<style scoped>
.border-b-1 {
  border-bottom: 1px solid #e5e7eb;
}
</style>
