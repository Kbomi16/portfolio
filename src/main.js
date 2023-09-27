import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { normalizeStyle } from 'vue'

createApp(App).use(router).mount('#app')
