import React from 'react';
import MENU_ITEMS_DATA from '../components/Directory/MENU_ITEMS_DATA';

export default React.createContext({
    proudcts: MENU_ITEMS_DATA,
    cart:[],
    addProductToCart: product => {
    },
    deleteProductFromCart: productId => {}
});