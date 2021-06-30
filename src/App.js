import './App.css';
import React from 'react';
import {Switch,Route} from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage';
import Navigator from './components/Navigator/Navigator';
import MenuPage from './pages/MenuPage/MenuPage';
import OrderPage from './pages/OrderPage/OrderPage';
import LocationPage from './pages/LocationPage/LocationPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';

import MainState from './context/MainState';

class App extends React.Component {
  render(){
    return (
      <div>
      <MainState>
          <Navigator/>
          <Switch>
            <Route exact path='/menu' component={MenuPage}/>
            <Route exact path='/order' component={OrderPage}/>
            <Route exact path='/location' component={LocationPage}/>
            <Route exact path='/checkout' component={CheckoutPage}/>
            <Route exact path='/' component={Homepage}/>
          </Switch>
      </MainState>
      </div>
    );
  }
}

export default App;
