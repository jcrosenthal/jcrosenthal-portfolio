// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Global Components
import navigation from './components/navigation/navigation'
import foot from './components/foot/foot'
import about from './components/about/about'
import project from './components/project/project'

Vue.component('navigation', navigation)
Vue.component('foot', foot)
Vue.component('about', about)
Vue.component('project', project)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
