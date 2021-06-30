import React from 'react';
import './CheckoutPage.css';
import CheckoutPreview from '../../components/CheckoutPreview/CheckoutPreview';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';

const CheckoutPage = () => (
    <div className='checkout-container'>
        <CheckoutPreview/>

        <div className='checkout-total-price'>
            <CheckoutForm/>
        </div>
    </div> 
);

export default CheckoutPage;