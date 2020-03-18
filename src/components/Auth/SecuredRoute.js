import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Auth from '../Auth/Auth';

function SecuredRoute(props) {
  const {component: Component, path} = props;
  return (
    <Route path={path} render={() => {
        if (!Auth.isAuthenticated()) {
          return <Redirect to="/login" />;
        }
        return <Component />
    }} />
  );
}

export default SecuredRoute;