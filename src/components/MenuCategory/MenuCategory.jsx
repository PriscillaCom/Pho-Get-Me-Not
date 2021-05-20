import React from 'react';
import {Link} from 'react-router-dom';
import './MenuCategory.css';

const MenuCategory= ({title,imageUrl}) => {
    return(
    <div className="menuCategory">
        <div>
            <img className='image' src={imageUrl} alt='food'/>
        </div>
        <div>
            <Link to={`/menu/#${title}`}>{title.toUpperCase()} </Link>
        </div>
    </div>
    );
};

export default MenuCategory;