import React from 'react';
import Axios from 'axios';
import BackButton from '../utility/BackButton';
import Auth from '../../lib/Auth';
import GoogleMap from './GoogleMap';
import { Link } from 'react-router-dom';

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
          <div className="col-md-6 charityShowProfile">
            <h4><strong> My Profile</strong></h4>
            <img className="user" src="data:image/png;base64,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" />
            <h5> {this.state.user.firstname}</h5>
            <h4> {this.state.user.lastname}</h4>
            <h4> {this.state.user.username}</h4>
            <h4> {this.state.user.email}</h4>
            <h4> {this.state.user.address}</h4>
            <hr />
            <BackButton history={this.props.history} />
          </div>
          <div className="col-md-6">
            <img className="imageKey" src="https://i.imgur.com/3jt5Dfs.png" />
            {this.state.user.location && this.state.donations.length &&
          <GoogleMap center={{lat: this.state.user.location[1], lng: this.state.user.location[0]}} donations={this.state.donations}/>}
            <br />
            <ul className="vendorIcon">
              { this.state.donations.map((donation, i) =>

                <li key={i}>
                  <Link className="vendorImageClick" to={`/donations/${donation.id}`}>
                    <img src="https://cdn3.iconfinder.com/data/icons/living/24/249_eat_restaurant_dinner-32.png"/><strong>{ donation.address }</strong><br/>
                    <h6 className="foodDesc">{donation.description}</h6>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default CharityShow;
