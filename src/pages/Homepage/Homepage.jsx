import React from 'react';

import coverPhoto from '../../assets/pho5.jpg';

import './Homepage.css';

const Homepage = () => (
    <div className="homepage">
        <img className='cover' src={coverPhoto} alt="" />
    </div>
);

export default Homepage;