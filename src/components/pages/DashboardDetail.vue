<template>
    <div>
        DashboardDetail
        <router-link to="/dashboard/dashboardDetail/G42">Data: G42</router-link>
        <el-row type="flex" :gutter="20">
            <el-col :span="12">
                <el-table
                        :data="tableData"
                        v-loading="loading"
                        style="width: 100%">
                    <el-table-column
                            label="Item"
                            width="180">
                        <template slot-scope="scope">
                            <span v-if="scope.row.id !== editId">{{ scope.row.name }}</span>
                            <el-select size="small" v-else :value="editItem.name"
                                       placeholder="Choose item"
                                       @change="handleSelect">
                                <el-option
                                        v-for="item in itemOptions"
                                        :key="item.value"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="Quantity(g/ml)"
                            width="180">
                        <template slot-scope="scope">
                            <span v-if="scope.row.id !== editId">{{ scope.row.quantity }}</span>
                            <el-input-number size="small" v-else :value="editItem.quantity"
                                             @change="handleInput"></el-input-number>
                        </template>
                    </el-table-column>
                    <el-table-column label="Actions">
                        <template slot-scope="scope">
                            <template v-if="scope.row.id !== editId">
                                <el-button
                                        size="mini"
                                        @click="handleEdit(scope.row)">edit
                                </el-button>
                                <el-button
                                        size="mini"
                                        type="danger"
                                        @click="handleDeleteAction(scope.row.id)">
                                    delete
                                </el-button>
                            </template>

                            <template v-else>
                                <el-button
                                        size="mini"
                                        @click="handleCancel()">cancel
                                </el-button>
                                <el-button
                                        v-if="editItem.name !== ''"
                                        size="mini"
                                        type="primary"
                                        @click="handleConfirmAction(editItem)">confirm
                                </el-button>
                            </template>
                        </template>
                    </el-table-column>
                </el-table>
                <el-button v-if="editId === -1" class="add-button" @click="handleAdd">+
                    Add
                </el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import { mapState, mapMutations, mapActions } from 'vuex';

    export default {
        name: 'DashboardDetail',
        computed: {
            ...mapState({
                tableData: state => state.dashboardDetail.tableData,
                loading: state => state.dashboardDetail.loading,
                editId: state => state.dashboardDetail.editId,
                editItem: state => state.dashboardDetail.editItem,
                itemOptions: state => state.dashboardDetail.itemOptions.map(n => {
                    return {
                        value: n,
                    };
                }),
            }),
        },
        methods: {
            ...mapMutations({
                handleEdit: 'dashboardDetail/handleEdit',
                handleSelect: 'dashboardDetail/handleSelect',
                handleInput: 'dashboardDetail/handleInput',
                handleAdd: 'dashboardDetail/handleAdd',
                handleCancel: 'dashboardDetail/handleCancel',
                handleConfirm: 'dashboardDetail/handleConfirm',
            }),
            ...mapActions({
                handleDeleteAction: 'dashboardDetail/handleDeleteAction',
                handleFetchAction: 'dashboardDetail/handleFetchAction',
                handleConfirmAction: 'dashboardDetail/handleConfirmAction',
            }),
        },
        created() {
            this.handleFetchAction();
        },
    };
</script>

<style scoped>
    .add-button {
        margin-top: 12px;
        width: 100%;
        font-weight: bold;
        color: #909399;
    }
</style>