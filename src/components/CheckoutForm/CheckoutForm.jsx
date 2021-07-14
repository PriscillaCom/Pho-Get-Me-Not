import React from 'react';

import './CheckoutForm.css';

import {Link} from 'react-router-dom';

import ShopContext from '../../context/ShopContext';

class CheckoutForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            number: ''
        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onNumberChange = (event) => {
        this.setState({number: event.target.value})
    }

    onSubmit = () => {
        console.log('checkout');
        fetch('http://localhost:3000/checkout', {
            method: 'post',
            headers: {'Content-Type' : 'application/json', 'Accept' : 'application/json'},
            body: JSON.stringify({
                name: "Priscilla Moc",
                email: "taro_priscilla@yahoo.com",
                number: "626-416-8195"
            })
        })
        .then(response => response.json())
        .then(data => console.log('DATA', data));
 
    }

    render(){
        return(
            <ShopContext.Consumer>
                {context => (
                    <div className="checkout-form-container">
                        <div className='checkout-form'>
                            <form action="/checkout">
                                <label htmlFor='name'>Name: </label>
                                <input 
                                    type='text' 
                                    id='name' 
                                    name='name' 
                                    placeholder='Name' 
                                    onChange={this.onNameChange}
                                    required></input>
                            
                                <label htmlFor="email">Email: </label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    placeholder="Email"
                                    onChange={this.onEmailChange}
                                    required></input>

                                <label htmlFor="phone">Phone Number: </label>
                                <input 
                                    type="tel" 
                                    id="phone" 
                                    name="phone" 
                                    placeholder="123-456-7890" 
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                                    onChange={this.onNumberChange}
                                    required></input>
                                <small>Format: 123-456-7890</small>
                                <input 
                                    onClick={this.onSubmit} 
                                    type="submit" 
                                    value='Checkout'/>
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
    } 
};

export default CheckoutForm;