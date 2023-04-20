import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../context/auth-context';

const GamesRoutes = props => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      {auth.isLoggedIn && (
      <li>
        <NavLink to="/" exact>
          ALL USERS
        </NavLink>
      </li>
      )}
    
      {auth.isLoggedIn && (
      <li>
        <NavLink to="/department">DEPARTMENT</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
      <li>
          <NavLink to={`/${auth.userId}/appointments`}>MY APPOINTMENT</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
      <li>
        <NavLink to="/entertainment">ENTERTAINMENT</NavLink>
        </li>
        )}
      {/* {auth.isLoggedIn && (
        <li>
          <NavLink to={`/${auth.userId}/places`}>MY PLACES</NavLink>
        </li>
      )} */}
      {/* {auth.isLoggedIn && (
        <li>
          <NavLink to="/places/new">ADD PLACE</NavLink>
        </li>
      )} */}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/appointment/new">ADD appt</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">Login / Register</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>LOGOUT</button>
        </li>
      )}
    </ul>
  );
};

export default GamesRoutes;
