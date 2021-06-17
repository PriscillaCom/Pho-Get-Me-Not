import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './CartIcon.css';

import ShopContext from '../../context/ShopContext';

class CartIcon extends React.Component {
    static contextType = ShopContext;

   //maybe create a setstate for count instead? 
    getCount = () => {
        let count = 0;
        this.context.cart.map(item => (
            count += item.quantity
        ))
        return count;
    }

    render(){
        return(
            <ShopContext.Consumer>
                {context => (
                    <div className='icon_container'>
                        <ShoppingIcon className='shopping_icon'/>
                        <span className='item_count'>{this.getCount()}</span>
                        {console.log(context.cart)}
                    </div>
                )}
            </ShopContext.Consumer>    
        );
    }
}

export default CartIcon;