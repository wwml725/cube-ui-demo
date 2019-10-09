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
import test from 'components/tabbar/test/test'
import VScroll from 'components/v-scroll/v-scroll'
import Default from 'components/v-scroll/default/default'
import vHorizontal from 'components/v-scroll/Horizontal/Horizontal'
import Customized from 'components/v-scroll/Customized/Customized'
import JD from 'components/v-scroll/JD/JD'
import toutiao from 'components/v-scroll/toutiao/toutiao'
import VerticalScrolls from 'components/v-scroll/VerticalScrolls/VerticalScrolls'
import HorizonfalScrolls from 'components/v-scroll/HorizonfalScrolls/HorizonfalScrolls'

import ScrollTest from 'components/v-scroll/test/test'
//IndexList
import IndexList from 'components/IndexList/IndexList'
import IndexListDefault from 'components/IndexList/default/default'
import custom from 'components/IndexList/custom/custom'
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
    },
    {
      path:'/tabbar/test',
      component:test
    },
    {
      path:'/scroll',
      component:VScroll
    },
    {
      path:'/scroll/Default',
      component:Default
    },
    {path:'/scroll/Horizontal', component:vHorizontal},
    {path:'/scroll/Customized', component:Customized},
    {path:'/scroll/JD', component:JD},
    {path:'/scroll/toutiao', component:toutiao},
    {path:'/scroll/VerticalScrolls', component:VerticalScrolls},
    {path:'/scroll/HorizonfalScrolls', component:HorizonfalScrolls},
    {path:'/scroll/test', component:ScrollTest},
    //IndexList
    {path:'/IndexList', component:IndexList},
    {path:'/IndexList/default', component:IndexListDefault},
    {path:'/IndexList/custom', component:custom},

  ]
})
