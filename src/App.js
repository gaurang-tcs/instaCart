import React, { useContext } from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import SideBar from './component/drawer/drawer.component';
import Header from './component/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import StoreFrontPage from './pages/store-frontpage/store-frontpage.component';
import Location from './component/location/location.component';
import { LocationContext } from './providers/location/location.provider';
const App = () => {
  const{hidden} = useContext(LocationContext)
  return (
    <div className='app'>
      <div className='location-box'>
        { hidden ? null : <Location />}
      </div>

      <div className="drawer-header">
        <SideBar />
        <Header />
      </div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/storefront' component={StoreFrontPage} />
      </Switch>
    </div>

  )
}

export default App;