import React, { Component } from 'react';
import axios from 'axios';

class Venues extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latlong: '',
      venues: []
    };
  }

  componentDidMount() {
    this.getLocation();
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition((response) => {
      this.setState({
        latlong: `${response.coords.latitude} , ${response.coords.longitude}`
      }, () => {
        this.getVenues('pub');
      });
    });
  }

  getVenues(query) {
    const endpoint = 'https://api.foursquare.com/v2/venues/search?';
    const params = {
      client_id: 'VEBTNFOLQKAE4O4NJ0PUCY4DPOGMLLET0Q3AZVDAVVXXZE1D',
      client_secret: 'JPZGJN4ZUV5K21VOKKF1WADEH2BYS13SFKZ4LVA5FC2BUSVJ',
      ll: this.state.latlong,
      query,
      limit: 10,
      v: '20180320'
    };

    axios.get(endpoint + new URLSearchParams(params)).then(
      (response) => {
        this.setState({
          venues: response.data.response.venues
        });
      }
    );
  }

  render() {
    const { venues } = this.state;
    return (
      <div className="venue-container">
        <div className="venue-container__row">
          {
            venues.map((venue) => (
              <div key={venue.id} className="venue-container__item">
                <div className="venue-container__item--text">
                  <img alt={venue.categories['0'].name} src={`${venue.categories['0'].icon.prefix}32${venue.categories['0'].icon.suffix}`} />
                  <h2>{venue.name}</h2>
                  <p>
                    {venue.location.formattedAddress.map((address, index) => (
                      <span key={index}>{address}</span>
                    ))}
                  </p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Venues;
