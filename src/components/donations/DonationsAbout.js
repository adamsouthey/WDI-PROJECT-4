import React from 'react';
// import { Link } from 'react-router-dom';
// import Auth from '../../lib/Auth';

class DonationsAbout extends React.Component {
  state = {
    donations: []
  }


  render() {
    return (
      <div className="container">
        <h2>ABOUT US</h2>
        <br />
        <p> I would like to provide supermarkets, restaurants and cafes a platform to connect
          with local charities  to donate leftover food at the end of each working day.
        </p>

      </div>
    );
  }
}

export default DonationsAbout;
