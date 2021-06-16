import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './CartIcon.css';

import ShopContext from '../../context/ShopContext';

class CartIcon extends React.Component {
    static contextType = ShopContext;

    componentDidMount(){
        console.log(this.context.cart.length);
    }

    render(){
        return(
            <ShopContext.Consumer>
                {context => (
                    <div className='icon_container'>
                        <ShoppingIcon className='shopping_icon'/>
                        <span className='item_count'>{this.context.cart.length}</span>
                    </div>
                )}
            </ShopContext.Consumer>    
        );
    }
}

export default CartIcon;