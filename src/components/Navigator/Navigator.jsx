import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../../assets/maneki-logo.png';
import CartIcon from '../CartIcon/CartIcon';

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
            <Link to='/location' className='options'>Location</Link>
            <CartIcon/>
        </div>
    </div>
);

export default Navigator;