import React from 'react';
import Auth from '../../lib/Auth';
import GoogleAutocomplete from '../donations/GoogleAutocomplete';

const RegisterForm = ({ handleChange, handleSubmit, user, errors, setLatLng, charityCheck }) => {

  let type = null;
  let hiddenAddress = null;
  if (Auth.getPayload()) type = Auth.getPayload().type;

  return (
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
        >
          <option disabled value="">Please select</option>
          <option value="charity">Charity</option>
          <option value="vendor">Vendor</option>
        </select>
      </div>
      {errors.type && <small>{errors.type}</small>}

      {user.type === 'charity' && [
        <GoogleAutocomplete setLatLng={setLatLng} key={1}/>,
        <div className="hiddenAddress" key={2}>
          <div className="form-group">
            <label htmlFor="address">Address</label>
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


      <button className="main-button">Register</button>
    </form>
  );
};

export default RegisterForm;
