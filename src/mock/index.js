import Mock from 'mockjs';
import { baseURL } from '../utils/request';
import dashboardDetail from './modules/dashboardDetail';

Mock.setup({
    timeout: 0,
});

const arr = [dashboardDetail];

arr.forEach(n => {
    n.forEach(m => {
        Mock.mock(`${baseURL}${m.url}`, m.method, m.data);
    });
});
