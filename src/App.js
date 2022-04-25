import React, { useContext } from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';


import HomePage from './pages/homepage/homepage.component';
import SkeletonProduct from './component/skeleton/skeletonProduct';
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
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/storefront' component={StoreFrontPage} />
        <Route path='/skeleton' component={SkeletonProduct} />
      </Switch>
    </div>

  )
}

export default App;