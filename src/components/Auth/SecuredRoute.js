import React from 'react';
import { useSelector } from "react-redux";
import {Route, Redirect} from 'react-router-dom';

function SecuredRoute(props) {
  const expiresAt = useSelector(state => {
    return state.authReducer.expiresAt
  })

  const {component: Component, path} = props;

  return (
    <Route path={path} render={() => {
        if ( !expiresAt || new Date().getTime() >= expiresAt ) {
          return <Redirect to="/login" />;
        }
        return <Component />
    }} />
  );
}

export default SecuredRoute;