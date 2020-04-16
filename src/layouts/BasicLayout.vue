<template>
    <el-container class="content">
        <el-aside width="auto">
            <the-nav-menu></the-nav-menu>
        </el-aside>
        <el-container :class="{'content-collapse': isCollapse, 'content-detail': true}">
            <el-header height="auto">
                <the-page-header></the-page-header>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer>
                <the-footer></the-footer>
            </el-footer>
        </el-container>
    </el-container>
</template>

<script>
    import TheNavMenu from '../components/common/TheNavMenu';
    import ThePageHeader from '../components/common/ThePageHeader';
    import TheFooter from '../components/common/TheFooter';
    import { mapState } from 'vuex';

    export default {
        name: 'BasicLayout',
        components: { TheFooter, ThePageHeader, TheNavMenu },
        computed: {
            ...mapState({
                isCollapse: state => state.theNavMenu.isCollapse,
            }),
        },
    };
</script>

<style scoped>
    .content {
        min-height: 100vh;
    }

    .content-collapse {
        left: 65px;
    }

    .content-detail {
        padding-top: 12px;
    }
</style>