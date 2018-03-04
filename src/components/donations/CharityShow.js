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
          { type === 'charity' && <h5>CHARITY SHOW PAGE</h5>, <br />, <p>Displaying Charity User Current Location and Food Vendors nearby with food available for pickup</p> }


          <div className="col-md-6">
            <h4><strong> Profile</strong></h4>
            <h4> {this.state.user.firstname}</h4>
            <h4> {this.state.user.lastname}</h4>
            <h4> {this.state.user.username}</h4>
            <h4> {this.state.user.email}</h4>
            <h4> {this.state.user.address}</h4>
            <BackButton history={this.props.history} />
          </div>

          <div className="col-md-6">
            {this.state.user.location && this.state.donations.length &&
          <GoogleMap center={{lat: this.state.user.location[1], lng: this.state.user.location[0]}} donations={this.state.donations}/>}
          </div>


        </div>
      </div>
    );
  }
}

export default CharityShow;
