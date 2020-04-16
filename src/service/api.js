import request from '../utils/request';

export const fetchDietItem = query => {
    return request({
        url: '/diet',
        method: 'get',
        params: query,
    });
};

export const deleteDietItem = query => {
    return request({
        url: '/diet',
        method: 'delete',
        data: query,
    });
};

export const editDietItem = query => {
    return request({
        url: '/diet',
        method: 'post',
        data: query,
    });
};
