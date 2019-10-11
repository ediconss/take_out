import Vue from 'vue'
import Router from 'vue-router'
import MSite from '@/pages/MSite/MSite.vue'
import Search from '@/pages/Search/Search.vue'
import Order from '@/pages/Order/Order.vue'
import login from '@/pages/login/login.vue'
import Profile from '@/pages/Profile/Profile.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
     redirect:'/msite'
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta:{
        showFooter:false
      }
    },
    {
      path: '/msite',
      name: 'MSite',
      component: MSite
      ,
      meta:{
        showFooter:true
      }
    },{
      path: '/search',
      name: 'Search',
      component: Search
      ,
      meta:{
        showFooter:true
      }
    },{
      path: '/order',
      name: 'Order',
      component: Order
      ,
      meta:{
        showFooter:true
      }
    },{
      path: '/profile',
      name: 'Profile',
      component: Profile
      ,
      meta:{
        showFooter:true
      }
    }
  ]
})
