import React from 'react';

import coverPhoto from '../../assets/pho5.jpg';
import Directory from '../../components/Directory/Directory';

import './Homepage.css';

const Homepage = () => (
    <div className="homepage">
        <img className='cover' src={coverPhoto} alt="" />
        <Directory/>
    </div>
);

export default Homepage;