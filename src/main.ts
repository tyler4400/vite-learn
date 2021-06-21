import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)

console.log('app.config', app.config);
app.mount('#app')
