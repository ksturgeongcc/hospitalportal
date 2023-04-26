const fs = require('fs');

const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const HttpError = require('../models/http-error');
// requiring both the appointment and user collections

const Appointment = require('../models/appointment');
const User = require('../models/user');

const getAppointmentById = async (req, res, next) => {
  const appointmentId = req.params.aid;

  let appointment;
  try {
    appointment = await Appointment.findById(appointmentId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not find an appointment.',
      500
    );
    return next(error);
  }

  if (!appointment) {
    const error = new HttpError(
      'Could not find appointment for the provided id.',
      404
    );
    return next(error);
  }

  res.json({ appointment: appointment.toObject({ getters: true }) });
};

const getAppointmentsByUserId = async (req, res, next) => {
  const userId = req.params.uid;
  // let appointment;
  let userWithAppointments;
  try {
    userWithAppointments = await User.findById(userId).populate('appointments');
  } catch (err) {
    const error = new HttpError(
      'Fetching appointments failed, please try again later.',
      500
    );
    return next(error);
  }

  // if (!appointments || appointment.length === 0) {
  if (!userWithAppointments || userWithAppointments.appointments.length === 0) {
    return next(
      new HttpError('Could not find appointment for the provided user id.', 404)
    );
  }

  res.json({
    appointments: userWithAppointments.appointments.map(appointment =>
      appointment.toObject({ getters: true })
    )
  });
};

const createAppointment = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  const { title, date } = req.body;



  const createdAppointment = new Appointment({
    title,
    date,
    patient_id: req.userData.userId
  });

  let user;
  try {
    user = await User.findById(req.userData.userId);
  } catch (err) {
    const error = new HttpError(
      'Creating appointment failed, please try again.',
      500
    );
    return next(error);
  }

  if (!user) {
    const error = new HttpError('Could not find user for provided id.', 404);
    return next(error);
  }

  console.log(user);

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdAppointment.save({ session: sess });
    user.appointments.push(createdAppointment);
    await user.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      'Creating appointment failed, please try again.',
      500
    );
    return next(error);
  }

  res.status(201).json({ appointment: createdAppointment });
};

const updateAppointment = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  const { title, date } = req.body;
  const appointmentId = req.params.aid;

  let appointment;
  try {
    appointment = await Appointment.findById(appointmentId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update appointment.',
      500
    );
    return next(error);
  }

  if (appointment.patientId.toString() !== req.userData.userId) {
    const error = new HttpError('You are not allowed to edit this appointment.', 401);
    return next(error);
  }

  appointment.title = title;
  appointment.date = date;

  try {
    await appointment.save();
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update appointment.',
      500
    );
    return next(error);
  }

  res.status(200).json({ appointment: appointment.toObject({ getters: true }) });
};

const deleteAppointment = async (req, res, next) => {
  const appointmentId = req.params.aid;

  let appointment;
  try {
    appointment = await Appointment.findById(appointmentId).populate('patientId');
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not delete appointment.',
      500
    );
    return next(error);
  }

  if (!appointment) {
    const error = new HttpError('Could not find appointment for this id.', 404);
    return next(error);
  }

  if (appointment.patientId.id !== req.userData.userId) {
    const error = new HttpError(
      'You are not allowed to delete this appointment.',
      401
    );
    return next(error);
  }

  // const imagePath = appointment.image;

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await appointment.remove({ session: sess });
    appointment.patientId.appointments.pull(appointment);
    await appointment.patientId.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not delete appointment.',
      500
    );
    return next(error);
  }

  fs.unlink(imagePath, err => {
    console.log(err);
  });

  res.status(200).json({ message: 'Deleted appointment.' });
};

exports.getAppointmentById = getAppointmentById;
exports.getAppointmentsByUserId = getAppointmentsByUserId;
exports.createAppointment = createAppointment;
exports.updateAppointment = updateAppointment;
exports.deleteAppointment = deleteAppointment;
