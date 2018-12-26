import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/row/Home'
import Lay from '@/pages/layout/Lay'
import Car from '@/pages/card/Car'
import Coll from '@/pages/collapse/Coll'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/layout',
      name: 'Lay',
      component: Lay
    },
    {
      path: '/card',
      name: 'Car',
      component: Car
    },
    {
      path: '/collapse',
      name: 'Coll',
      component: Coll
    }
  ]
})
