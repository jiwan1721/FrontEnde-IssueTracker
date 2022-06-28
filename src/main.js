import { createApp } from 'vue'
import App from './App.vue'
import axios from 'vue';
import Vue from 'vue';
import router from '@/router/index.js'
import './axios'


createApp(App).use(router).mount('#app')
Vue.prototype.$http=axios;