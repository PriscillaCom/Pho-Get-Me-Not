import React from 'react';
import MENU_ITEMS_DATA from '../components/Directory/MENU_ITEMS_DATA';

import ShopContext from './ShopContext';

class MainState extends React.Component {
    state = {
        products: MENU_ITEMS_DATA,
        cart: [],
        cartHidden: true
      };
      
      toggleCart = () => (
        this.setState({cartHidden: !this.state.cartHidden})
      );

      addProductToCart = product => {
        console.log('Adding product', product, product.id);
        let updatedCart = [...this.state.cart];
    
        const UpdateItemIndex = updatedCart.findIndex(
          item => item.id === product.id
        )
        console.log('item index',UpdateItemIndex);
        if(UpdateItemIndex < 0){
          updatedCart.push({...product, quantity: 1});
        }
        else{
          const updatedItem = {
            ...updatedCart[UpdateItemIndex]
        };
    
        updatedItem.quantity++;
        updatedCart[UpdateItemIndex] = updatedItem;
        }
        this.setState({cart: updatedCart});
      };

      handleTotal = () => {
        let totalPrice = 0;
        this.state.cart.map(item => (
            totalPrice += item.price * item.quantity
        ));
        totalPrice = totalPrice.toFixed(2);
        return totalPrice;
      };
    
      removeProductFromCheckout = productId => {
        console.log('Removing product',productId);
        let updatedCart = [...this.state.cart];

        const toRemoveItemIndex = updatedCart.findIndex(
          item => item.id === productId
        );
        
        const toRemoveItem = {
          ...updatedCart[toRemoveItemIndex]
        }

        if(toRemoveItem.quantity > 1){
          toRemoveItem.quantity--;
          updatedCart[toRemoveItemIndex] = toRemoveItem;
          console.log(toRemoveItem.quantity);
        }
        else{
          updatedCart.splice(toRemoveItemIndex,1);
        }

        console.log('before:', this.state.cart);
        this.setState({cart: updatedCart});
    };

    addProductToCheckout = productId => {
      console.log('Adding product',productId);

      let updatedCart = [...this.state.cart];

      const toAddItemIndex = updatedCart.findIndex(item => item.id === productId);

      updatedCart[toAddItemIndex].quantity++;

      this.setState({cart: updatedCart});
    };
 
    render(){
        return <ShopContext.Provider value={{
            products: this.state.products, 
            cart: this.state.cart,
            cartHidden: this.state.cartHidden,
            toggleCart: this.toggleCart,
            addProductToCart: this.addProductToCart,
            removeProductFromCheckout: this.removeProductFromCheckout,
            addProductToCheckout: this.addProductToCheckout,
            handleTotal: this.handleTotal
          }}>
              {this.props.children}
            </ShopContext.Provider>
    }
}

export default MainState;