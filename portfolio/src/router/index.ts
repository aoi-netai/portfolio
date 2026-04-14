import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/components/MainPage.vue'
import FlightControllerPage from '@/components/FlightControllerPage.vue'
import LidarPage from '@/components/LidarPage.vue'
import STM32Page from '@/components/STM32Page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: MainPage },
    { path: '/works/flight-controller', component: FlightControllerPage },
    { path: '/works/lidar', component: LidarPage },
    { path: '/works/stm32', component: STM32Page },
  ],
})

export default router
