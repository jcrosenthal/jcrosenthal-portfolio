import Vue from 'vue'
import Router from 'vue-router'

import project from './components/project/project'
Vue.component('project', project)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: []
})
