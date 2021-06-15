import {addItemToCart} from './cart_utilities';

const INITIAL_STATE = {
    cartItems: [],
    hidden: true
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_CART_ITEM':
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };

        default:
            return state;
    }
}

export default cartReducer;