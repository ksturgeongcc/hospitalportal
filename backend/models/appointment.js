const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  date: { type: String, required: true },
  // department_id: { type: mongoose.Types.ObjectId, required: false, ref: 'Department' },
  title: { type: String, required: true },
  patient_id: { type: mongoose.Types.ObjectId, required: true, ref: 'User' }

  
});



module.exports = mongoose.model('Appointment', appointmentSchema);
