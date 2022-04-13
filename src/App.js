import React from 'react';
import './App.css';

//import { Route, Switch } from 'react-router-dom';

import SideBar from './component/drawer/drawer.component';
import Header from './component/header/header.component';
import HomePage from './pages/homepage/homepage.component';

const App = () => {
  return (
    <div className='app'>
      <div className="drawer-header">
        <SideBar />
        <Header />
      </div>
    
      <HomePage />
    </div>

  )
}

export default App;