import React from 'react';
import Axios from 'axios';

import DonationsForm from './DonationsForm';

import Auth from '../../lib/Auth';

class DonationsNew extends React.Component {
  state = {
    donation: {
      company: '',
      contactname: '',
      image: '',
      address: '',
      telephone: '',
      category: '',
      description: '',
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
      location: [place.geometry.location.lng(), place.geometry.location.lat()]
    };
    const donation = Object.assign({}, this.state.donation, googleData);
    const errors = Object.assign({}, this.state.errors, { location: '', address: '' });
    this.setState({ donation, errors }, () => console.log('updated donation', this.state.donation));
  }

  handleChange = ({ target: { name, value } }) => {
    console.log('Address Populated', this.state.donation.address);
    console.log('Image Populated', this.state.donation.image);
    const donation = Object.assign({}, this.state.donation, { [name]: value });
    const errors = Object.assign({}, this.state.errors, { [name]: '' });
    this.setState({ donation, errors });
  }

  handleImageUpload = result => {
    const donation = Object.assign({}, this.state.donation, { image: result.filesUploaded[0].url});
    const errors = Object.assign({}, this.state.errors, { image: ''});
    this.setState({ donation, errors });
  }


  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .post('/api/donations', this.state.donation, { headers: { 'Authorization': `Bearer ${Auth.getToken()}`} })
      .then(() => this.props.history.push('/'))
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
        setLatLng={this.setLatLng}
      />
    );
  }
}

export default DonationsNew;
