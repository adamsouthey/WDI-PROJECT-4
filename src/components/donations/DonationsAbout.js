import React from 'react';


class DonationsAbout extends React.Component {
  state = {
    donations: []
  }

  render() {
    return (
      <div>

        <div className="container">
          <div className="container vertical-divider">
            <div className="column two-thirds">
              <h3>Our Mission</h3>
            </div>
          </div>
          <div className="container vertical-divider">
            <div className="column two-thirds">
              <p>Uneaten matters connects charities with food retailers so surplus food can be shared
                with those less fortunate, and not thrown away.
                This could be food nearing its sell-by date in local stores, spare home-grown vegetables or unsold food.</p>
                <br />
                <p>
                  <br />
                  If you wish to advertise your donation, please visit the donations page and submit
                  your donation. If you are representing a charity and wish to connect with a local food
                  vendor please search for suitable matches on the main donations page.
                </p>
              </div>
              <div className="column one-third">
                <h4> WRAP estimates that 1.9m tons of food is wasted by the food industry every year in the UK alone.
                  <hr />
                  It is claimed that at least 400,000 tons of this could be redistributed to those in need.
                </h4>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  export default DonationsAbout;
