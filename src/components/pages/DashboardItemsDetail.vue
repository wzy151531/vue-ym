<template>
    <div>
        DashboardItemsDetail: Room {{ id }}, Item: {{ itemId }}
    </div>
</template>

<script>
    export default {
        name: 'DashboardItemsDetail',
        computed: {
            id() {
                return this.$route.params.id;
            },
            itemId() {
                return this.$route.params.itemId;
            },
        },
    };
</script>

<style scoped>

</style>