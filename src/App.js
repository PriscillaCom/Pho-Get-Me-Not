import './App.css';
import React from 'react';
import {Switch,Route} from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage';
import Navigator from './components/Navigator/Navigator';
import MenuPage from './pages/MenuPage/MenuPage';
import OrderPage from './pages/OrderPage/OrderPage';
import LocationPage from './pages/LocationPage/LocationPage';

import MENU_ITEMS_DATA from './components/Directory/MENU_ITEMS_DATA';
import ShopContext from './context/ShopContext';

class App extends React.Component {
  state = {
    products: MENU_ITEMS_DATA,
    cart: []
  };

  addProductToCart = product => {
    console.log('Adding product', product);
  };

  removeProductFromCart = productID => {
    console.log('Removing product',productID);
  };

  render(){
    return (
      <div>
        <ShopContext.Provider value={{
          products: this.state.products, 
          cart: this.state.cart,
          addProductToCart: this.addProductToCart,
          removeProductFromCart: this.removeProductFromCart
        }}>
          <Navigator/>
          <Switch>
            <Route exact path='/menu' component={MenuPage}/>
            <Route exact path='/order' component={OrderPage}/>
            <Route exact path='/location' component={LocationPage}/>
            <Route expact path='/' component={Homepage}/>
          </Switch>
        </ShopContext.Provider>
      </div>
    );
  }
}

export default App;
