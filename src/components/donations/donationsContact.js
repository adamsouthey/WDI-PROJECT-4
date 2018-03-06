import React from 'react';


class DonationsContact extends React.Component {
  state = {
    donations: []
  }

  render() {
    return (

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3>Our Mission</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <p>Uneaten matters connects charities with food retailers so surplus food can be shared
              with those less fortunate, and not thrown away.
              This could be food nearing its sell-by date in local stores, spare home-grown vegetables or unsold food.
            </p>
          </div>

          <div className="col-md-6">
            <strong><h4> WRAP estimates that 1.9m tons of food is wasted by the food industry every year in the UK alone.
            </h4></strong>
          </div>
        </div>
        <hr />


        <div className="row">
          <div className="col-md-12">
            <h3></h3>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <p>
              If you wish to advertise your donation, please visit the donations page and submit
              your donation. If you are representing a charity and wish to connect with a local food
              vendor please search for suitable matches on the main donations page.
            </p>
          </div>
          <div className="col-md-6">
            <strong><h4> It is claimed that at least 400,000 tons of this could be redistributed to those in need.</h4></strong>
          </div>
        </div>
      </div>
    );
  }
}

export default DonationsContact;
