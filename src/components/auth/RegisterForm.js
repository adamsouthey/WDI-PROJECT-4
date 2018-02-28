import React from 'react';

const RegisterForm = ({ handleChange, handleSubmit, user, errors }) => {
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
        >
          <option disabled selected>Please select</option>
          <option value="charity">Charity</option>
          <option value="vendor">Vendor</option>
        </select>

        {errors.passwordConfirmation && <small>{errors.passwordConfirmation}</small>}
      </div>

      <button className="main-button">Register</button>
    </form>
  );
};

export default RegisterForm;
