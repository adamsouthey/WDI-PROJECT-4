import React from 'react';


class DonationsAbout extends React.Component {
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
          <div className="col-md-12">
            <p>Uneaten matters connects charities with food retailers so surplus food can be shared
              with those less fortunate, and not thrown away.
              This could be food nearing its sell-by date in local stores, spare home-grown vegetables or unsold food.
            </p>
          </div>
        </div>
        <br />

        <div className="row">
          <div className="col-md-12">
            <h3>Charities & Food Retailers</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <p>
              If you wish to advertise your donation, please visit the donations page and submit
              your donation. If you are representing a charity and wish to connect with a local food
              vendor please search for suitable matches on the main donations page or alternatively, visit the my location tab once you have registered to see view nearby donators.
            </p>
          </div>
        </div>

        <br />
        <br />


        <div className="row">
          <div className="col-md-6">
            <h4 className="indexText">""</h4>
            <h4 className="indexText"> Food Waste Recycling Action plan (WRAP) estimates that 1.9m tons of food is wasted by the food industry every year in the UK alone.</h4>
            <br />
            <h4 className="indexText">""</h4>
          </div>
          <div className="col-md-6">
            <h4 className="indexText">""</h4>
            <h4 className="indexText">If food waste were a country it would be the 3rd largest emitter of greenhouse gases (after China & the USA) </h4>
            <br />
            <h4 className="indexText">""</h4>
          </div>
        </div>
      </div>


    );
  }
}


export default DonationsAbout;
