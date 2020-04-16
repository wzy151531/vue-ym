<template>
    <div>
        <el-row type="flex" justify="space-between">
            <el-col :span="2"
                    class="icon-wrap"><i :class="iconClass" @click="handleCollapse()"></i></el-col>
            <el-col :span="2">
                <el-avatar :src="logo" size="small"></el-avatar>
            </el-col>
        </el-row>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item
                    v-for="breadcrumb in breadcrumbs"
                    :key="breadcrumb.breadcrumb"
            >
                <router-link :to="breadcrumb.path">
                    {{ breadcrumb.breadcrumb }}
                </router-link>
            </el-breadcrumb-item>
        </el-breadcrumb>
        <h1>{{ headerInfo.title }}</h1>
        <p class="alias">{{ headerInfo.alias }}</p>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';
    import logo from '../../assets/logo.png';

    export default {
        name: 'ThePageHeader',
        data() {
            return {
                logo,
            };
        },
        computed: {
            headerInfo() {
                return {
                    title: this.$route.meta.title,
                    alias: this.$route.meta.alias,
                };
            },
            breadcrumbs() {
                return this.$route.meta.breadcrumbs;
            },
            ...mapState({
                iconClass: state => state.theNavMenu.isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold',
            }),
        },
        methods: {
            ...mapMutations({
                handleCollapse: 'theNavMenu/handleCollapse',
            }),
        },
    };
</script>

<style scoped>
    .icon-wrap {
        font-size: 25px
    }

    .el-breadcrumb {
        margin-top: 12px;
    }

    .alias {
        color: #606266;
    }
</style>