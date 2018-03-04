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

    let type = null;

    if (Auth.getPayload()) type = Auth.getPayload().type;

    return (
      <div className="container">
        <div className="mapAndImageShow">
          <div className="row">
            <div className="col-md-6">
              <img src={this.state.donation.image} className="imageShow" />
            </div>
            <div className="col-md-6">
              {this.state.donation.location &&
                <GoogleMap  center={{lat: this.state.donation.location[1], lng: this.state.donation.location[0]}}/>}
              </div>

              <div className="row">
                <div className="col-md-6">
                  <h3>{this.state.donation.company}</h3>
                  <h4>{this.state.donation.contactname}</h4>
                  <h4>{this.state.donation.address}</h4>
                  <h4>{this.state.donation.telephone}</h4>
                  <h4>{this.state.donation.category}</h4>
                  <em>{this.state.donation.description}</em>
                </div>

                <div className="col-md-6 buttonShow">
                    <BackButton history={this.props.history} />
                    <br />
                  { type === 'vendor' &&  <Link to={`/donations/${this.state.donation.id}/edit`} className="main-button">
                  <button className="main-button">
                    <i className="fa fa-pencil" aria-hidden="true"></i>Edit
                  </button>
                  </Link> }
                    <br />
                  { type === 'charity' && <p></p> }
                  { type === 'vendor' && <button className="main-button" onClick={this.deleteDonation}>
                    <i className="fa fa-trash" aria-hidden="true"></i>Delete
                  </button> }
                  { type === 'charity' && <p></p> }


              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DonationsShow;
