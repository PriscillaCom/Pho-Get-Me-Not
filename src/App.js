import './App.css';
import React from 'react';
import {Switch,Route} from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage';
import Navigator from './components/Navigator/Navigator';
import MenuPage from './pages/MenuPage/MenuPage';
import OrderPage from './pages/OrderPage/OrderPage';

function App() {
  return (
    <div>
      <Navigator/>
      <Switch>
        <Route exact path='/menu' component={MenuPage}/>
        <Route exact path='/order' component={OrderPage}/>
        <Route expact path='/' component={Homepage}/>
      </Switch>
    </div>
  );
}

export default App;
