import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import NewAppointment from './user/pages/NewAppointment';

import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Dashboard from './user/pages/Dashboard';
import Appointment from './user/pages/Appointment';
import Department from './user/pages/Department';
import Entertainment from './user/pages/Entertainment';
import Auth from './user/pages/Auth';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AuthContext } from './shared/context/auth-context';
import { useAuth } from './shared/hooks/auth-hook';

const App = props => {
  const { token, login, logout, userId } = useAuth();

  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Route path="/appointment/new" exact>
          <NewAppointment />
        </Route>
        <Route path="/:userId/dashboard" exact>
          <Dashboard />
        </Route>
        <Route path="/:userId/account" exact>
        </Route>
        <Route path="/department" exact>
          <Department />
        </Route>
        <Route path="/:userId/appointments" exact>
          <Appointment />

        </Route>
        <Route path="/entertainment" exact>
          <Entertainment />
        </Route>
        <Route path="/places/:placeId">
          <UpdatePlace />
        </Route>


        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout
      }}
    >
      <Router>
        <MainNavigation />
        {routes}
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
