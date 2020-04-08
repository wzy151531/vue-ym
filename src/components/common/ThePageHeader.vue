<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item
                    v-for="breadcrumb in this.$breadcrumbs"
                    :key="breadcrumb.meta.title"
            >
                <router-link :to="breadcrumb.path">
                    {{ breadcrumb.meta.breadcrumb }}
                </router-link>
            </el-breadcrumb-item>
        </el-breadcrumb>
        <p>{{ headerInfo.title }}</p>
        <p>{{ headerInfo.alias }}</p>
    </div>
</template>

<script>
    export default {
        name: 'ThePageHeader',
        computed: {
            headerInfo() {
                return {
                    title: this.$route.meta.title,
                    alias: this.$route.meta.alias,
                };
            },
        },
    };
</script>

<style scoped>

</style>