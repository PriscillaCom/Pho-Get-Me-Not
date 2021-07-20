import React from 'react';

import successPhoto from '../../assets/success.jpg';
import {useHistory} from 'react-router';

import './SuccessPage.css';

const SuccessPage = () => {
    const history = useHistory();
    const returnHome = () => {
        history.push('/');
        window.location.reload(false)
    }

    return(
        <div className='success-page'>
            <img className='success-img' src={successPhoto} alt='fireworks'/>
            <h1 className='success-detail'>Your order has been successfully placed!</h1>
            <input type='button' onClick={returnHome} className='success-button' value='Return Home'/> 
        </div>
    );
}

export default SuccessPage;