var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DeviceSchema = new Schema({
  model: {
    type: String,
    required: true,
    unique: true
  },
  description: String,
  id: Number,
  images: [String],
  reviews: [
    {
      user: String,
      review: String
    }
  ]
},
{collection: 'Devices'});
module.exports = mongoose.model('Devices', DeviceSchema);
