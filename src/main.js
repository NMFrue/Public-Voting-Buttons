import './assets/main.css'
import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from "pinia" // Pinia ist in Vue3 dafür da, um Daten zwischen Vue elementen auszutauschen, auch wenn sie nicht direkt ineinander eingefügt wurden. (Quasi damit die einzelnen Blätter im baum miteinander kommunizieren können. (so stellich mir das gerade vor.))


const app = createApp(App)
app.use(router)
const pinia = createPinia()
app.use(pinia)

app.component('overlapping-emojis', defineAsyncComponent(() => import('./components/icons/OverlappingEmojis.vue')));
app.component('VModal', defineAsyncComponent(() => import('./components/MyVModal.vue')));
app.component('Repeater', defineAsyncComponent(() => import('./components/Repeater.vue')));
app.component('Question', defineAsyncComponent(() => import('./components/Question.vue')));


app.mount('#app')

