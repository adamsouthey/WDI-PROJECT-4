import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Auth from '../../lib/Auth';

const Navbar = ({ history }) => {
  function logout(e) {
    e.preventDefault();
    Auth.logout();
    history.push('/');
  }

  return(
    <nav>
      <Link to="/" className="standard-button"> Home </Link>
      <Link to="/about" className="standard-button">About</Link>
      <Link to="/contact" className="standard-button">Contact</Link>
      { !Auth.isAuthenticated() && <Link to="/login" className="standard-button">Login</Link>}
      {' '}
      { !Auth.isAuthenticated() && <Link to="/register" className="standard-button">Register</Link> }
      {' '}
      {/* { Auth.isAuthenticated() && <Link to={`/user/${Auth.getPayload().userId}`}>Profile</Link>}
      <Route path="/users/:userId" component={UserShow} /> */}
      {' '}
      { Auth.isAuthenticated() && <a href="#" className="standard-button" onClick={logout}>Logout</a> }
    </nav>
  );
};

export default withRouter(Navbar);
