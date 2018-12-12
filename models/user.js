let mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb:' + process.env.MONGO_URI, { useNewUrlParser: true });

let UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
})

let user = mongoose.model('User', UserSchema);
module.exports = user;
