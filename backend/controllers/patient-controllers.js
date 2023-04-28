const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const HttpError = require('../models/http-error');
const User = require('../models/user');
const Appointment = require('../models/appointment');

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

// patient details
const getPatientById = async (req, res, next) => {
  const patientId = req.params.uid;

  let patientDetails;
  try {
    patientDetails = await User.findById(patientId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not find details.',
      500
    );
    return next(error);
  }

  if (!patientDetails) {
    const error = new HttpError(
      'Could not find details for the provided id.',
      404
    );
    return next(error);
  }

  res.json({ patientDetails: patientDetails.toObject({ getters: true }) });
};



exports.getUsers = getUsers;
exports.getPatientDetailsByUserId = getPatientDetailsByUserId;
exports.getPatientById = getPatientById;
exports.getAppointmentById = getAppointmentById;
exports.getAppointmentsByUserId = getAppointmentsByUserId;

