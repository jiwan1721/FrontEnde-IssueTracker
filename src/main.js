// import { createApp } from 'vue'
import App from './App.vue'
import axios from 'vue';
import Vue from 'vue';
import { router } from '@/router/index.js'
import VeeValidate from 'vee-validate';
// import './axios'
import setupIneceptor from './services/setupInterceptor'
import store from './store';
import Vuex from 'vuex';


// createApp(App).use(router).mount('#app')
Vue.prototype.$http=axios;

Vue.config.productionTip = false
Vue.use(VeeValidate);
Vue.use(Vuex);
setupIneceptor(store);

new Vue({
    router,
    store,
    render: h=> h(App)
}).$mount('#app')