import React from 'react';
import { Link } from 'react-router-dom';



const LoginForm = ({ handleChange, handleSubmit, user, errors }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={user.email}
            className="form-control"
          />

        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={user.password}
            className="form-control"
          />
          {errors.message && <p className="error"><small>{errors.message}</small></p>}
        </div>
        <hr />
        <button className="main-button">Login</button>
      </form>
      <br />
      <div className="signUpLoginMessage">
        <p className="form-group"> New to Uneaten Matters? <span><Link to="/register"><strong>Register Here</strong></Link></span> </p>
      </div>
    </div>

  );
};

export default LoginForm;
