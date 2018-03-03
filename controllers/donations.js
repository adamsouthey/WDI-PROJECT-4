const Donation = require('../models/donation');

function donationsIndex(req, res, next) {

  const query = {};
  if(req.query.lat && req.query.lng) {
    query.location = {
      $near: {
        $geometry: {
          type: 'Point',
          coordinates: [req.query.lng, req.query.lat]
        },
        $minDistance: 0,
        $maxDistance: 3000
      }
    };
  }

  Donation
    .find(query)
    .exec()
    .then(donations => res.json(donations))
    .catch(next);
}

function donationsCreate(req, res, next) {

  if(req.file) req.body.image = req.file.filename;

  Donation
    .create(req.body)
    .then(donation => res.status(201).json(donation))
    .catch(next);
}

function donationsShow(req, res, next) {
  Donation
    .findById(req.params.id)
    .exec()
    .then((donation) => {
      if(!donation) return res.notFound();
      res.json(donation);
    })
    .catch(next);
}

function donationsUpdate(req, res, next) {

  if(req.file) req.body.image = req.file.filename;

  Donation
    .findById(req.params.id)
    .exec()
    .then((donation) => {
      if(!donation) return res.notFound();
      donation = Object.assign(donation, req.body);
      return donation.save({ new: true, runValidators: true });
    })
    .then(donation => res.json(donation))
    .catch(next);
}

function donationsDelete(req, res, next) {
  Donation
    .findById(req.params.id)
    .exec()
    .then((donation) => {
      if(!donation) return res.notFound();
      return donation.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  index: donationsIndex,
  create: donationsCreate,
  show: donationsShow,
  update: donationsUpdate,
  delete: donationsDelete
};
