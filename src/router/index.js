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
                    alias: 'Today\'s diet and history diet.',
                    authority: ['admin'],
                    breadcrumb: 'Dashboard',
                    regex: /\/dashboard/,
                },
            },
            {
                path: '/dashboard/dashboardDetail',
                component: () => import('../components/pages/DashboardDetail.vue'),
                meta: {
                    title: 'Dashboard Detail',
                    alias: 'Ym Dashboard Detail',
                    authority: ['admin'],
                    breadcrumb: 'Dashboard Detail',
                    active: '/dashboard',
                    regex: /\/dashboard\/dashboardDetail/,
                },
            },
            {
                path: '/dashboard/dashboardDetail/:id',
                component: () => import('../components/pages/DashboardDataDetail.vue'),
                meta: {
                    title: 'Dashboard Data Detail',
                    alias: 'Ym Dashboard Data Detail',
                    authority: ['admin'],
                    breadcrumb: 'Dashboard Data Detail',
                    active: '/dashboard',
                    regex: /\/dashboard\/dashboardDetail\/[^/]+/,
                },
            },
            {
                path: '/dashboard/dashboardDetail/:id/items/:itemId',
                component: () => import('../components/pages/DashboardItemsDetail.vue'),
                meta: {
                    title: 'Dashboard Items Detail',
                    alias: 'Ym Dashboard Items Detail',
                    authority: ['admin'],
                    breadcrumb: 'Dashboard Items Detail',
                    active: '/dashboard',
                    regex: /\/dashboard\/dashboardDetail\/.+\/items\/[^/]+/,
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
    mode: 'history',
    routes,
});

router.beforeEach((to, from, next) => {
    // document.title = to.meta.title || 'vue-ym';
    const role = localStorage.getItem('ym_username');
    // TODO: swap first if to last else after login function complete.
    if (!role && to.path !== '/login') {
        // next('/login');

        const breadcrumbs = [];
        router.options.routes[1].children.forEach(n => {
            if (n.meta.regex) {
                const matched = to.path.match(n.meta.regex);
                if (matched) {
                    breadcrumbs.push({ path: matched[0], breadcrumb: n.meta.breadcrumb });
                }
            }
        });
        to.meta.breadcrumbs = breadcrumbs;

        next();
    } else if (to.meta.authority && to.meta.authority.indexOf(role) === -1) {
        next('/403');
    } else {
        next();
    }
});

export default router;