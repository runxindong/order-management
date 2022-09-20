import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './assets/main.css'
import storage from './storage'
import InfiniteLoading from 'v3-infinite-loading'
import 'v3-infinite-loading/lib/style.css'

const app = createApp(App)

app.use(router)

app.component('infinite-loading', InfiniteLoading)

app.mount('#app')