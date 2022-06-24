import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import GoldenHeartFunaab from '../views/GoldenHeartFunaab.vue'
import LogIn from '../views/LogIn.vue'
import SignUp from '../views/SignUp.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import Profile from '../views/Profile.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/LogIn',
    name: 'LogIn',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/LogIn.vue')
    component: LogIn,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/goldenHeartFunaab',
    name: 'GoldenHeartFunaab',
    component: GoldenHeartFunaab,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/ForgotPassword',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile,
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(!store.getters.isLoggedIn) {
      //Redirect login
      next('/LogIn');
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if(store.getters.isLoggedIn) {
      next('/goldenHeartFunaab');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
