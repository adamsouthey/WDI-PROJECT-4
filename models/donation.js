const mongoose = require('mongoose');

const donationSchema = mongoose.Schema({
  company: { type: String, required: 'Please provide a company name.' },
  contactname: { type: String, required: 'Please provide a contact name.' },
  image: { type: String, required: 'Please provide an image.'  },
  address: { type: String, required: 'Please provide a valid address.'  },
  telephone: { type: String, required: 'Please provide a valid telephone number.'  },
  description: { type: String, required: 'Please provide a valid description of your donation.'  },
  category: { type: String, required: 'Please provide a category.'  },
  location: {
    lat: {type: Number },
    lng: { type: Number }
  }
}, {
  timestamps: true
});

donationSchema.set('toJSON', {
  getters: true,
  virtuals: true,
  transform(obj, json) {
    delete json._id;
    delete json.__v;
  }
});

module.exports = mongoose.model('donation', donationSchema);
