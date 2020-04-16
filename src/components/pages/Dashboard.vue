<template>
    <div>
        <el-row type="flex" justify="space-around">
            <el-col :span="11">
                <el-card shadow="hover">
                    <div slot="header" class="clearfix">
                        <span>Diet Progress</span>
                    </div>
                    <el-row type="flex" justify="center">
                        <router-link to="/dashboard/dashboardDetail">
                            <el-progress type="dashboard" :stroke-width="20" :width="250"
                                         :percentage="100"
                                         status="success"></el-progress>
                        </router-link>
                    </el-row>
                    <div class="attr-title">Calories</div>
                    <el-row type="flex" justify="space-around" class="progess-bar">
                        <el-col :span="6">
                            <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
                            <div class="attr-title-margin">Carbohydrate</div>
                        </el-col>
                        <el-col :span="6">
                            <el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
                            <div class="attr-title-margin">Protein</div>
                        </el-col>
                        <el-col :span="6">
                            <el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
                            <div class="attr-title-margin">Fat</div>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
            <el-col :span="11">
                <el-card shadow="hover">
                    <div slot="header" class="clearfix">
                        <span>Recent Calories</span>
                    </div>
                    <schart class="schart" canvasId="bar" :options="recentDietOptions"></schart>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Schart from 'vue-schart';
    import { mapState } from 'vuex';

    export default {
        name: 'Dashboard',
        components: {
            Schart,
        },
        computed: {
            ...mapState({
                recentDietOptions: state => {
                    return {
                        type: 'bar',
                        labels: ['5DB', '4DB', '3DB', '2DB', '1DB'],
                        datasets: [
                            {
                                label: 'Calories',
                                data: state.dashboard.chartData,
                            },
                        ],
                    };
                },
            }),
        },
    };
</script>

<style scoped>
    .attr-title {
        text-align: center;
    }


    .progess-bar {
        margin: 24px 0;
    }

    .attr-title-margin {
        text-align: center;
        margin-top: 12px;
    }

    .el-card {
        min-height: 500px;
    }

    .schart {
        height: 340px;
    }
</style>