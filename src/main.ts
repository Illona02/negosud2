import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@element-plus/icons-vue'

const app = createApp(App).use(ElementPlus)

app.use(router)

app.mount('#app')
