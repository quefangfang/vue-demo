import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/components/default'
import Table from '@/components/Table'
import Second from '@/components/second'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Default,
    },
    {
      path: '/table',
      name: 'table',
      component: Table
    }
  ]
})
