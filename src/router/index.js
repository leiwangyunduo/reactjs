import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import About from '@/components/about/about'
import Stundet from '@/components/student/student'
import Local from '@/components/local/local'
import LocalDtail from '@/components/local/local-detail'
import Notice from '@/components/notice/notice'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/index"

    },
    {
      path:'/index',
      component:Index
    },
    {
      path:'/about',
      component:About,
    },
    {
      path:'/local',
      component:Local,
      children:[
        {
          path:':id',
          component:LocalDtail
        }
      ]
    },
    {
      path:'/notice',
      component:Notice
    }
  ]
})
