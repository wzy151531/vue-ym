const state = {
    isCollapse: false,
    items: [
        {
            icon: 'el-icon-star-off',
            index: '/dashboardEntry',
            title: 'Dashboard',
            subs: [
                {
                    index: '/dashboard',
                    title: 'Dashboard',
                },
            ],
        },
        {
            icon: 'el-icon-star-off',
            index: '/Unknown',
            title: 'Unknown',
        },
    ],
};

const mutations = {
    handleCollapse(state) {
        state.isCollapse = !state.isCollapse;
    },
};

export default {
    namespaced: true,
    state,
    mutations,
};