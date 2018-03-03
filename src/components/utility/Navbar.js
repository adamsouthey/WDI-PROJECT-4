import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Auth from '../../lib/Auth';


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
      <a>
        <Link to='/' className="text">Home</Link>
        <span className="line -right"></span>
        <span className="line -top"></span>
        <span className="line -left"></span>
        <span className="line -bottom"></span>
      </a>
      <a>
        <Link to='/about' className="text">About Us</Link>
        <span className="line -right"></span>
        <span className="line -top"></span>
        <span className="line -left"></span>
        <span className="line -bottom"></span>
      </a>

      <a>
        <Link to='/contact' className="text">Contact</Link>
        <span className="line -right"></span>
        <span className="line -top"></span>
        <span className="line -left"></span>
        <span className="line -bottom"></span>
      </a>
      <a>
        { type === 'vendor' &&  <Link to='/donations' className="text">Vendor Donations</Link> }
        <span className="line -right"></span>
        <span className="line -top"></span>
        <span className="line -left"></span>
        <span className="line -bottom"></span>
      </a>
      <a>
        { type === 'charity' &&  <Link to={`/user/${Auth.getPayload().userId}`} className="text"> My Location </Link>}
        <span className="line -right"></span>
        <span className="line -top"></span>
        <span className="line -left"></span>
        <span className="line -bottom"></span>
      </a>
      <a>
        { type === 'charity' &&  <Link to='/donations' className="text">Vendor Donations</Link> }
        <span className="line -right"></span>
        <span className="line -top"></span>
        <span className="line -left"></span>
        <span className="line -bottom"></span>
      </a>




<div className="navBarFloatRight">
      <a>
        { !Auth.isAuthenticated() && <Link to="/register" className="text">Register</Link> }
        <span className="line -right"></span>
        <span className="line -top"></span>
        <span className="line -left"></span>
        <span className="line -bottom"></span>
      </a>

      <a>
        { !Auth.isAuthenticated() && <Link to="/login" className="text">Login</Link> }
        <span className="line -right"></span>
        <span className="line -top"></span>
        <span className="line -left"></span>
        <span className="line -bottom"></span>
      </a>

      <a>
        { Auth.isAuthenticated() && <a href="#" className="text" onClick={logout}>Logout</a> }
        <span className="line -right"></span>
        <span className="line -top"></span>
        <span className="line -left"></span>
        <span className="line -bottom"></span>
      </a>
</div>


    </section>

  );

};

export default withRouter(Navbar);
