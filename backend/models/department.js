const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const departmentSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  map: { type: String, required: true },
  tel: { type: String, required: true },
  tel: { type: String, required: true },
  nurse: {type: String, required: false},
  doctor: {type: String, required: false}

});

module.exports = mongoose.model('Department', departmentSchema);
