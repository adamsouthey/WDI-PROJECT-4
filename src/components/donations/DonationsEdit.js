import React from 'react';
import Axios from 'axios';
import DonationsForm from './DonationsForm';
import Auth from '../../lib/Auth';

class DonationsEdit extends React.Component {
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

  componentDidMount() {
    Axios
      .get(`/api/donations/${this.props.match.params.id}`)
      .then(res => this.setState({ donation: res.data }))
      .catch(err => console.log(err));
  }

  setLatLng = (place) => {
    console.log(place);
    console.log('location log', place.geometry.location.toJSON());
    const googleData = {
      address: place.formatted_address,
      location: [place.geometry.location.lng(), place.geometry.location.lat()]
    };

    const donation = Object.assign({}, this.state.donation, googleData);
    this.setState({ donation }, () => console.log(this.state.donation));
  }

  handleChange = ({ target: { name, value } }) => {
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
