/* global google:ignore */

import React from 'react';

class GoogleAutocomplete extends React.Component {

  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(this.autocompleteElement);
    this.autocomplete.addListener('place_changed', () => {
      const place = this.autocomplete.getPlace();
      this.props.setLatLng(place);
    });
  }
  
  render() {

    return (
      <input type="text" ref={element => this.autocompleteElement = element} />
    );
  }
}

export default GoogleAutocomplete;
