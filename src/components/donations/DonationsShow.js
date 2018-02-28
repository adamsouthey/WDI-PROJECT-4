import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import BackButton from '../utility/BackButton';
import Auth from '../../lib/Auth';
import GoogleMap from './GoogleMap';

class DonationsShow extends React.Component {
  state = {
    donation: {},
    id: this.props.match.params.id
  }

  componentWillMount() {
    Axios
      .get(`/api/donations/${this.props.match.params.id}`)
      .then(res => this.setState({ donation: res.data }))
      .catch(err => console.log(err));
  }

  deleteDonation = () => {
    Axios
      .delete(`/api/donations/${this.props.match.params.id}`, { headers: { 'Authorization': `Bearer ${Auth.getToken()}` }})
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="row">
        <div className="image-tile col-md-6">
          <img src={this.state.donation.image} className="img-responsive" />
        </div>
        {this.state.donation.location &&
          <GoogleMap center={this.state.donation.location}/>}
        <div className="col-md-6">
          <h3> Company Name: {this.state.donation.company}</h3>
          <h4> Contact Name: {this.state.donation.contactname}</h4>
          <h4> Address: {this.state.donation.address}</h4>
          <h4>Telephone: {this.state.donation.telephone}</h4>
          <h4> Category: {this.state.donation.category}</h4>
          <em>Description: {this.state.donation.description}</em>
          <BackButton history={this.props.history} />
          { Auth.isAuthenticated() && <Link to={`/donations/${this.state.donation.id}/edit`} className="standard-button">
            <i className="fa fa-pencil" aria-hidden="true"></i>Edit
          </Link> }
          {' '}
          { Auth.isAuthenticated() && <button className="main-button" onClick={this.deleteDonation}>
            <i className="fa fa-trash" aria-hidden="true"></i>Delete
          </button> }
        </div>
      </div>
    );
  }
}

export default DonationsShow;
