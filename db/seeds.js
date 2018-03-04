const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const Donation      = require('../models/donation');

const donationData = [{
  company: 'Fruit & Veg Covent Garden',
  contactname: 'Chef Steve Walpole',
  image: 'https://images.pexels.com/photos/899235/pexels-photo-899235.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb',
  address: 'New Covent Garden Market, London,SW8 5NX',
  telephone: '0808 141 2828 (Free Phone)',
  category: 'Food nearing expiration',
  description: 'Selection of uncooked vegetables',
  location: [-0.129659, 51.480208]
}, {
  company: 'Paul Cafe Guildhall',
  contactname: 'Paul',
  image: 'https://images.pexels.com/photos/899235/pexels-photo-899235.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb',
  address: 'Guildhall Gresham StLondonEC2V 7HHUK',
  telephone: '084 5612 0401',
  category: 'Food nearing expiration',
  description: '400 pain au chocolats. Bring van.',
  location: [-0.0928, 51.5158]
}, {
  company: 'Rinkoff',
  contactname: 'Singh Lall',
  image: 'https://images.pexels.com/photos/899235/pexels-photo-899235.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb',
  address: '79 Vallance Rd, London E1 5BS',
  telephone: '020 7247 6228',
  category: 'Food nearing expiration',
  description: 'Collect donations at allocated time from supermarket (further details will be provided, please contact us)',
  location: [-0.0644, 51.5215]
}, {
  company: 'The Golden Hind',
  contactname: 'Sea Gull',
  image: 'https://images.pexels.com/photos/899235/pexels-photo-899235.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb',
  address: '71a-73 Marylebone Ln, Marylebone, London W1U 2PN',
  telephone: '020 7486 3644',
  category: 'Food nearing expiration',
  description: 'Collect donations at allocated time from supermarket (further details will be provided, please contact us)',
  location: [-0.1510, 51.5180]
}, {
  company: 'MotherMash',
  contactname: 'Vince Gray',
  image: 'https://images.pexels.com/photos/899235/pexels-photo-899235.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb',
  address: '26 Ganton St, Soho, London W1F 7QZ',
  telephone: '020 7494 9644',
  category: 'Food nearing expiration',
  description: 'Collect donations at allocated time from supermarket (further details will be provided, please contact us)',
  location: [-0.13940, 51.51293]
}, {
  company: 'DUCKSOUP',
  contactname: 'Chris Tamlin',
  image: 'https://images.pexels.com/photos/899235/pexels-photo-899235.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb',
  address: ' 41 Dean St, Soho, London W1D 4PY',
  telephone: '020 7287 4599',
  category: 'Food nearing expiration',
  description: 'Collect donations at allocated time from supermarket (further details will be provided, please contact us)',
  location: [-0.13209, 51.51334]
}, {
  company: 'Waitrose',
  contactname: 'Jon Snow',
  image: 'https://images.pexels.com/photos/899235/pexels-photo-899235.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb',
  address: '31 Wolf Street',
  telephone: '07741098483',
  category: 'Food nearing expiration',
  description: 'Collect donations at allocated time from supermarket (further details will be provided, please contact us)',
  location: [-0.14121231099, 51.51545519]
}, {
  company: 'Waitrose',
  contactname: 'Jon Snow',
  image: 'https://images.pexels.com/photos/899235/pexels-photo-899235.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb',
  address: '31 Wolf Street',
  telephone: '07741098483',
  category: 'Food nearing expiration',
  description: 'Collect donations at allocated time from supermarket (further details will be provided, please contact us)',
  location: [-0.14121231099, 51.51545519]
}, {
  company: 'Waitrose',
  contactname: 'Jon Snow',
  image: 'https://images.pexels.com/photos/899235/pexels-photo-899235.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb',
  address: '31 Wolf Street',
  telephone: '07741098483',
  category: 'Food nearing expiration',
  description: 'Collect donations at allocated time from supermarket (further details will be provided, please contact us)',
  location: [-0.14121231099, 51.51545519]
}, {
  company: 'Waitrose',
  contactname: 'Jon Snow',
  image: 'https://images.pexels.com/photos/899235/pexels-photo-899235.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb',
  address: '31 Wolf Street',
  telephone: '07741098483',
  category: 'Food nearing expiration',
  description: 'Collect donations at allocated time from supermarket (further details will be provided, please contact us)',
  location: [-0.14121231099, 51.51545519]
}, {
  company: 'Waitrose',
  contactname: 'Jon Snow',
  image: 'https://images.pexels.com/photos/899235/pexels-photo-899235.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb',
  address: '31 Wolf Street',
  telephone: '07741098483',
  category: 'Food nearing expiration',
  description: 'Collect donations at allocated time from supermarket (further details will be provided, please contact us)',
  location: [-0.14121231099, 51.51545519]
}];


mongoose.connect(dbURI, { useMongoClient: true })
  .then(db => db.dropDatabase())
  .then(() => Donation.create(donationData))
  .then(donations => console.log(`${donations.length} donations created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
