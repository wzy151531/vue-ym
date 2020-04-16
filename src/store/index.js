import Vue from 'vue';
import Vuex from 'vuex';
import theNavMenu from './modules/theNavMenu';
import dashboard from './modules/dashboard';
import dashboardDetail from './modules/dashboardDetail';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        theNavMenu,
        dashboard,
        dashboardDetail,
    },
    strict: debug,
    // plugins: debug ? [createLogger()] : []
});