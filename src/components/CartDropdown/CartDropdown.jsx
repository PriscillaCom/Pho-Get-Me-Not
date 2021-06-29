import { forEach } from 'async';
import React from 'react';
import ShopContext from '../../context/ShopContext';
import CartItem from '../CartItem/CartItem';

import './CartDropdown.css';

const CartDropdown = () => {
    return(
        <ShopContext.Consumer>
            {context => (
                <div className='dropdown-container'>
                    {
                        context.cart.length ? 
                            <div>
                                <div className='items-container'>
                               { context.cart.map(({id, ...otherProps}) => (
                                    <CartItem key={id} {...otherProps}/>
                                ))}
                                </div>
                                 <button className='checkout-button'>
                                    Check Out
                                </button>
                            </div>
                        :
                        <span className='dropdown-container'>Empty</span>   
                    }
                   
                </div>
            )}  
        </ShopContext.Consumer>
    );
};

export default CartDropdown;