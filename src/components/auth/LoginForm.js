import React from 'react';

const LoginForm = ({ handleChange, handleSubmit, user, errors }) => {
  return (
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
        {errors.message && <small>{errors.message}</small>}
      </div>
      <button className="main-button">Login</button>
    </form>

  );
};

export default LoginForm;
