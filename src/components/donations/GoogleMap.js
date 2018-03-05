


/* global google:ignore */
import React from 'react';
import { withRouter } from 'react-router-dom';

import mapStyle from '../../lib/mapStyle';

class GoogleMap extends React.Component {
  componentDidMount() {
    console.log(this.props.donations);
    this.map = new google.maps.Map(this.mapCanvas, {
      center: this.props.center || { lat: 51.51, lng: -0.09 },
      zoom: 14,
      styles: mapStyle

    });
    var image = 'http://i.stack.imgur.com/orZ4x.png';
    this.marker = new google.maps.Marker({
      map: this.map,
      position: this.props.center || { lat: 51.51, lng: -0.09 },
      icon: image
      // animation: google.maps.Animation.BOUNCE
    });
    if(this.props.donations){
      this.props.donations.forEach((donation) => {

        console.log('in here', donation.address);
        const marker = new google.maps.Marker({
          map: this.map,
          position: { lat: donation.location[1], lng: donation.location[0] },
          animation: google.maps.Animation.BOUNCE
        });
        marker.id = donation.id;

        google.maps.event.addListener(marker, 'click', () => {
          this.props.history.push(`/donations/${marker.id}`);
        });
      });
    }

  }

  componentWillUnmount() {
    this.marker.setMap(null);
    this.marker = null;
    this.map = null;
  }

  render() {

    return (
      <div className='google-map' ref={element => this.mapCanvas = element}>Google Map goes here...</div>
    );
  }
}

export default withRouter(GoogleMap);
