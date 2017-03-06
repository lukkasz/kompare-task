const mongoose = require('mongoose');
const config = require('./config');

const MONGODB_URI = config.mongodb.local;

mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_URI);

module.exports = {
  mongoose
};