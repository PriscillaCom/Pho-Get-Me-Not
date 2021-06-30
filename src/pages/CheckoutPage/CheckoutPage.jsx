import React from 'react';
import './CheckoutPage.css';
import CheckoutPreview from '../../components/CheckoutPreview/CheckoutPreview';

const CheckoutPage = () => (
    <div className='checkout-container'>
        <CheckoutPreview/>

        <div className='checkout-total-price'>
            <h3>price</h3>
        </div>
    </div> 
);

export default CheckoutPage;