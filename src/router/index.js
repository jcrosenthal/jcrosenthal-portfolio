import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import about from '@/components/about'
import work from '@/components/work'
import contact from '@/components/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/work',
      name: 'work',
      component: work
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ]
})
