const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },
      { path: 'introduction', component: () => import('pages/IntroductionPage.vue') },
      { path: 'challenges', component: () => import('pages/ChallengesPage.vue') },
      { path: 'login', component: () => import('pages/LoginPage.vue') },
      { path: 'register', component: () => import('pages/RegisterPage.vue') },
      { path: 'forgot-password', component: () => import('pages/ForgotPasswordPage.vue') },
    ],
  },
  {
    path: '/dashboard',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'introduction', component: () => import('pages/IntroductionPage.vue') },
      { path: 'challenges', component: () => import('pages/ChallengesPage.vue') },
      { path: 'waiting-room', component: () => import('pages/WaitingRoomPage.vue') },
      { path: 'challenge-start', component: () => import('pages/ChallengeStartPage.vue') },
      { path: 'challenge-battle', component: () => import('pages/ChallengeBattlePage.vue') },
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
