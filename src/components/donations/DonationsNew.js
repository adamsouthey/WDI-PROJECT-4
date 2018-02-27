import React from 'react';
import Axios from 'axios';

import DonationsForm from './DonationsForm';

import Auth from '../../lib/Auth';

class DonationsNew extends React.Component {
  state = {
    donation: {
      organisation: '',
      contactname: '',
      image: '',
      address: '',
      city: '',
      postcode: '',
      telephone: '',
      category: '',
      description: ''
    },
    errors: {}
  };

  handleChange = ({ target: { name, value } }) => {
    const donation = Object.assign({}, this.state.donation, { [name]: value });
    this.setState({ donation });
  }

  handleImageUpload = result => {
    const donation = Object.assign({}, this.state.donation, { image: result.filesUploaded[0].url});
    // const errors = Object.assign({}, this.state.errors, { image: ''});
    this.setState({ donation });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .post('/api/donations', this.state.donation, { headers: { 'Authorization': `Bearer ${Auth.getToken()}`} })
      .then(() => this.props.history.push('/'))
      // .catch(err => console.log(err.response.data.errors));
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  render() {
    return (
      <DonationsForm
        history={this.props.history}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleImageUpload={this.handleImageUpload}
        donation={this.state.donation}
        errors={this.state.errors}
      />
    );
  }
}

export default DonationsNew;
