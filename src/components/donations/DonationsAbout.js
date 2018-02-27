import React from 'react';
// import { Link } from 'react-router-dom';
// import Auth from '../../lib/Auth';

class DonationsAbout extends React.Component {
  state = {
    donations: []
  }


  render() {
    return (
      <div>
        <h2>About Us</h2>
        <br />
        <p> I would like to provide supermarkets, restaurants and cafes a platform to connect
          with local charities  to donate leftover food instead of just binning it.
          The food vendors would feel better
          about themselves and the homeless wouldnt be as hungry! Would need
          to do maps, messaging and maybe an index where the vendors can advertise
          what theyre willing to give away. Charities can then enquire and arrange
          a pick up or something like that.
        </p>

      </div>
    );
  }
}

export default DonationsAbout;
