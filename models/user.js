const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: 'Please enter your first name' },
  lastname: { type: String, required: 'Please enter your last name' },
  username: { type: String, required: 'Please enter a username' },
  email: { type: String, required: 'Please enter a valid email', unique: true },
  password: { type: String, required: 'Please enter your password' },
  type: { type: String, required: 'Please choose between charity or vendor' },
  address: { type: String, required: 'Please enter an address by typing a location'  },
  location: {
    type: [Number], // [<lng>, <lat>]
    index: '2dsphere'
  }

});

userSchema.set('toJSON', {
  getters: true,
  virtuals: true,
  transform(obj, json) {
    delete json._id;
    delete json.__v;
    delete json.password;
  }
});

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

userSchema.pre('validate', function checkPassword(next) {
  if(!this._passwordConfirmation || this._passwordConfirmation !== this.password) {
    this.invalidate('passwordConfirmation', 'Passwords do not match.');
  }
  next();
});

userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
