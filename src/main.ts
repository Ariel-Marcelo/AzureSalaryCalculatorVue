import {createPinia} from "pinia";
import { createApp } from 'vue'
import router from './router/index.js';
import './style.css'
import App from './App.vue'

const app = createApp(App);

app.use(createPinia());

app.use(router);

app.mount('#app')