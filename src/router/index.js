
import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        name: "LandingPage",
        component: () => import('@/views/LandingPage.vue')
    },
    {
        path: "/login",
        name: "LoginPage",
        component: () => import('@/views/LoginPage.vue')
    },
    {
        path: "/register",
        name: "RegisterPage",
        component: () => import('@/views/RegisterPage.vue')
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