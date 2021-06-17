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
    
      removeProductFromCart = productID => {
        console.log('Removing product',productID);
      };

    render(){
        return <ShopContext.Provider value={{
            products: this.state.products, 
            cart: this.state.cart,
            cartHidden: this.state.cartHidden,
            toggleCart: this.toggleCart,
            addProductToCart: this.addProductToCart,
            removeProductFromCart: this.removeProductFromCart
          }}>
              {this.props.children};
            </ShopContext.Provider>
    }
}

export default MainState;