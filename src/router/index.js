import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/dashboard',
    },
    {
        path: '/',
        component: () => import('../layouts/BasicLayout.vue'),
        meta: { title: 'BasicLayout' },
        children: [
            {
                path: '/dashboard',
                component: () => import('../components/pages/Dashboard.vue'),
                meta: {
                    title: 'Dashboard',
                    alias: 'Ym Dashboard',
                    authority: ['admin'],
                    breadcrumb: 'Dashboard',
                },
            },
            {
                path: '/404',
                component: () => import('../components/pages/404.vue'),
                meta: { title: '404', alias: '404 Not Found' },
            },
            {
                path: '/403',
                component: () => import('../components/pages/403.vue'),
                meta: { title: '403' },
            },
        ],
    },
    {
        path: '/login',
        component: () => import('../layouts/LoginLayout.vue'),
        meta: { title: 'Login' },
    },
    {
        path: '*',
        redirect: '/404',
    },
];

const router = new VueRouter({
    routes,
});

router.beforeEach((to, from, next) => {
    // document.title = to.meta.title || 'vue-ym';
    const role = localStorage.getItem('ym_username');
    if (!role && to.path !== '/login') {
        // next('/login');
        next();
    } else if (to.meta.authority && to.meta.authority.indexOf(role) === -1) {
        next('/403');
    } else {
        next();
    }
});

export default router;