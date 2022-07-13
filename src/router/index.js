
import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Landing",
        component: () => import('@/views/Landing.vue')
    },
    {
        path: "/login",
        name: "Login",
        component: () => import('@/views/Login.vue')
    },
    {
        path: "/register",
        name: "Register",
        component: () => import('@/views/Register.vue')
    },
    {
        path: "/clientdash",
        name: "ClientDash",
        component: () => import('@/views/ClientDash.vue')
    },
];

const router = createRouter({
    history: createWebHistory(),
    mode: 'history',
    routes,
});

export default router;