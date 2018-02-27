const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const Donation      = require('../models/donation');

const donationData = [{
  organisation: 'Waitrose',
  contactname: 'Jon Snow',
  image: 'https://media.mnn.com/assets/images/2017/09/fresh_foods.jpg.838x0_q80.jpg',
  address: '31 Wolf Street',
  city: 'London',
  postcode: 'W1 7BT',
  telephone: '07741098483',
  category: 'Food nearing expiration',
  description: 'Collect donations at allocated time from supermarket (further details will be provided, please contact us)',location: {
    lat: 51.51199,
    lng: -0.09015
  }
}, {
  organisation: 'Waitrose',
  contactname: 'Jon Snow',
  image: 'https://media.mnn.com/assets/images/2017/09/fresh_foods.jpg.838x0_q80.jpg',
  address: '31 Wolf Street',
  city: 'London',
  postcode: 'W1 7BT',
  telephone: '07741098483',
  category: 'Food nearing expiration',
  description: 'Collect donations at allocated time from supermarket (further details will be provided, please contact us)',
  location: {
    lat: 51.51199,
    lng: -0.09015
  }
}, {
  organisation: 'Waitrose',
  contactname: 'Jon Snow',
  image: 'https://media.mnn.com/assets/images/2017/09/fresh_foods.jpg.838x0_q80.jpg',
  address: '31 Wolf Street',
  city: 'London',
  postcode: 'W1 7BT',
  telephone: '07741098483',
  category: 'Food nearing expiration',
  description: 'Collect donations at allocated time from supermarket (further details will be provided, please contact us)',
  location: {
    lat: 51.51199,
    lng: -0.09015
  }
}, {
  organisation: 'Waitrose',
  contactname: 'Jon Snow',
  image: 'https://media.mnn.com/assets/images/2017/09/fresh_foods.jpg.838x0_q80.jpg',
  address: '31 Wolf Street',
  city: 'London',
  postcode: 'W1 7BT',
  telephone: '07741098483',
  category: 'Food nearing expiration',
  description: 'Collect donations at allocated time from supermarket (further details will be provided, please contact us)',
  location: {
    lat: 51.51199,
    lng: -0.09015
  }
}, {
  organisation: 'Waitrose',
  contactname: 'Jon Snow',
  image: 'https://media.mnn.com/assets/images/2017/09/fresh_foods.jpg.838x0_q80.jpg',
  address: '31 Wolf Street',
  city: 'London',
  postcode: 'W1 7BT',
  telephone: '07741098483',
  category: 'Food nearing expiration',
  description: 'Collect donations at allocated time from supermarket (further details will be provided, please contact us)',
  location: {
    lat: 51.51199,
    lng: -0.09015
  }
}, {
  organisation: 'Waitrose',
  contactname: 'Jon Snow',
  image: 'https://media.mnn.com/assets/images/2017/09/fresh_foods.jpg.838x0_q80.jpg',
  address: '31 Wolf Street',
  city: 'London',
  postcode: 'W1 7BT',
  telephone: '07741098483',
  category: 'Food nearing expiration',
  description: 'Collect donations at allocated time from supermarket (further details will be provided, please contact us)',
  location: {
    lat: 51.51199,
    lng: -0.09015
  }
}];

mongoose.connect(dbURI, { useMongoClient: true })
  .then(db => db.dropDatabase())
  .then(() => Donation.create(donationData))
  .then(donations => console.log(`${donations.length} donations created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
