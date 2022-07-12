
import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Landing",
        component: () => import('../Landing.vue')
    },
    {
        path: "/login",
        name: "Login",
        component: () => import('../Login.vue')
    },
    {
        path: "/register",
        name: "Register",
        component: () => import('../Register.vue')
    },
];

const router = createRouter({
    history: createWebHistory(),
    mode: 'history',
    routes,
});

export default router;