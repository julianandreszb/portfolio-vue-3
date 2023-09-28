import { createApp } from 'vue'
import App from './App.vue'
import 'normalize-scss/sass/normalize/_import-now.scss'
import './assets/styles/main.scss'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
