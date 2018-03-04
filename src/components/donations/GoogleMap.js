
/* global google:ignore */
import React from 'react';


class GoogleMap extends React.Component {
  componentDidMount() {
    console.log(this.props.donations);
    this.map = new google.maps.Map(this.mapCanvas, {
      center: this.props.center || { lat: 51.51, lng: -0.09 },
      zoom: 14,
      // styles: [{'featureType':'all','elementType':'labels','stylers':[{'visibility':'on'}]},{'featureType':'all','elementType':'labels.text.fill','stylers':[{'saturation':36},{'color':'#000000'},{'lightness':40}]},{'featureType':'all','elementType':'labels.text.stroke','stylers':[{'visibility':'on'},{'color':'#000000'},{'lightness':16}]},{'featureType':'all','elementType':'labels.icon','stylers':[{'visibility':'off'}]},{'featureType':'administrative','elementType':'geometry.fill','stylers':[{'color':'#000000'},{'lightness':20}]},{'featureType':'administrative','elementType':'geometry.stroke','stylers':[{'color':'#000000'},{'lightness':17},{'weight':1.2}]},{'featureType':'administrative.country','elementType':'labels.text','stylers':[{'visibility':'on'},{'weight':'4'}]},{'featureType':'administrative.country','elementType':'labels.text.fill','stylers':[{'color':'#b4985a'}]},{'featureType':'administrative.locality','elementType':'labels.text.fill','stylers':[{'color':'#b4985a'},{'lightness':'-20'}]},{'featureType':'administrative.neighborhood','elementType':'labels','stylers':[{'visibility':'off'}]},{'featureType':'administrative.land_parcel','elementType':'labels','stylers':[{'visibility':'off'}]},{'featureType':'landscape','elementType':'geometry','stylers':[{'lightness':'07'},{'color':'#2b2b2b'}]},{'featureType':'poi','elementType':'all','stylers':[{'visibility':'off'}]},{'featureType':'road.highway','elementType':'all','stylers':[{'visibility':'on'},{'invert_lightness':!0}]},{'featureType':'road.highway','elementType':'geometry.fill','stylers':[{'color':'#b4985a'},{'lightness':'-40'},{'saturation':'-20'}]},{'featureType':'road.highway','elementType':'geometry.stroke','stylers':[{'invert_lightness':!0},{'color':'#2b2b2b'}]},{'featureType':'road.highway','elementType':'labels','stylers':[{'visibility':'simplified'},{'saturation':'-100'},{'lightness':'-60'},{'gamma':'2'}]},{'featureType':'road.highway','elementType':'labels.text','stylers':[{'invert_lightness':!0}]},{'featureType':'road.highway','elementType':'labels.text.stroke','stylers':[{'invert_lightness':!0}]},{'featureType':'road.arterial','elementType':'geometry.fill','stylers':[{'color':'#3f3f3f'}]},{'featureType':'road.local','elementType':'all','stylers':[{'lightness':'-77'}]},{'featureType':'road.local','elementType':'labels','stylers':[{'visibility':'off'}]},{'featureType':'transit','elementType':'all','stylers':[{'visibility':'off'}]},{'featureType':'water','elementType':'geometry','stylers':[{'color':'#222222'}]},{'featureType':'water','elementType':'geometry.fill','stylers':[{'lightness':'-10'}]}]
      styles: [{elementType:'geometry',stylers:[{color:'#242f3e'}]},{elementType:'labels.text.stroke',stylers:[{color:'#242f3e'}]},{elementType:'labels.text.fill',stylers:[{color:'#746855'}]},{featureType:'administrative.locality',elementType:'labels.text.fill',stylers:[{color:'#d59563'}]},{featureType:'poi',elementType:'labels.text.fill',stylers:[{color:'#d59563'}]},{featureType:'poi.park',elementType:'geometry',stylers:[{color:'#263c3f'}]},{featureType:'poi.park',elementType:'labels.text.fill',stylers:[{color:'#6b9a76'}]},{featureType:'road',elementType:'geometry',stylers:[{color:'#38414e'}]},{featureType:'road',elementType:'geometry.stroke',stylers:[{color:'#212a37'}]},{featureType:'road',elementType:'labels.text.fill',stylers:[{color:'#9ca5b3'}]},{featureType:'road.highway',elementType:'geometry',stylers:[{color:'#746855'}]},{featureType:'road.highway',elementType:'geometry.stroke',stylers:[{color:'#1f2835'}]},{featureType:'road.highway',elementType:'labels.text.fill',stylers:[{color:'#f3d19c'}]},{featureType:'transit',elementType:'geometry',stylers:[{color:'#2f3948'}]},{featureType:'transit.station',elementType:'labels.text.fill',stylers:[{color:'#d59563'}]},{featureType:'water',elementType:'geometry',stylers:[{color:'#17263c'}]},{featureType:'water',elementType:'labels.text.fill',stylers:[{color:'#515c6d'}]},{featureType:'water',elementType:'labels.text.stroke',stylers:[{color:'#17263c'}]}]

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

        console.log('in here', donation);



        const marker = new google.maps.Marker({
          map: this.map,
          position: { lat: donation.location[1], lng: donation.location[0] },
          animation: google.maps.Animation.BOUNCE,
          // infoWindow: this.props.donations.address

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

export default GoogleMap;
