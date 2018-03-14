import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/illustration',
      name: 'illustration',
      component: {
        template: '<project src="illustration"></project>'
      }
    }, {
      path: '/jvw',
      name: 'jvw',
      component: {
        template: '<project src="jvw"></project>'
      }
    },
    {
      path: '/almost66',
      name: 'almost66',
      component: {
        template: '<project src="almost66"></project>'
      }
    }, {
      path: '/mstream',
      name: 'mstream',
      component: {
        template: '<project src="mstream"></project>'
      }
    },
    {
      path: '/craig-delorenzo',
      name: 'craig-delorenzo',
      component: {
        template: '<project src="craigdelorenzo"></project>'
      }
    },
    {
      path: '/craig-hanson',
      name: 'craig-hanson',
      component: {
        template: '<project src="craighanson"></project>'
      }
    },
    {
      path: '/brendan-berry',
      name: 'brendan-berry',
      component: {
        template: '<project src="brendanberry"></project>'
      }
    },
    {
      path: '/joe-nott-band',
      name: 'joe-nott-band',
      component: {
        template: '<project src="joenottband"></project>'
      }
    },
    {
      path: '/fogsnob',
      name: 'fogsnob',
      component: {
        template: '<project src="fogsnob"></project>'
      }
    }
  ]
})
