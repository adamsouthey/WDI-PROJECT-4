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

  // componentDidMount(){
  //   marker.id = donation.id;
  //
  //   .addListener(marker, 'click', () => {
  //     this.props.history.push(`/donations/${marker.id}`);
  //   });
  // }


  render() {
    let type = null;
    if (Auth.getPayload()) type = Auth.getPayload().type;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 charityShowProfile">
            <h4><strong> User Profile</strong></h4>
            <h4> {this.state.user.firstname}</h4>
            <h4> {this.state.user.lastname}</h4>
            <h4> {this.state.user.username}</h4>
            <h4> {this.state.user.email}</h4>
            <h4> {this.state.user.address}</h4>
            <hr />
            <BackButton history={this.props.history} />
          </div>

          <div className="col-md-6">
            {this.state.user.location && this.state.donations.length &&
          <GoogleMap center={{lat: this.state.user.location[1], lng: this.state.user.location[0]}} donations={this.state.donations}/>}
            <ul className="vendorIcon">
              { this.state.donations.map((donation, i) =>

                <li key={i}>
                  <Link className="vendorImageClick" to={`/donations/${donation.id}`}>
                    <img src="https://cdn3.iconfinder.com/data/icons/living/24/249_eat_restaurant_dinner-32.png"/>{ donation.address }<br/>
                    <em>{donation.description}</em>
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
