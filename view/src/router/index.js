import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/row/Home'
import Lay from '@/pages/layout/Lay'
import Car from '@/pages/card/Car'
import Coll from '@/pages/collapse/Coll'
import Spl from '@/pages/split/Spl'
import Divd from '@/pages/divider/Divd'
import Cel from '@/pages/cell/Cel'
import Meu from '@/pages/menu/Meu'
import Tab from '@/pages/tabs/Tab'

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
    },
    {
      path: '/split',
      name: 'Spl',
      component: Spl
    },
    {
      path: '/divider',
      name: 'Divd',
      component: Divd
    },
    {
      path: '/cell',
      name: 'Cel',
      component: Cel
    },
    {
      path: '/menu',
      name: 'Meu',
      component: Meu
    },
    {
      path: '/tabs',
      name: 'Tab',
      component: Tab
    }
  ]
})
