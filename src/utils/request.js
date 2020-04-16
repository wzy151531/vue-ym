import axios from 'axios';
import { generateMessage } from './index';

export const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/api' : null;

const service = axios.create({
    baseURL,
    timeout: 5000,
});

service.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject();
    },
);

service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data;
        } else {
            Promise.reject();
        }
    },
    error => {
        generateMessage('error', error);
        // return Promise.reject(error);
        return {};
    },
);

export default service;
