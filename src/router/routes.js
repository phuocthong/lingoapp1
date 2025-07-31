const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },
      { path: 'introduction', component: () => import('pages/IntroductionPage.vue') },
      { path: 'challenges', component: () => import('pages/ChallengesPage.vue') },
    ],
  },
  {
    path: '/dashboard',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'profile', component: () => import('pages/ProfilePage.vue') },
      { path: 'friends', component: () => import('pages/FriendsPage.vue') },
      { path: 'add-friends', component: () => import('pages/AddFriendsPage.vue') },
      { path: 'tasks', component: () => import('pages/TasksPage.vue') },
      { path: 'rewards', component: () => import('pages/RewardsPage.vue') },
    ],
  },
  {
    path: '/profile',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [{ path: '', component: () => import('pages/ProfilePage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
