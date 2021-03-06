export const MONTH = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const API_KEY = '3ac6cd2a0ae9933683f5ccc84181b596';
export const URL = 'https://api.themoviedb.org/3';
export const MENU_ITEMS = [
    {
        id: 'menu_item_1',
        direction: '/',
        icon: '🏠',
        name: 'Home'
    },
    {
        id: 'menu_item_2',
        direction: {
            pathname: '/movie',
            search: '?page=1'
        },
        icon: '🎬',
        name: 'Movies'
    },
    {
        id: 'menu_item_3',
        direction: {
            pathname: '/tv',
            search: '?page=1'
        },
        icon: '📺',
        name: 'TV Show'
    },
    {
        id: 'menu_item_4',
        direction: {
            pathname: '/persons',
            search: '?page=1'
        },
        icon: '👲',
        name: 'Actors'
    }
];