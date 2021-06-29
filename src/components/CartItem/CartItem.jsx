import React from 'react';

import './CartItem.css';

const CartItem = ({title, imageUrl, quantity}) => {
    return(
        <div className='cart-item-container'>
                <img src={imageUrl} />
                <h3>{title}</h3>
                <p>{quantity}</p>
        </div>
    )
};

export default CartItem;