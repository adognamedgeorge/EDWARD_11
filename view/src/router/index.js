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
import Rad from '@/pages/radio/Rad'
import Che from '@/pages/checkbox/Che'
import Swi from '@/pages/switch/Swi'
import Col from '@/pages/table/Col'
import Tre from '@/pages/tree/Tre'
import Ale from '@/pages/alert/Ale'

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
    },
    {
      path: '/radio',
      name: 'Rad',
      component: Rad
    },
    {
      path: '/checkbox',
      name: 'Che',
      component: Che
    },
    {
      path: '/switch',
      name: 'Swi',
      component: Swi
    },
    {
      path: '/table',
      name: 'Col',
      component: Col
    },
    {
      path: '/tree',
      name: 'Tre',
      component: Tre
    },
    {
      path: '/alert',
      name: 'Ale',
      component: Ale
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/wms/Login'),
      meta: {
        ignoreLoginAuth: true,
        title: '登录'
      }
    }
  ]
})
