import React from 'react';
import ShopContext from '../../context/ShopContext';

import './CartDropdown.css';

const CartDropdown = () => {
    return(
        <ShopContext.Consumer>
            {context => (
                <div className='cart-dropdown-container'>
                    {
                        context.cart.length ? 
                        <span>Howdy</span>
                        :
                        <span>Empty</span>
                    }
                </div>
            )}  
        </ShopContext.Consumer>
    );
};

export default CartDropdown;