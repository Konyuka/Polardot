import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import fb from "@/firebase";
import db from "@/firebase";

// import LoginPage from '@/views/LoginPage.vue'
// import RegisterPage from '@/views/RegisterPage.vue'

// app.component('MyComponent', MyComponent)

createApp(App).use(router, fb, db).mount('#app')
// createApp(App).use(router, fb, db).component('LoginPage', LoginPage).mount('#app')
