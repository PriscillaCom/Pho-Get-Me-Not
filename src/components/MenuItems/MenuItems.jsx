import React from 'react';
import './MenuItems.css';

const MenuItems= ({title,price,imageUrl}) => {
    return(
    <div className="menu_items">
        <div>
            <img className='menu_image' src={imageUrl} alt='food'/>
        </div>
        <div className='content'>
            <h4>{title}</h4>
            <h4>${price.toFixed(2)}</h4>
        </div>
    </div>
    );
};

export default MenuItems;