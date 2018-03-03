import React from 'react';
import Auth from '../../lib/Auth';
import GoogleAutocomplete from '../donations/GoogleAutocomplete';
import { Link } from 'react-router-dom';

const RegisterForm = ({ handleChange, handleSubmit, user, errors, setLatLng }) => {

  let type = null;
  if (Auth.getPayload()) type = Auth.getPayload().type;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            onChange={handleChange}
            value={user.firstname}
            className="form-control"
          />
          {errors.firstname && <small>{errors.firstname}</small>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            onChange={handleChange}
            value={user.lastname}
            className="form-control"
          />
          {errors.lastname && <small>{errors.lastname}</small>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={user.username}
            className="form-control"
          />
          {errors.username && <small>{errors.username}</small>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={user.email}
            className="form-control"
          />
          {errors.email && <small>{errors.email}</small>}
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
          {errors.password && <small>{errors.password}</small>}
        </div>
        <div className="form-group">
          <input
            type="password"
            name="passwordConfirmation"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={user.passwordConfirmation}
            className="form-control"
          />
          {errors.passwordConfirmation && <small>{errors.passwordConfirmation}</small>}
        </div>


        <div className="form-group">
          <select
            name="type"
            onChange={handleChange}
            value={user.type}
            className="form-control"
          >
            <option disabled value="">Choose from the following options</option>
            <option value="charity">I am representing a charity</option>
            <option value="vendor">I am representing a food distributor looking to donate my food</option>
          </select>

          {errors.type && <p className="error"><small>{errors.type}</small></p>}
        </div>
        {user.type === 'charity' && [
          <GoogleAutocomplete setLatLng={setLatLng} key={1} className="form-group"/>,
          <div className="hiddenAddress" key={2}>
            <div className="form-group">
              <label htmlFor="address"></label>
              <input
                type="text"
                readOnly="readonly"
                className="form-control"
                id="address"
                name="address"
                value={user.address}
                onChange={handleChange}
              />
              {errors.address && <p className="error"><small>{errors.address}</small></p>}
            </div>
          </div>
        ]}
        <hr />


        <button className="main-button">Register</button>
      </form>
      <br />
      <div className="signUpLoginMessage">
        <p className="form-group"> Already signed up? <span><Link to="/login"><strong>Login Here</strong></Link></span> </p>
      </div>

    </div>


  );
};

export default RegisterForm;
