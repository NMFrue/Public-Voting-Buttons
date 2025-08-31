import { createRouter, createWebHistory } from 'vue-router'

// deine Seiten (Vue-Komponenten) importieren
import Overview from '../pages/overview.vue'
import buttons1 from '../pages/buttons1.vue'

const routes = [
  { path: '/', name: 'Overview', component: Overview },
  { path: '/buttons1', name: 'buttons1', component: buttons1 }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
