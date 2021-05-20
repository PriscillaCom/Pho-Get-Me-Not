import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import MenuItems from '../MenuItems/MenuItems.jsx'
import './MenuPreview.css';

const MenuPreview = ({title, food}) => {
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
    <div className='menu_preview'>
        <h1 id={title}>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                food.map(({id,...otherProps}) => (
                    <MenuItems key={id} {...otherProps} />
                ))
            }
        </div>
    </div>
    );
};

export default MenuPreview