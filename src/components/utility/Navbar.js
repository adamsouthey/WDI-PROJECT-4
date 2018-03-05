import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Auth from '../../lib/Auth';

import { LinkContainer } from 'react-router-bootstrap';


const Navbar = ({ history }) => {
  function logout(e) {
    e.preventDefault();
    Auth.logout();
    history.push('/');
  }

  let type = null;
  if (Auth.getPayload()) type = Auth.getPayload().type;

  return(

    <section className="portfolio-experiment">
      <Link to='/'>
        <span className="text">Home</span>
        <span className="line -right"></span>
        <span className="line -top"></span>
        <span className="line -left"></span>
        <span className="line -bottom"></span>
      </Link>
      <Link to='/about'>
        <span className="text">About</span>
        <span className="line -right"></span>
        <span className="line -top"></span>
        <span className="line -left"></span>
        <span className="line -bottom"></span>
      </Link>
      <Link to='/contact'>
        <span className="text">Contact</span>
        <span className="line -right"></span>
        <span className="line -top"></span>
        <span className="line -left"></span>
        <span className="line -bottom"></span>
      </Link>
      {type === 'vendor' &&  <Link to='/donations'>
        <span className="text">Current Donations</span>
        <span className="line -right"></span>
        <span className="line -top"></span>
        <span className="line -left"></span>
        <span className="line -bottom"></span>
      </Link>}
      {type === 'charity' &&  <Link to={`/user/${Auth.getPayload().userId}`}>
        <span className="text">My Location</span>
        <span className="line -right"></span>
        <span className="line -top"></span>
        <span className="line -left"></span>
        <span className="line -bottom"></span>
      </Link>}
      {type === 'charity' &&  <Link to='/donations'>
        <span className="text">Current Donations</span>
        <span className="line -right"></span>
        <span className="line -top"></span>
        <span className="line -left"></span>
        <span className="line -bottom"></span>
      </Link>}


      <div className="navBarFloatRight">
        { !Auth.isAuthenticated() && <Link to="/register">
          <span className="text">Register</span>
          <span className="line -right"></span>
          <span className="line -top"></span>
          <span className="line -left"></span>
          <span className="line -bottom"></span>
        </Link> }


        { !Auth.isAuthenticated() && <Link to="/login">
          <span className="text">Login</span>
          <span className="line -right"></span>
          <span className="line -top"></span>
          <span className="line -left"></span>
          <span className="line -bottom"></span>
        </Link> }


        { Auth.isAuthenticated() && <Link to="#" onClick={logout}>
          <span className="text">Logout</span>
          <span className="line -right"></span>
          <span className="line -top"></span>
          <span className="line -left"></span>
          <span className="line -bottom"></span>
        </Link> }


      </div>



    </section>

  );

};

export default withRouter(Navbar);
