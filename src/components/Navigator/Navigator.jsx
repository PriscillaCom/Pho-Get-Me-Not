import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../../assets/maneki-logo.png';

//temp
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './Navigator.css';

const Navigator = () => (
    <div className="navigator">
        <div className='logoContainer'>
            <Link to="/">
            <img src={Logo} alt='Hello Cat Logo' className='logo'/>
            </Link>
        </div>
        <div className='optionsContainer'>
            <Link to="/" className='options'>Home</Link>
            <Link to="/menu" className='options'>Menu</Link>
            <Link to="/order" className='options'>Order Now</Link>
            <h1 className='options'>Location</h1>
            <ShoppingIcon className='shoppingIcon'/>
        </div>
    </div>
);

export default Navigator;