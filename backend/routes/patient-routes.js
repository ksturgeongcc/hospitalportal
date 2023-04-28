const express = require('express');
const { check } = require('express-validator');

const patientControllers = require('../controllers/patient-controllers');

const router = express.Router();

// router.get('/', usersController.getUsers);
router.get('/patient/:uid', patientControllers.getPatientById);


module.exports = router;
