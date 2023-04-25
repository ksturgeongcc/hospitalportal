const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const departmentSchema = new Schema({
  name: { type: String, required: true },
  details: { type: String, required: true },
  doctor: { type: String, required: true },
  nurse: { type: String, required: true },
  video_path: { type: String, required: true }

 

});
// 
module.exports = mongoose.model('Department', departmentSchema);
