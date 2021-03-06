/* global google:ignore */
import React from 'react';
import { withRouter } from 'react-router-dom';

import mapStyle from '../../lib/mapStyle';

class GoogleMap extends React.Component {
  componentDidMount() {
    console.log(this.props.donations);
    this.map = new google.maps.Map(this.mapCanvas, {
      center: this.props.center || { lat: 51.51, lng: -0.09 },
      zoom: 12,
      styles: mapStyle
    });
    var image = 'http://www.codeshare.co.uk/images/blue-pin.png';
    this.marker = new google.maps.Marker({
      map: this.map,
      position: this.props.center || { lat: 51.51, lng: -0.09 },
      icon: image
    });
    if(this.props.donations){
      this.props.donations.forEach((donation) => {
        const marker = new google.maps.Marker({
          map: this.map,
          position: { lat: donation.location[1], lng: donation.location[0] },
          animation: google.maps.Animation.DROP,
          icon: 'https://cdn3.iconfinder.com/data/icons/living/24/249_eat_restaurant_dinner-32.png'
        });
        var infowindow =  new google.maps.InfoWindow({
          content: donation.address,
          description: donation.description
        });
        marker.addListener('mouseover', function() {
          infowindow.open(this.map, this);
        });
        marker.addListener('mouseout', function() {
          infowindow.close();
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
