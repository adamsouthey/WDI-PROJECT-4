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
      <div className="container">
        {/* <BackButton history={this.props.history} /> */}
        <br />
        <div className="row">
          <div className="page-banner col-md-12">
            {type === 'vendor' &&   <h5> If you would like to make a donation, please click the button below and fill out the donation form.
                If you would like to search for existing donations, please find them below. </h5> }
            {type === 'charity' &&   <h5> Please find existing donations made by food vendors below </h5> }

              <hr />
            { type === 'vendor' && <Link to="/donations/new" className="main-button">
            <button className="main-button">
              <i className="fa fa-plus" aria-hidden="true"></i>AddDonation
            </button>
            </Link>}
          <br />
          </div>
          <br />
          <hr / >
          {this.state.donations.map(donation => {
            return(
              <div key={donation.id} className="image-tile col-md-4 col-sm-6 col-xs-12">
                <Link to={`/donations/${donation.id}`}>
                  <img src={donation.image} className="img-responsive" />
                  <h4>{donation.company}</h4>
                  <h5>{donation.contactname}</h5>

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
