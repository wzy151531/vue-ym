import { deleteDietItem, editDietItem, fetchDietItem } from '../../service/api';
import itemNutrition from '../../utils/ItemNutrition';
import { generateMessage } from '../../utils';

const state = {
    tableData: [],
    loading: true,
    editId: -1,
    editItem: {
        id: undefined,
        name: '',
        quantity: 0,
    },
    itemOptions: itemNutrition.items.map(n => n.name),
};

const mutations = {
    handleEdit(state, editItem) {
        state.editId = editItem.id;
        state.editItem = editItem;
    },
    handleSelect(state, name) {
        state.editItem.name = name;
    },
    handleInput(state, quantity) {
        state.editItem.quantity = quantity;
    },
    handleAdd(state) {
        state.editItem = {
            id: undefined,
            name: '',
            quantity: 0,
        };
        state.tableData.push(state.editItem);
        state.editId = undefined;
    },
    handleCancel(state) {
        if (state.editItem.name === '' || state.editId === undefined) {
            state.tableData.pop();
        }
        state.editId = -1;
    },
    handleConfirm(state) {
        state.editId = -1;
    },
    handleFetch(state, tableData) {
        state.tableData = tableData;
    },
    handleDelete(state, id) {
        state.tableData = state.tableData.filter(n => n.id !== id);
    },
    setLoading(state, loading) {
        state.loading = loading;
    },
};

const actions = {
    async handleFetchAction({ commit }) {
        const response = await fetchDietItem();
        if (response.status === 0) {
            commit('handleFetch', response.data.items instanceof Array ? response.data.items : []);
        } else {
            generateMessage('warning', `Unexpected error: ${response.status}`);
        }
        commit('setLoading', false);
    },
    async handleDeleteAction({ commit }, id) {
        const response = await deleteDietItem({ id });
        if (response.status === 0) {
            commit('handleDelete', id);
            generateMessage('success', 'Delete Successfully');
        } else {
            generateMessage('warning', `Unexpected error: ${response.status}`);
        }
    },
    async handleConfirmAction({ commit }, newItem) {
        const response = await editDietItem(newItem);
        if (response.status === 0) {
            commit('handleConfirm');
            generateMessage('success', `${newItem.id + 1 ? 'Edit' : 'Add'} Successfully`);
        } else {
            generateMessage('warning', `Unexpected error: ${response.status}`);
            commit('handleCancel');
        }
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};