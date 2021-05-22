import React, { useState } from 'react';
import './OrderItems.css';

const OrderItems = ({title,price,description,imageUrl}) => {
    // const [cartItems,setCartItems] = useState([]);

    // Add Cart Item state 

    return(
    <div className="order_items">
        <img className='order_image' src={imageUrl} alt='food'/>
        <div className='content'>
            <h4>{title}</h4>
            <p>{description}</p>
            <h4>${price}</h4>
            {/* <button onClick={() => addItem(item)}>Add To Cart</button> */}
            <button>Add Item</button>
        </div>
    </div>
    );
};

export default OrderItems;