import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import axios from "axios";
// var Vue = require('vue')

window.axios = require('axios');



//desfault vue http module
// Vue.prototype.$http = axios;
// //load token
const token = localStorage.getItem("token");

// //if valid append default auth headers
if(token) {
    Vue.prototype.$http.defaults.headers.common['Authorization']  = token;
}

createApp(App).use(store).use(router, axios).mount('#app')
