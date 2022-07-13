import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import fb from "@/firebase";
import db from "@/firebase";

createApp(App).use(router, fb, db).mount('#app')
