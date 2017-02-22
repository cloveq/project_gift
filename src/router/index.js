import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home'
import Hot from 'components/hot'
import classify from 'components/classify'
import mine from 'components/mine'
import gift from 'components/gift'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Home
    },
    {
      path: '/hot',
      component: Hot
    },
    {
      path: '/classify',
      component: classify
    },
    {
      path: '/mine',
      component: mine
    },
    {
      path: '/gift',
      component: gift
    }
  ]
})
