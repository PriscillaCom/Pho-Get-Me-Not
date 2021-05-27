import React, { useContext } from 'react';
import { OrderContext } from '../../App';
import './OrderItems.css';

const OrderItems = ({title,price,description,imageUrl}) => {
    const { order, setOrder } = useContext(OrderContext)

    function addOrder() {
        setOrder(order + 1);
    }
    

    return(
    <div className="order_items">
        <img className='order_image' src={imageUrl} alt='food'/>
        <div className='content'>
            <h4>{title}</h4>
            <p>{description}</p>
            <h4>${price}</h4>
            <button onClick={addOrder}>Add To Cart</button> 
        </div>
    </div>
    );
};

export default OrderItems;