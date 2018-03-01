const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const Donation      = require('../models/donation');

const donationData = [{
  company: 'Waitrose',
  contactname: 'Jon Snow',
  image: 'https://media.mnn.com/assets/images/2017/09/fresh_foods.jpg.838x0_q80.jpg',
  address: '31 Wolf Street',
  telephone: '07741098483',
  category: 'Food nearing expiration',
  description: 'Collect donations at allocated time from supermarket (further details will be provided, please contact us)',
  location: [-0.076132, 51.508530]
}, {
  company: 'Waitrose',
  contactname: 'Jon Snow',
  image: 'https://media.mnn.com/assets/images/2017/09/fresh_foods.jpg.838x0_q80.jpg',
  address: '31 Wolf Street',
  telephone: '07741098483',
  category: 'Food nearing expiration',
  description: 'Collect donations at allocated time from supermarket (further details will be provided, please contact us)',
  location: [-0.4796, 51.5485]
}, {
  company: 'Waitrose',
  contactname: 'Jon Snow',
  image: 'https://media.mnn.com/assets/images/2017/09/fresh_foods.jpg.838x0_q80.jpg',
  address: 'Victoria',
  telephone: '07741098483',
  category: 'Food nearing expiration',
  description: 'Collect donations at allocated time from supermarket (further details will be provided, please contact us)',
  location: [-0.5439, 51.4952]
}, {
  company: 'Waitrose',
  contactname: 'Jon Snow',
  image: 'https://media.mnn.com/assets/images/2017/09/fresh_foods.jpg.838x0_q80.jpg',
  address: '31 Wolf Street',
  telephone: '07741098483',
  category: 'Food nearing expiration',
  description: 'Collect donations at allocated time from supermarket (further details will be provided, please contact us)',
  location: [0.1439, 51.4952]
}, {
  company: 'Waitrose',
  contactname: 'Jon Snow',
  image: 'https://media.mnn.com/assets/images/2017/09/fresh_foods.jpg.838x0_q80.jpg',
  address: '31 Wolf Street',
  telephone: '07741098483',
  category: 'Food nearing expiration',
  description: 'Collect donations at allocated time from supermarket (further details will be provided, please contact us)',
  location: [-0.79015, 51.51199]
}, {
  company: 'Waitrose',
  contactname: 'Jon Snow',
  image: 'https://media.mnn.com/assets/images/2017/09/fresh_foods.jpg.838x0_q80.jpg',
  address: '31 Wolf Street',
  telephone: '07741098483',
  category: 'Food nearing expiration',
  description: 'Collect donations at allocated time from supermarket (further details will be provided, please contact us)',
  location: [-0.141099, 51.515419]
}];

mongoose.connect(dbURI, { useMongoClient: true })
  .then(db => db.dropDatabase())
  .then(() => Donation.create(donationData))
  .then(donations => console.log(`${donations.length} donations created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
