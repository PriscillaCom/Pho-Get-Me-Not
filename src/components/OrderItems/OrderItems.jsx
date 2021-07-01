import React from 'react';
import './OrderItems.css';

import ShopContext from '../../context/ShopContext';

const OrderItems = (props) => {
    const {title,description,price,imageUrl} = props;
    return(
    <ShopContext.Consumer>
        {context => (
            <div className="order_items">
                <img className='order_image' src={imageUrl} alt='food'/>
                <div className='content'>
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <h4>${price.toFixed(2)}</h4>
                    <button onClick={context.addProductToCart.bind(this,props)}>
                        Add To Cart
                    </button> 
                </div>
            </div>
        )}
    </ShopContext.Consumer>
    
    );
};

export default OrderItems;