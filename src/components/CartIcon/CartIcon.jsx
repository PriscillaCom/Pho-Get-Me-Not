import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './CartIcon.css';

import ShopContext from '../../context/ShopContext';

class CartIcon extends React.Component {
    static contextType = ShopContext;
    
    handleCount = () => {
        let totalQuantity = 0;
        this.context.cart.map(item => (
            totalQuantity += item.quantity
        ))
        return totalQuantity;
    }

    render(){
        return(
            <ShopContext.Consumer>
                {context => (
                    <div>
                        <div className='icon_container' onClick={context.toggleCart}>
                            <ShoppingIcon className='shopping_icon'/>
                            <span className='item_count'>{this.handleCount()}</span>
                            {console.log('CART',context.cart)}
                    
                        </div>
                        {console.log(context.cartHidden)}
                    </div>
                )}
            </ShopContext.Consumer>    
        );
    }
}

export default CartIcon;