import { createWebHashHistory, createRouter } from 'vue-router'

import Home from '@/views/Home.vue'
import WatchVideo from '@/views/WatchVideo.vue'
import PageNotFound from '@/views/PageNotFound.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/watch/:id', name: 'WatchVideo', component: WatchVideo },
  { path: '/:catchAll(.*)*', name: 'NotFound', component: PageNotFound }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
