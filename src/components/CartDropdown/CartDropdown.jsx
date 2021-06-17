import React from 'react';
import ShopContext from '../../context/ShopContext';

const CartDropdown = () => {
    return(
        <ShopContext.Consumer>
            {context => (
                <div>
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