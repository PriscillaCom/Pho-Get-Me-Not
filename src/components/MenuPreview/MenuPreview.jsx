import React from 'react';
import MenuItems from '../MenuItems/MenuItems.jsx'
import './MenuPreview.css';

const MenuPreview = ({title, food}) => (
    <div className='menu_preview'>
        <h1>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                food.map(({id,...otherProps}) => (
                    <MenuItems key={id} {...otherProps} />
                ))
            }
        </div>
    </div>
);

export default MenuPreview