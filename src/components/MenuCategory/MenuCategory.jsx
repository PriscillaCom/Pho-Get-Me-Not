import React from 'react';
import './MenuCategory.css';

const MenuCategory= ({title,imageUrl}) => (
    <div className="menuCategory">
        <div>
            <img className='image' src={imageUrl} alt='food'/>
        </div>
        <div>
            <h4>{title.toUpperCase()}</h4>
        </div>
    </div>
);

export default MenuCategory;