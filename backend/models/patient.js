const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const patientSchema = new Schema({
  firstname: { type: String, required: true },
  surname: { type: String, required: true, unique: true },
  appointments: [{ type: mongoose.Types.ObjectId, required: false, ref: 'Appointment' }],
  user_id: { type: mongoose.Types.ObjectId, required: true, ref: 'User' },
  image: { type: String, required: false },
  address: { type: String, required: false },
  guardian: { type: String, required: false },
 
  
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Patient', patientSchema);
