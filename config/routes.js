const router = require('express').Router();
const donations  = require('../controllers/donations');
const auth  = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');

router.route('/donations')
  .get(donations.index)
  .post(secureRoute, donations.create);

router.route('/donations/:id')
  .get(donations.show)
  .put(secureRoute, donations.update)
  .delete(secureRoute, donations.delete);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
