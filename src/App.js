import React from 'react';
import {Route} from 'react-router-dom';

import { Layout } from 'element-react'

import Home from './components/Home'
import Callback from './components/Auth/Callback';
import Login from './components/Auth/Login'
import SecuredRoute from './components/Auth/SecuredRoute'

function App() {
  return (
    <Layout.Row className="full-viewport-height" type="flex" align="middle" justify="center">
      <Route exact path='/callback' component={Callback}/>
      <Route exact path='/login' component={Login}/>
      <SecuredRoute exact path='/' component={Home} />
    </Layout.Row>
  );
}

export default App;
