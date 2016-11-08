// dependency
var mongoose = require('mongoose');

// create the Schema class
var Schema = mongoose.Schema;

// instantiate a userSchema object with the Schema class we just made
var UserSchema = new Schema({
  // title is a string. We will trim any trailing whitespace. And it's required.
  title: {
    type: String,
    trim: true,
    required: "Title is Required"
  },
  // date is a string. We will trim any trailing whitespace. It's also required.
  // It has a custom validate function that checks the length of the input.
  // If it's less than six chars, mongoose will throw an error.
  date: {
    type: Date,
    default: Date.now,
  },
  // email is a string, and it must be a unique one in our collection.
  // notice how it must match our regex, which checks for email.
  url: {
    type: String,
    unique:true,
    required: "URL is Required",
  },
});

// create the "User" model with our UserSchema schema
var User = mongoose.model('User', UserSchema);

// export the User model, so it can be used in server.js with a require.
module.exports = User;
