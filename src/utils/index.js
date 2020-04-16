import { Message } from 'element-ui';

export const generateMessage = (type, message) => {
    Message.closeAll();
    Message({
        type,
        message,
    }, true);
};