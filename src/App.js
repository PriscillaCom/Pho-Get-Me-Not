import './App.css';
import React from 'react';
import Homepage from './pages/Homepage/Homepage';
import Navigator from './components/Navigator/Navigator';
import MenuPage from './pages/MenuPage/MenuPage';

function App() {
  return (
    <div>
      <Navigator/>
      <Homepage/>
      <MenuPage/>
    </div>
  );
}

export default App;
