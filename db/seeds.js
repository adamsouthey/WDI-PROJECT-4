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
  description: 'Random selection of donuts',
  location: [-0.0644, 51.5215]
}, {
  company: 'The Golden Hind',
  contactname: 'Foo Ying',
  image: 'https://images.unsplash.com/photo-1513271224036-f526ad664968?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=babb0d02148de13c07a6281f90fe52da&auto=format&fit=crop&w=1650&q=80',
  address: '71a-73 Marylebone Ln, Marylebone, London W1U 2PN',
  telephone: '020 7486 3644',
  category: 'Food nearing expiration',
  description: 'Pan fried sea bass with dauphinoise potatoes',
  location: [-0.1510, 51.5180]
}, {
  company: 'MotherMash',
  contactname: 'Vince Gray',
  image: 'https://images.unsplash.com/photo-1480700028244-c68a61649ddd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f27023392715dfcdbb7dc7cd350b4a4b&auto=format&fit=crop&w=1650&q=80',
  address: '26 Ganton St, Soho, London W1F 7QZ',
  telephone: '020 7494 9644',
  category: 'Food nearing expiration',
  description: 'Selection of loaves',
  location: [-0.13940, 51.51293]
}, {
  company: 'DUCKSOUP',
  contactname: 'Chris Tamlin',
  image: 'https://images.unsplash.com/photo-1503788105720-433331157fad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=31cf2caf7cbbd73d2ca563fad1779e3c&auto=format&fit=crop&w=1650&q=80',
  address: ' 41 Dean St, Soho, London W1D 4PY',
  telephone: '020 7287 4599',
  category: 'Food nearing expiration',
  description: 'Sweet and sour chicken with deep fried shrimp, calamari and an orange juice',
  location: [-0.13209, 51.51334]
}, {
  company: 'Tommis Burger Joint',
  contactname: 'Tommi Tammi',
  image: 'https://images.unsplash.com/photo-1449453791997-5c0240b106e5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=60c4109688f92e531eaec8ca0f3306de&auto=format&fit=crop&w=1647&q=80',
  address: ' 342 Kings Rd, Chelsea, London SW3 5UR',
  telephone: '020 7349 0691',
  category: 'Food nearing expiration',
  description: '10 lamb burgers marinated in barbecue sauce',
  location: [-0.17456, 51.48534]
}, {
  company: 'Sarastro',
  contactname: 'Stavros Philanthroku',
  image: 'https://images.pexels.com/photos/5876/food-salad-healthy-vegetables.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb',
  address: '126 Drury Ln, London WC2B 5SU',
  telephone: ' 020 7836 0101',
  category: 'Food nearing expiration',
  description: 'Selection of salads, olives and breads',
  location: [-0.11916, 51.51356]
}, {
  company: 'Joe and the Juice',
  contactname: 'Jo Jameson',
  image: 'https://images.pexels.com/photos/899235/pexels-photo-899235.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb',
  address: '113 Cannon St, London EC4N 5AR',
  telephone: '07341018433',
  category: 'Food nearing expiration',
  description: '20 Yorkshire Pies',
  location: [-0.08948, 51.51162]
}, {
  company: 'Hutong',
  contactname: 'Park Ji Sung',
  image: 'https://images.unsplash.com/photo-1515022376298-7333f33e704b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f19787ca05dc27cf621e01657abfe897&auto=format&fit=crop&w=1651&q=80',
  address: ' 33, The Shard, 31 St Thomas St, London SE1 9RY',
  telephone: '020 3011 1257',
  category: 'Food nearing expiration',
  description: 'An assortment of 30 spring rolls',
  location: [-0.08794, 51.50492]
}, {
  company: 'Bocca di Lupo',
  contactname: 'Gigi Buffon',
  image: 'https://images.unsplash.com/photo-1499778003268-cbafc6d08bab?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b41faf4660b95645f8be4faba2ca1a7d&auto=format&fit=crop&w=1650&q=80',
  address: '12 Archer St, Soho, London W1D 7BB',
  telephone: '020 7734 2223',
  category: 'Food nearing expiration',
  description: 'Deep pan pepperoni pizza',
  location: [-0.13401, 51.51167]
}, {
  company: 'Franco Manca',
  contactname: 'Gigi Franzolo',
  image: 'https://images.unsplash.com/photo-1503767849114-976b67568b02?ixlib=rb-0.3.5&s=c9990db0eaf50beee4e5e8878de6d34d&auto=format&fit=crop&w=1650&q=80',
  address: ' 39 Maiden Ln, London WC2E 7LJ',
  telephone: '020 7240 8309',
  category: 'Food nearing expiration',
  description: 'Five Pepperoni Pizzas',
  location: [-0.12282, 51.51104]
}, {
  company: 'The Clink',
  contactname: 'Jon Smith',
  image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8a5e4cac8bcaf69ffaf5d3b1c2b063e4&auto=format&fit=crop&w=1650&q=80',
  address: 'HMP Brixton, Jebb Ave, London SW2 5XF',
  telephone: '020 8678 9007',
  category: 'Food nearing expiration',
  description: 'Selection of salads garnished with french dressing',
  location: [-0.12471, 51.45196]
}, {
  company: 'Ottolenghi',
  contactname: 'Ho Min Lee',
  image: 'https://images.unsplash.com/photo-1508900173264-bb171fa617e4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=31c6c32bd82ebecec16401d0757e8de5&auto=format&fit=crop&w=1650&q=80',
  address: '21-22 Warwick Street London W1B 5NE',
  telephone: '020 7494 9584',
  category: 'Food nearing expiration',
  description: '10kgs of beans',
  location: [-0.13841, 51.51174]
}, {
  company: 'Jhenn of the Vegan Ronin',
  contactname: 'Christian Vert',
  image: 'https://images.unsplash.com/photo-1467020323552-36f7bf0e30e6?ixlib=rb-0.3.5&s=b3885f1c152f7357fa0a7393bb8f6112&auto=format&fit=crop&w=1650&q=80',
  address: '21-29 Warwick Street London W1B 5NC',
  telephone: '020 7454 9884',
  category: 'Food nearing expiration',
  description: '5kg of Tomatoes and onions',
  location: [-0.13841, 51.51874]
}];



mongoose.connect(dbURI, { useMongoClient: true })
  .then(db => db.dropDatabase())
  .then(() => Donation.create(donationData))
  .then(donations => console.log(`${donations.length} donations created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
