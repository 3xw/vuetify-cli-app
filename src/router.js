import Vue from 'vue'
import store from '@/store/store.js'
import Router from 'vue-router'

Vue.use(Router)

const requireAuth = function(to, from, next){
  if(!store.state.auth.user) return next('/auth/retry')
  next()
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'timerecords',
      component: () => import(/* webpackChunkName: "main" */ './views/timeRecords/Index.vue'),
      beforeEnter: requireAuth,
      meta: {
        layout: 'admin'
      }
    },

    // AUTH
    {
      path: process.env.VUE_APP_LOGIN_ACTION,
      name: 'auth/login',
      component: function(){return import(/* webpackChunkName: "auth" */ '@/views/auth/Login.vue')},
    },
    {
      path: process.env.VUE_APP_LOGIN_REDIRECT,
      name: 'auth/redirect',
      component: function(){return import(/* webpackChunkName: "auth" */ '@/views/auth/Redirect.vue')},
      beforeEnter: requireAuth,
    },
    {
      path: '/auth/retry',
      name: 'auth/retry',
      component: function(){return import(/* webpackChunkName: "auth" */ '@/views/auth/Retry.vue')},
    },
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
