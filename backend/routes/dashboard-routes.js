const express = require('express');
const { check } = require('express-validator');

// const appointmentsControllers = require('../controllers/dashboard-controllers');
const patientControllers = require('../controllers/users-controllers');
const fileUpload = require('../middleware/file-upload');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

// router.get('/:aid', appointmentsControllers.getAppointmentById);

router.get('/user/:uid', appointmentsControllers.getAppointmentsByUserId);
// router.get('/user/:uid', dashboardControllers.getPatientByUserId);


router.use(checkAuth);


// router.post(
//   '/',
//   fileUpload.single('image'),
//   [
//     check('title')
//       .not()
//       .isEmpty(),
//     check('date').isLength({ min: 5 }),

//   ],
//   appointmentsControllers.createAppointment
// );

// router.patch(
//   '/:aid',
//   [
//     check('title')
//       .not()
//       .isEmpty(),
//     check('date').isLength({ min: 4 })
//   ],
//   appointmentsControllers.updateAppointment
// );

router.delete('/:aid', appointmentsControllers.deleteAppointment);

module.exports = router;
