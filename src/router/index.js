
import { createWebHistory, createRouter } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

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
        component: () => import('@/views/ClientDash.vue'),
        meta: { requiresAuth: true },
    },
];

const router = createRouter({
    history: createWebHistory(),
    mode: 'history',
    routes,
});


router.beforeEach((to, from, next) =>
{

    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
    const auth = getAuth();
    onAuthStateChanged(auth, (user) =>
    {
        if (requiresAuth && !user) {
            next('/login')
        } else if (requiresAuth && user) {
            next()
        } else {
            next()
        }
    });

})

export default router;