
import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';



export const AppRouter = () => {

  const {user} = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <PrivateRoute 
            path="/" 
            component={ DashboardRoutes }
            isAuthenticated={user.logged}
            />
          
        </Switch>
      </div>
    </Router>
  )
}
