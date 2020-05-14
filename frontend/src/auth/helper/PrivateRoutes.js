import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { isAuthenticated} from './index'

function PrivateRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated() ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/signin",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
  

  export default PrivateRoute