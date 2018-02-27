import React from 'react';
import Axios from 'axios';
import DonationsForm from './DonationsForm';
import Auth from '../../lib/Auth';

class DonationsEdit extends React.Component {
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
      description: '',
      lat: '',
      lng: ''
    },
    errors: {}
  };

  componentDidMount() {
    Axios
      .get(`/api/donations/${this.props.match.params.id}`)
      .then(res => this.setState({ donation: res.data }))
      .catch(err => console.log(err));
  }
  
  setLatLng = (place) => {
    console.log(place);
    const googleData = {
      address: place.formatted_address,
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng()
    };

    const donation = Object.assign({}, this.state.donation, googleData);
    this.setState({ donation }, () => console.log(this.state.donation));
  }

  handleChange = ({ target: { name, value } }) => {
    const donation = Object.assign({}, this.state.donation, { [name]: value });
    this.setState({ donation });
  }

  handleImageUpload = result => {
    const donation = Object.assign({}, this.state.donation, { image: result.filesUploaded[0].url});
    this.setState({ donation });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .put(`/api/donations/${this.props.match.params.id}`, this.state.donation, { headers: { 'Authorization': `Bearer ${Auth.getToken()}` } })
      .then(res => this.props.history.push(`/donations/${res.data.id}`))
      .catch(err => console.log('ERRORING HERE', err));
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

export default DonationsEdit;
