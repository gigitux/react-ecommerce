var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.createConnection("mongodb://localhost:27017/myproject"));

var UsersSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  id: Number,
  role: {
    type: String,
    default: "user" }
},
{collection: 'Users'});
UsersSchema.plugin(autoIncrement.plugin, { model: 'Users', field: 'id' });
module.exports = mongoose.model('Users', UsersSchema);
