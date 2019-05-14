import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/components/default.vue'
import Table from '@/components/Table.vue'
import Storage from '@/components/storage.vue'
import Parent from '@/components/parent.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Default,
  },
  {
    path: '/table',
    name: 'table',
    component: Table
  },
  {
    path: '/storage',
    name: 'storage',
    component: Storage
  },
  {
    path: '/parent',
    name: 'parent',
    component: Parent
  }
];


const router = new Router({
  routes
});
// router.beforeEach(function (to, from, next) {
//   store.dispatch('loadingShow')
//   next()
// });
//
// router.afterEach(function () {
//   store.dispatch('loadingHide');
// });


export default router

