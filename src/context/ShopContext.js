import React from 'react';
import MENU_ITEMS_DATA from '../components/Directory/MENU_ITEMS_DATA';

export default React.createContext({
    products: MENU_ITEMS_DATA,
    cart:[],
    cartHidden: true,
    toggleCart: () => {},
    addProductToCart: product => {
    },
    removeProductFromCheckout: productId => {},
    addProductToCheckout: productId => {},
    emptyCart : () => {},
    handleTotal: () => {}
});