const express = require('express');
const { check } = require('express-validator');

const patientControllers = require('../controllers/patient-controllers');
const fileUpload = require('../middleware/file-upload');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.get('/:patientid', patientControllers.getPatientById);

router.get('/user/:uid', patientControllers.getPatientByUserId);

router.use(checkAuth);

router.post(
  '/',
  fileUpload.single('image'),
  [
    check('title')
      .not()
      .isEmpty(),
    check('description').isLength({ min: 5 }),
    check('address')
      .not()
      .isEmpty()
  ],
  patientControllers.createPatient
);

router.patch(
  '/:patientid',
  [
    check('title')
      .not()
      .isEmpty(),
    check('description').isLength({ min: 5 })
  ],
  patientControllers.updatePatient
);

router.delete('/:pid', patientControllers.deletePatient);

module.exports = router;
