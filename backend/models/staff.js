const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const staffSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  image: { type: String, required: true },
  department: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Department' }]
});


module.exports = mongoose.model('User', staffSchema);
