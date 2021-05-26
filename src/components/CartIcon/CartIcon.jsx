import React, { useState, useContext } from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { OrderContext } from '../../App';
import './CartIcon.css';

const CartIcon = () => {
    const [cartHidden, setCartHidden] = useState(true);
    const { order } = useContext(OrderContext)
    const toggleCartHidden = () => {
        setCartHidden(!cartHidden);
        console.log(cartHidden);
    }

    return(
        <div className='icon_container' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping_icon'/>
            <span className='item_count'>{order}</span>
        </div>
    );
}

export default CartIcon;