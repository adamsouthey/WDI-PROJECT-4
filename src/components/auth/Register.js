import React from 'react';
import Axios from 'axios';

import RegisterForm from './RegisterForm';
import Auth from '../../lib/Auth';

class Register extends React.Component {

  state = {
    user: {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      type: '',
      address: '',
      location: {
        lat: '',
        lng: ''
      }
    },
    errors: {}
  };

  setLatLng = (place) => {
    console.log(place);
    const googleData = {
      address: place.formatted_address,
      location: place.geometry.location.toJSON()
    };
    const user = Object.assign({}, this.state.user, googleData);
    const errors = Object.assign({}, this.state.errors, { location: '', address: '' });
    this.setState({ user, errors }, () => console.log('updated user model', this.state.user));
  }

  handleChange = ({ target: { name, value }}) => {
    const user = Object.assign({}, this.state.user, { [name]: value });
    const errors = Object.assign({}, this.state.errors, { [name]: '' });
    this.setState({ user, errors });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    Axios
      .post('/api/register', this.state.user)
      .then(res => {

        Auth.setToken(res.data.token);

        this.state.user.type === 'charity' ?
          this.props.history.push(`/charity/${res.data.userId}`)
          :
          this.props.history.push('/donations');

      })
    // .catch(err => console.log('erroring when registering', err));
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }


  render() {
    return (
      <RegisterForm
        user={this.state.user}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        errors={this.state.errors}
        setLatLng={this.setLatLng}
        charityCheck={this.charityCheck}
      />
    );
  }
}

export default Register;
