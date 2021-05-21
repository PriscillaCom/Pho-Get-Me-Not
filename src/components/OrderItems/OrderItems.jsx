import React from 'react';
import './OrderItems.css';

const OrderItems = ({title,price,description,imageUrl}) => {
    return(
    <div className="order_items">
        <img className='order_image' src={imageUrl} alt='food'/>
        <div className='content'>
            <h4>{title}</h4>
            <p>{description}</p>
            <h4>${price}</h4>
            <button>Add To Cart</button>
        </div>
    </div>
    );
};

export default OrderItems;