import React from 'react';
import ShopContext from '../../context/ShopContext';
import CartItem from '../CartItem/CartItem';

import './CartDropdown.css';

class CartDropdown extends React.Component {
    static contextType = ShopContext;

    render(){
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

                                <div className='total-price'>
                                    <p>Total: ${context.handleTotal()}</p>
                                </div>

                                <button className='checkout-button'>
                                    Check Out
                                </button>
                            </div>

                            :
                                            
                            <span className='empty-items-container'>Cart is Empty</span>   
                        }
                    
                    </div>
                )}  
            </ShopContext.Consumer>
        )
    };
};

export default CartDropdown;