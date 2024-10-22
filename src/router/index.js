import { createWebHistory, createRouter } from 'vue-router'

import TheHomeView from '@/views/TheHome.vue'
import WatchVideoView from '@/views/WatchVideo.vue'
import PageNotFound from '@/views/PageNotFound.vue'

const routes = [
  { path: '/', name: 'Home', component: TheHomeView },
  { path: '/watch/:id', name: 'WatchVideo', component: WatchVideoView },
  { path: '/:catchAll(.*)*', name: 'NotFound', component: PageNotFound }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
