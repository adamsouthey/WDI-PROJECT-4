import React from 'react';
import Axios from 'axios';
import BackButton from '../utility/BackButton';
import Auth from '../../lib/Auth';
import GoogleMap from './GoogleMap';

class CharityShow extends React.Component {
  state = {
    user: {},
    donations: [],
    id: this.props.match.params.id
  }

  componentWillMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ user: res.data });

        return Axios.get(`/api/donations?lat=${res.data.location[1]}&lng=${res.data.location[0]}`);
      })
      .then(res => {
        this.setState({ donations: res.data });
      })
      .catch(err => console.log(err));
  }

  deleteUser = () => {
    Axios
      .delete(`/api/users/${this.props.match.params.id}`, { headers: { 'Authorization': `Bearer ${Auth.getToken()}` }})
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  render() {
    let type = null;

    if (Auth.getPayload()) type = Auth.getPayload().type;

    return (
      <div className="container">
        <div className="row">
          { type === 'charity' && <h5>CHARITY SHOW PAGE</h5>, <br />, <p>Displaying Your Current Location and Food Vendors nearby with food available for pickup</p> }
          {this.state.user.location && this.state.donations.length &&
          <GoogleMap center={{lat: this.state.user.location[1], lng: this.state.user.location[0]}} donations={this.state.donations}/>}


          {/* {this.state.donations.location &&
            <GoogleMap center={{lat: this.state.donations.location[1], lng: this.state.donations.location[0]}}/>} */}


          {/* {this.state.donations.map(donation => {
            return(
              <div key={donation.location} className="image-tile col-md-4 col-sm-6 col-xs-12">
                <GoogleMap center={{lat: this.state.donations.location[1], lng: this.state.donations.location[0]}}>
                </GoogleMap>
              </div>

            );
          })} */}


          <div className="col-md-6">
            <h3> First Name: {this.state.user.firstname}</h3>
            <h4> Last Name: {this.state.user.lastname}</h4>
            <h4> Username: {this.state.user.username}</h4>
            <h4> Email: {this.state.user.email}</h4>
            <h4> Address: {this.state.user.address}</h4>
            <BackButton history={this.props.history} />


          </div>
        </div>
      </div>
    );
  }
}

export default CharityShow;
