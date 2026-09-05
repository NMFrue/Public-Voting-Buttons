import { createRouter, createWebHashHistory } from 'vue-router'

// deine Seiten (Vue-Komponenten) importieren
import Overview from '../pages/overview.vue'
import buttons1 from '../pages/buttons1.vue'
import HookRail from '../pages/hookRail.vue'

const routes = [
  { path: '/', name: 'Overview', component: Overview },
  { path: '/buttons1', name: 'buttons1', component: buttons1 },
  { path: '/haken-schiene', redirect: { name: 'hookRailBroadcast' } },
  {
    path: '/haken-schiene/rundfunkgebuehren',
    name: 'hookRailBroadcast',
    component: HookRail,
    props: { questionId: 'rundfunkgebuehren' },
  },
  {
    path: '/haken-schiene/windkraftanlagen',
    name: 'hookRailWind',
    component: HookRail,
    props: { questionId: 'windkraftanlagen' },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
