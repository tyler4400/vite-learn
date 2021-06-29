import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style/index.scss'

const app = createApp(App)
app.use(router)

console.log('app.config', app.config)
app.mount('#app')

var a = 34
