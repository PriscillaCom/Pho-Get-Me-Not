import React from 'react';

import './CheckoutCartItem.css';

import ShopContext from '../../context/ShopContext';

const CheckoutCartItem = (props)=> {
    const {title, imageUrl, quantity, price} = props
    return(
        <ShopContext.Consumer>
            {context => (
                <div className='checkout-cart-item-container'>
                    <img src={imageUrl} alt='food'/>
                    <div className='checkout-cart-item-description'>
                        <p>{title}</p>
                        <p>$ {price}</p>
                        <button onClick={context.addProductToCheckout.bind(this,props.id)}>Addon</button>
                        <p>Quantity: {quantity}</p>
                        <button onClick={context.removeProductFromCheckout.bind(this,props.id)}>Remove</button>
                    </div>
                </div>
            )}
        </ShopContext.Consumer>
    );
};

export default CheckoutCartItem;