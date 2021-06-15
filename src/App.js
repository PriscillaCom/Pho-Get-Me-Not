import './App.css';
import React, { useState, createContext } from 'react';
import {Switch,Route} from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage';
import Navigator from './components/Navigator/Navigator';
import MenuPage from './pages/MenuPage/MenuPage';
import OrderPage from './pages/OrderPage/OrderPage';
import LocationPage from './pages/LocationPage/LocationPage';

export const OrderContext = createContext();

function App() {
  const [order, setOrder] = useState(0);

  return (
    <div>
      <OrderContext.Provider value={{order,setOrder}}>
        <Navigator/>
        <Switch>
          <Route exact path='/menu' component={MenuPage}/>
          <Route exact path='/order' component={OrderPage}/>
          <Route exact path='/location' component={LocationPage}/>
          <Route expact path='/' component={Homepage}/>
        </Switch>
      </OrderContext.Provider>
    </div>
  );
}

export default App;
