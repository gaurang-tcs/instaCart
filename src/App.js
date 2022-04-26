import React, { useContext } from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import SkeletonProduct from './component/skeleton/skeletonProduct';
import StoreFrontPage from './pages/store-frontpage/store-frontpage.component';
import LogIn from './component/login/login.component';
import Location from './component/location/location.component';
import SignUp from './component/sign-up/signup.component';

import { LocationContext } from './providers/location/location.provider';
import { LogInContext } from './providers/login/login.provider';
import { SignUpContext } from './providers/signup/signup.provider';

const App = () => {

  const { lochidden } = useContext(LocationContext)
  const { logInHidden } = useContext(LogInContext)
  const { signUpHidden } = useContext(SignUpContext);

  return (
    <div className='app'>
     { signUpHidden ? null : <SignUp /> }
     { logInHidden ? null : <LogIn /> }
      <div className='location-box'>
        { lochidden ? null : <Location /> }
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