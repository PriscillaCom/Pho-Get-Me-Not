import React from 'react';

import './CheckoutForm.css';

import ShopContext from '../../context/ShopContext';

const CheckoutForm = () => {
    return(
    <ShopContext.Consumer>
        {context => (
            <div className="checkout-form-container">
                <div className='checkout-form'>
                    <form method='post'>
                        <label for='fname'>First Name: </label>
                        <input type='text' id='fname' name='firstname' placeholder='First Name' required></input>
                    
                        <label for="lname">Last Name: </label>
                        <input type="text" id="lname" name="lastname" placeholder="Last Name" required></input>
                
                        <label for="phone">Phone Number: </label>
                        <input type="tel" id="phone" name="phone" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required></input>
                        <small>Format: 123-456-7890</small>
                        <input type="submit" value='Continue Checkout'></input>
                    </form>
                </div>
               <div className='form-total'>
                   <p>Total</p>
                   <p>${context.handleTotal()}</p>
               </div>
            </div>
        )}
    </ShopContext.Consumer>
    
    );
};

export default CheckoutForm;