import React from 'react';
import './MenuItems.css';

const MenuItems = ({title,imageUrl}) => (
    <div className="menuPage">
        <div className='menuImage'>
            <img src={imageUrl} alt='food'/>
        </div>
        <div className='content'>
            <h4>{title.toUpperCase()}</h4>
        </div>
    </div>
);

export default MenuItems;