import React from 'react';

import './CartItem.css';

const CartItem = ({title, imageUrl, quantity, price}) => {
    return(
        <div className='cart-item-container'>
                <img src={imageUrl} alt='food'/>
                <div className='cart-item-description'>
                    <p>{title}</p>
                    <p>$ {price}</p>
                    <p>Quantity: {quantity}</p>
                </div>
        </div>
    )
};

export default CartItem;