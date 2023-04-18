const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const patientSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  image: { type: String, required: false },
  address: { type: String, required: true },
  dob: { type: Date, required: true },
  telephone: { type: String, required: false },
  guardian: { type: Date, required: true },
  appointment: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Appointment' }],
  department: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Department' }],
});

patientSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', patientSchema);
