<template>
    <el-menu class="el-menu-vertical-demo"
             :default-active="onRoutes"
             :collapse="isCollapse"
             unique-opened
             router
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b"
    >
        <div class="title">{{ systemTitle }}</div>
        <template v-for="item in items">
            <template v-if="item.subs">
                <el-submenu :index="item.index" :key="item.index">
                    <template slot="title">
                        <i :class="item.icon"></i>
                        <span slot="title" class="menu-item">{{ item.title }}</span>
                    </template>
                    <template v-for="subItem in item.subs">
                        <el-submenu
                                v-if="subItem.subs"
                                :index="subItem.index"
                                :key="subItem.index"
                        >
                            <template slot="title" class="menu-item">{{ subItem.title }}</template>
                            <el-menu-item
                                    v-for="(threeItem,i) in subItem.subs"
                                    :key="i"
                                    :index="threeItem.index"
                                    class="menu-item"
                            >{{ threeItem.title }}
                            </el-menu-item>
                        </el-submenu>
                        <el-menu-item
                                v-else
                                :index="subItem.index"
                                :key="subItem.index"
                                class="menu-item"
                        >{{ subItem.title }}
                        </el-menu-item>
                    </template>
                </el-submenu>
            </template>
            <template v-else>
                <el-menu-item :index="item.index" :key="item.index">
                    <i :class="item.icon"></i>
                    <span slot="title" class="menu-item">{{ item.title }}</span>
                </el-menu-item>
            </template>
        </template>
    </el-menu>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'TheNavMenu',
        computed: {
            onRoutes() {
                return this.$route.meta.active || this.$route.path;
            },
            ...mapState({
                isCollapse: state => state.theNavMenu.isCollapse,
                items: state => state.theNavMenu.items,
                systemTitle: state => state.theNavMenu.isCollapse ? 'D' : 'D M S',
            }),
        },
    };
</script>

<style scoped>
    .el-menu-vertical-demo {
        height: 100%;
        padding: 12px 0;
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
    }

    .title {
        text-align: center;
        font-size: 24px;
        font-weight: 700;
    }

    .menu-item {
        font-size: 16px;
    }

</style>