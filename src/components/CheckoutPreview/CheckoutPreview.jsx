import React from 'react';

import './CheckoutPreview.css';

import CheckoutCartItem from '../CheckoutCartItem/CheckoutCartItem';
import ShopContext from '../../context/ShopContext';

const CheckoutPreview = () => {
    return(
    <ShopContext.Consumer>
        {context => (
            <div className="checkout-preview-container">
                { context.cart.map((prop) => (
                    <CheckoutCartItem key={prop.id} {...prop}/>
                ))
                }
            </div>
        )}
    </ShopContext.Consumer>
    
    );
};

export default CheckoutPreview;