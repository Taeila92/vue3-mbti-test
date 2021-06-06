import {createRouter, createWebHashHistory} from 'vue-router'
import Home from './Home'
import MbtiTest from './MbtiTest'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: MbtiTest
    },
    {
      path: '/mbti',
      component: Home
    }

  ]
})