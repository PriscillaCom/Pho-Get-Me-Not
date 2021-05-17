import React from 'react';

import Logo from '../../assets/maneki-logo.png';

//temp
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './Navigator.css';

const Navigator = () => (
    <div className="navigator">
        <div className='logoContainer'>
            <img src={Logo} alt='Hello Cat Logo' className='logo'/>
        </div>
        <div className='optionsContainer'>
            <h1 className='options'>Home</h1>
            <h1 className='options'>Menu</h1>
            <h1 className='options'>Location</h1>
            <ShoppingIcon className='shoppingIcon'/>
        </div>
    </div>
);

export default Navigator;