const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const Donation      = require('../models/donation');

const donationData = [{
  company: 'Fruit & Veg Covent Garden',
  contactname: 'Chef Steve Walpole',
  image: 'https://images.unsplash.com/photo-1507844090982-e6e9452ea68d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e2a95a4f39023b427e68da7b04b4af56&auto=format&fit=crop&w=1647&q=80',
  address: 'New Covent Garden Market, London,SW8 5NX',
  telephone: '0808 141 2828 (Free Phone)',
  category: 'Food nearing expiration',
  description: 'Selection of uncooked vegetables',
  location: [-0.129659, 51.480208]
}, {
  company: 'Paul Cafe Guildhall',
  contactname: 'Paul',
  image: 'https://images.unsplash.com/photo-1450862479751-84eeaf2fcca4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fd8cf8c6287ae8d3f6edb0119889c966&auto=format&fit=crop&w=1653&q=80',
  address: 'Guildhall Gresham St LondonEC2V 7HHUK',
  telephone: '084 5612 0401',
  category: 'Food nearing expiration',
  description: '400 pain au chocolats. Bring van.',
  location: [-0.0928, 51.5158]
}, {
  company: 'Rinkoff',
  contactname: 'Singh Lall',
  image: 'https://images.unsplash.com/photo-1422919869950-5fdedb27cde8?ixlib=rb-0.3.5&s=12dda888e2889615e8c5c1ec288916fd&auto=format&fit=crop&w=1650&q=80',
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
  image: 'https://images.unsplash.com/photo-1480700028244-c68a61649ddd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f27023392715dfcdbb7dc7cd350b4a4b&auto=format&fit=crop&w=1650&q=80',
  address: '26 Ganton St, Soho, London W1F 7QZ',
  telephone: '020 7494 9644',
  category: 'Food nearing expiration',
  description: 'Collect donations at allocated time from supermarket (further details will be provided, please contact us)',
  location: [-0.13940, 51.51293]
}, {
  company: 'DUCKSOUP',
  contactname: 'Chris Tamlin',
  image: 'https://images.unsplash.com/photo-1503788105720-433331157fad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=31cf2caf7cbbd73d2ca563fad1779e3c&auto=format&fit=crop&w=1650&q=80',
  address: ' 41 Dean St, Soho, London W1D 4PY',
  telephone: '020 7287 4599',
  category: 'Food nearing expiration',
  description: 'Collect donations at allocated time from supermarket (further details will be provided, please contact us)',
  location: [-0.13209, 51.51334]
}, {
  company: 'Tommis Burger Joint',
  contactname: 'Tommi',
  image: 'https://images.pexels.com/photos/899235/pexels-photo-899235.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb',
  address: ' 342 Kings Rd, Chelsea, London SW3 5UR',
  telephone: '020 7349 0691',
  category: 'Food nearing expiration',
  description: 'Collect donations at allocated time from supermarket (further details will be provided, please contact us)',
  location: [-0.17456, 51.48534]
}, {
  company: 'Sarastro',
  contactname: 'Stavros',
  image: 'https://images.pexels.com/photos/5876/food-salad-healthy-vegetables.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb',
  address: '126 Drury Ln, London WC2B 5SU',
  telephone: ' 020 7836 0101',
  category: 'Food nearing expiration',
  description: 'Collect donations at allocated time from supermarket (further details will be provided, please contact us)',
  location: [-0.11916, 51.51356]
}, {
  company: 'Joe and the Juice',
  contactname: 'Jo Jo',
  image: 'https://images.pexels.com/photos/899235/pexels-photo-899235.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb',
  address: '113 Cannon St, London EC4N 5AR',
  telephone: '07341018433',
  category: 'Food nearing expiration',
  description: 'Collect donations at allocated time from supermarket (further details will be provided, please contact us)',
  location: [-0.08948, 51.51162]
}, {
  company: 'Hutong',
  contactname: 'Park Ji Sung',
  image: 'https://images.unsplash.com/photo-1515022376298-7333f33e704b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f19787ca05dc27cf621e01657abfe897&auto=format&fit=crop&w=1651&q=80',
  address: ' 33, The Shard, 31 St Thomas St, London SE1 9RY',
  telephone: '020 3011 1257',
  category: 'Food nearing expiration',
  description: 'Collect donations at allocated time from supermarket (further details will be provided, please contact us)',
  location: [-0.08794, 51.50492]
}, {
  company: 'Bocca di Lupo',
  contactname: 'Gigi Buffon',
  image: 'https://images.unsplash.com/photo-1499778003268-cbafc6d08bab?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b41faf4660b95645f8be4faba2ca1a7d&auto=format&fit=crop&w=1650&q=80',
  address: '12 Archer St, Soho, London W1D 7BB',
  telephone: '020 7734 2223',
  category: 'Food nearing expiration',
  description: 'Collect donations at allocated time from supermarket (further details will be provided, please contact us)',
  location: [-0.13401, 51.51167]
}];


mongoose.connect(dbURI, { useMongoClient: true })
  .then(db => db.dropDatabase())
  .then(() => Donation.create(donationData))
  .then(donations => console.log(`${donations.length} donations created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
