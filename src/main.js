import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
import './router/permission'

const app = createApp(App)

app.use(ElementPlus)

const pinia = createPinia()
pinia.use(piniaPluginPersist)
app.use(pinia)

app.use(router)

app.mount('#app')