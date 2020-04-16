const items = [
    {
        name: 'Chicken breast',
        info: {
            carbohydrate: 0,
            protein: 24,
            fat: 1.1,
            calories: 106,
        },
    },
    {
        name: 'Eggs',
        info: {
            carbohydrate: 2.1,
            protein: 12.1,
            fat: 10.5,
            calories: 151,
        },
    },
    {
        name: 'Banana',
        info: {
            carbohydrate: 22,
            protein: 1.4,
            fat: 0.2,
            calories: 93,
        },
    },
    {
        name: 'Sweet potato',
        info: {
            carbohydrate: 15.3,
            protein: 0.7,
            fat: 0.2,
            calories: 61,
        },
    },
    {
        name: 'Spaghetti',
        info: {
            carbohydrate: 75.7,
            protein: 11.5,
            fat: 1.5,
            calories: 362,
        },
    },
    {
        name: 'Onken',
        info: {
            carbohydrate: 13,
            protein: 4.5,
            fat: 0,
            calories: 75,
        },
    },
    {
        name: 'Avocado',
        info: {
            carbohydrate: 7.4,
            protein: 2,
            fat: 15.3,
            calories: 161,
        },
    },
    {
        name: 'Skimmed milk',
        info: {
            carbohydrate: 5,
            protein: 3.6,
            fat: 0.3,
            calories: 37,
        },
    },
    {
        name: 'Pancake',
        info: {
            carbohydrate: 50,
            protein: 6,
            fat: 4.7,
            calories: 269,
        },
    },
    {
        name: 'Nuts',
        info: {
            carbohydrate: 48.2,
            protein: 18.2,
            fat: 22.1,
            calories: 464.1,
        },
    },
];

const itemsMap = new Map();

items.forEach(n => {
    itemsMap.set(n.name, n.info);
});

export default {
    items,
    itemsMap,
};