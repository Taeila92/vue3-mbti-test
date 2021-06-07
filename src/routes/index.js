import {createRouter, createWebHashHistory} from 'vue-router'
import MbtiTest from './MbtiTest'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: MbtiTest
    }

  ]
})