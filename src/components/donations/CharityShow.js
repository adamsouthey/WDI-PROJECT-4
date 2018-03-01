import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import BackButton from '../utility/BackButton';
import Auth from '../../lib/Auth';
import GoogleMap from './GoogleMap';

class CharityShow extends React.Component {
  state = {
    user: {},
    id: this.props.match.params.id
  }

  componentWillMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  }

  deleteUser = () => {
    Axios
      .delete(`/api/users/${this.props.match.params.id}`, { headers: { 'Authorization': `Bearer ${Auth.getToken()}` }})
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  render() {
    // const type = Auth.getPayload().type;
    let type = null;

    if (Auth.getPayload()) type = Auth.getPayload().type;

    return (
      <div className="container">
        <div className="row">
          {this.state.user.location &&
            <GoogleMap center={this.state.user.location}/>}
          <div className="col-md-6">
            <h3> Company Name: {this.state.user.firstname}</h3>
            <h4> Contact Name: {this.state.user.lastname}</h4>
            <h4> Address: {this.state.user.username}</h4>
            <h4> Telephone: {this.state.user.email}</h4>
            <h4> Category: {this.state.user.address}</h4>
            <BackButton history={this.props.history} />
            { type === 'charity' && <p></p> }
            {' '}
            { type === 'charity' && <p>CHARITY GOOGLE MAP PAGE</p> }
            { type === 'charity' && <button className="main-button" onClick={this.deleteUser}>
              <i className="fa fa-trash" aria-hidden="true"></i>Delete
            </button> }
          </div>
        </div>
      </div>
    );
  }
}

export default CharityShow;
