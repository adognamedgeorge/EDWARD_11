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
import Drop from '@/pages/dropdown/Drop'
import Paging from '@/pages/paging/Paging'
import Bread from '@/pages/bread/Bread'
import Badg from '@/pages/badge/Badg'
import Anch from '@/pages/anchor/Anch'
import Ste from '@/pages/steps/Ste'
import Inp from '@/pages/input/Inp'

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
    },
    {
      path: '/dropdown',
      name: 'Drop',
      component: Drop
    },
    {
      path: '/paging',
      name: 'Paging',
      component: Paging
    },
    {
      path: '/bread',
      name: 'Bread',
      component: Bread
    },
    {
      path: '/badge',
      name: 'Badg',
      component: Badg
    },
    {
      path: '/anchor',
      name: 'Anch',
      component: Anch
    },
    {
      path: '/steps',
      name: 'Ste',
      component: Ste
    },
    {
      path: '/input',
      name: 'Inp',
      component: Inp
    }
  ]
})
