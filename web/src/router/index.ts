import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import SignIn from '../views/SignIn.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'SignIn',
    component: SignIn,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
