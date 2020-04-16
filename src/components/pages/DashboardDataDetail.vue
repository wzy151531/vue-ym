<template>
    <div>
        DashboardDataDetail: {{ id }}
        <router-link :to="'/dashboard/dashboardDetail/'+id+'/items/20'">Item 20</router-link>
    </div>
</template>

<script>
    export default {
        name: 'DashboardDataDetail',
        computed: {
            id() {
                return this.$route.params.id;
            },
        },
    };
</script>

<style scoped>

</style>