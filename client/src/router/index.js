import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        metaTags: [
          {
            name: 'google-signin-scope',
            content: 'profile email'
          },
          {
            name: 'google-signin-client_id',
            content: '569063036843-v7f9qvobmakicec5c0idjoq8vd4p6iof.apps.googleusercontent.com'
          }
        ]
      }
    }
  ]
})
