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
          <div class="cursor-pointer text-body2 text-grey-7">Thử thách</div>
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
