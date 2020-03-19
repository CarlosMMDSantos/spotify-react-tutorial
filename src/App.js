import React from 'react';
import {Route} from 'react-router-dom';

import Home from './components/Home'
import Callback from './components/Auth/Callback';
import Login from './components/Auth/Login'
import SecuredRoute from './components/Auth/SecuredRoute'

function App() {
  return (
    <div className="full-viewport-height full-width">
      <Route exact path='/callback' component={Callback}/>
      <Route exact path='/login' component={Login}/>
      <SecuredRoute exact path='/' component={Home} />
    </div>
  );
}

export default App;
