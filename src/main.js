import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'
import JSPP_UI from './libs/jspp-ui'
import 'reset-css'

createApp(App).use(JSPP_UI).use(router).use(store).mount('#app')
