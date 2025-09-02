import './assets/main.css'
import { createApp, defineAsyncComponent } from 'vue';
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)

app.component('overlapping-emojis', defineAsyncComponent(() => import('./components/icons/OverlappingEmojis.vue')));
app.component('VModal', defineAsyncComponent(() => import('./components/MyVModal.vue')));
app.component('Repeater', defineAsyncComponent(() => import('./components/Repeater.vue')));
app.component('Question', defineAsyncComponent(() => import('./components/Question.vue')));


app.mount('#app')

