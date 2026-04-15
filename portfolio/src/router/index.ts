import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from '@/components/MainPage.vue'
import FlightControllerPage from '@/components/FlightControllerPage.vue'
import LidarPage from '@/components/LidarPage.vue'
import STM32Page from '@/components/STM32Page.vue'
import STM32ProgramsPage from '@/components/STM32ProgramsPage.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: MainPage },
    { path: '/works/flight-controller', component: FlightControllerPage },
    { path: '/works/lidar', component: LidarPage },
    { path: '/works/stm32', component: STM32Page },
    { path: '/works/stm32/programs', component: STM32ProgramsPage },
  ],
})

export default router
