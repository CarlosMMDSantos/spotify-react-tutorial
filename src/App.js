import React from 'react';
import { Switch , Route } from 'react-router-dom';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import HomePage from './components/Pages/HomePage'
import Callback from './components/Auth/Callback';
import Login from './components/Auth/Login'
import SecuredRoute from './components/Auth/SecuredRoute'

import rootStore from './store/index'

const store = createStore(
  rootStore,
  applyMiddleware(thunk)
)

function App() {
  return (
    <Provider store={store}>
      <div className="full-viewport-height full-width">
        <Switch>
          <Route exact path='/callback' component={Callback}/>
          <Route exact path='/login' component={Login}/>
          <SecuredRoute path='/' component={HomePage} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
