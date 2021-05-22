import React, { useState } from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './CartIcon.css';

//change state of
const CartIcon = () => {
    const [cartHidden, setCartHidden] = useState(true);

    const toggleCartHidden = () => {
        setCartHidden(!cartHidden);
        console.log(cartHidden);
    }

    return(
        <div className='icon_container' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping_icon'/>
            <span className='item_count'>0</span>
        </div>
    )
}

export default CartIcon;