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
    // <nav>
    //   <Link to="/" className="standard-button"> Home </Link>
    //   { type === 'vendor' && <Link to="/donations" className="standard-button"> Vendor Donations </Link> }
    //
    //   { type === 'charity' &&  <Link to={`/user/${Auth.getPayload().userId}`} className="standard-button"> My Location </Link>}
    //
    //   { type === 'charity' && <Link to="/donations" className="standard-button"> Vendor Donations </Link> }
    //
    //
    //   <Link to="/about" className="standard-button">About</Link>
    //   <Link to="/contact" className="standard-button">Contact</Link>
    //   { !Auth.isAuthenticated() && <Link to="/register" className="standard-button">Register</Link> }
    //   {' '}
    //   { !Auth.isAuthenticated() && <Link to="/login" className="standard-button">Login</Link>}
    //   {' '}
    //   { Auth.isAuthenticated() && <a href="#" className="standard-button" onClick={logout}>Logout</a> }
    //
    // </nav>

    <section className="portfolio-experiment">
      <a>
        <Link to='/' className="text">Home</Link>
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

      <a>
        <Link to='/about' className="text">About</Link>
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


    </section>

  );

};

export default withRouter(Navbar);
