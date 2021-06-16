import React, {Component} from 'react';
import OrderPreview from '../OrderPreview/OrderPreview.jsx';
import ShopContext from '../../context/ShopContext.js';

import './OrderMenu.css';

class OrderMenu extends Component {
    render(){
        return(
            <ShopContext.Consumer>
                {context => (
                    <div className='orderMenu'>
                    {
                        context.products.map(({id, ...otherProps}) => (
                            <OrderPreview key={id} {...otherProps}/>
                        ))
                    }
                    </div>
                )}
            </ShopContext.Consumer>   
        );
    }
}

export default OrderMenu;