import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style/index.scss'

const app = createApp(App)
app.use(router)

console.log('测试是否可以拿到action的环境')
console.log('app.config', app.config)
console.log('import.meta.env.CI', import.meta.env.CI)
console.log('process.env.CI', process.env.CI)

app.mount('#app')
