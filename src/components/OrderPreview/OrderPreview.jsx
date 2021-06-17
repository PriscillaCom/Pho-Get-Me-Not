import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import OrderItems from '../OrderItems/OrderItems.jsx'
import './OrderPreview.css';

const OrderPreview = ({title, food}) => {
    const location = useLocation();

    useEffect(() => {
        if(location.hash){
            let elem = document.getElementById(location.hash.slice(1));
            elem 
                ? elem.scrollIntoView({behavior: 'smooth'})
                : window.scrollTo({top:0,left:0,behavior:"smooth"});
        }
        else
            return window.scrollTo({top:0,left:0,behavior:"smooth"});
    }, [location]);

    return(
    <div className='order_preview_container'>
        <h1 id={title} className='title'> {title.toUpperCase()}</h1>
        <div className='order_preview'>
            {
                food.map((prop) => (
                    <OrderItems key={prop.id} {...prop} />
                ))
            }
        </div>
    </div>
    );
};

export default OrderPreview