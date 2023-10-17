import { createApp } from 'vue'
import App from './App.vue'
import './assets/sass/base/main.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
