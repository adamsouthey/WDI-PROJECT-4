import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import BackButton from '../utility/BackButton';
import Auth from '../../lib/Auth';

class DonationsIndex extends React.Component {
  state = {
    donations: [],
    currentUser: {}
  }

  componentWillMount() {
    Axios
      .get('/api/donations')
      .then(res => this.setState({ donations: res.data }))
      .catch(err => console.log(err));

    if (Auth.getPayload()) {
      Axios
        .get(`/api/users/${Auth.getPayload().userId}`)
        .then(res => this.setState({ currentUser: res.data }))
        .catch(err => console.log(err));
    }
  }

  render() {
    let type = null;

    if (Auth.getPayload()) type = Auth.getPayload().type;

    return (
      <div>
        <BackButton history={this.props.history} />
        <div className="row">
          <div className="page-banner col-md-12">
            {/* { Auth.isAuthenticated() && <Link to="/donations/new" className="main-button">
              <i className="fa fa-plus" aria-hidden="true"></i>Add Donation
            </Link>} */}
            { type === 'vendor' && <Link to="/donations/new" className="main-button">
              <i className="fa fa-plus" aria-hidden="true"></i>Add Donation
            </Link>}
            { type === 'charity' && <p></p>}
          </div>
          {this.state.donations.map(donation => {
            return(
              <div key={donation.id} className="image-tile col-md-4 col-sm-6 col-xs-12">
                <Link to={`/donations/${donation.id}`}>
                  <img src={donation.image} className="img-responsive" />
                  <h3>{donation.company}</h3>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default DonationsIndex;
