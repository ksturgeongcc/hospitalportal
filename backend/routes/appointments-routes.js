const express = require('express');
const { check } = require('express-validator');

const appointmentsControllers = require('../controllers/appointments-controllers');
const fileUpload = require('../middleware/file-upload');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.get('/:aid', appointmentsControllers.getAppointmentById);
// if the line below is commented out then the user id cannot be found
// but when uncommented all the links work until i click on the appointment
// this causes the connection to break
router.get('/user/:uid', appointmentsControllers.getAppointmentsByUserId);


router.use(checkAuth);


router.post(
  '/',
  fileUpload.single('image'),
  [
    check('title')
      .not()
      .isEmpty(),
    check('date').isLength({ min: 5 }),
    
  ],
  appointmentsControllers.createAppointment
);

router.patch(
  '/:aid',
  [
    check('title')
      .not()
      .isEmpty(),
    check('date').isLength({ min: 4 })
  ],
  appointmentsControllers.updateAppointment
);

router.delete('/:aid', appointmentsControllers.deleteAppointment);

module.exports = router;
