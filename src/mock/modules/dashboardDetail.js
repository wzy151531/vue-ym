const items = [
    {
        id: 0,
        name: 'Chicken breast',
        quantity: 150,
    },
];

// TODO
const handleFakeDelete = req => {
    console.log(JSON.parse(req.body).id);
    return {
        status: 0,
    };
};

const handleFakeFetch = () => {
    return {
        status: 0,
        data: {
            items,
        },
    };
};

const handleFakeEdit = req => {
    const body = JSON.parse(req.body);
    const { id, name, quantity } = body;
    if (id) {
        items.forEach(n => {
            if (id === n.id) {
                n.name = name;
                n.quantity = quantity;
            }
        });
    } else {
        items.push({
            id: items.length,
            name,
            quantity,
        });
    }
    return {
        status: 0,
    };
};

export default [
    {
        url: '/diet',
        method: 'delete',
        data: handleFakeDelete,
    },
    {
        url: '/diet',
        method: 'get',
        data: handleFakeFetch,
    },
    {
        url: '/diet',
        method: 'post',
        data: handleFakeEdit,
    },
];