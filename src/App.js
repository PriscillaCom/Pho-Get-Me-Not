import './App.css';
import React from 'react';
import Homepage from './pages/Homepage/Homepage';
import Navigator from './components/Navigator/Navigator';

function App() {
  return (
    <div>
      <Navigator/>
      <Homepage/>
    </div>
  );
}

export default App;
