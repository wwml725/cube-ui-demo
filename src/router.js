import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home/Home'
import VButton from 'components/v-button/v-button'
import VLoading from 'components/v-loading/v-loading'
import Tip from 'components/tip/tip'
import toolbar from 'components/toolbar/toolbar'

import tabbar from 'components/tabbar/tabbar'
import Tabbar from 'components/tabbar/Tabbar/Tabbar'
import TabBasic from 'components/tabbar/Tab-basic/Tab-basic'
import TabComposite from 'components/tabbar/Tab-composite/Tab-composite'
import ScrollTabDemo from 'components/tabbar/ScrollTab-Demo/ScrollTab-Demo'

// import Basic from './views/Basic基础组件/Basic基础组件'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{
        back:false
      }
    },

    {
      path: '/v-button',
      name: 'v-button',
      component:  VButton,
      meta:{
        back:true
      }
    },

    {
      path: '/v-loading',
      name: 'v-loading',
      component: VLoading,
      meta:{
        back:true
      }
    },

    {
      path: '/tip',
      name: 'tip',
      component: Tip,
      meta:{
        back:true
      }
    },

    {
      path: '/toolbar',
      name: 'toolbar',
      component: toolbar,
      meta:{
        back:true
      }
    },

    {
      path: '/tabbar',
      component: tabbar,
    },
    {
      path:'/tabbar/Tabbar',
      component:Tabbar
    },
    {
      path:'/tabbar/TabBasic',
      component:TabBasic
    },
    {
      path:'/tabbar/Tab-composite',
      component:TabComposite
    },
    {
      path:'/tabbar/ScrollTab-Demo',
      component:ScrollTabDemo
    }
  ]
})
