import {combineReducers} from 'redux';

import userReducer from './cart/cart_reducer';

 const rootReducer = combineReducers({
    cart: userReducer
});

export default rootReducer;