const express = require('express');
const { check } = require('express-validator');

const patientsControllers = require('../controllers/patients-controllers');
const fileUpload = require('../middleware/file-upload');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.get('/:pid', patientsControllers.getPatientById);

router.get('/user/:uid', patientsControllers.getPatientByUserId);

router.use(checkAuth);

router.post(
  '/',
  fileUpload.single('image'),
  [
    check('firstname')
      .not()
      .isEmpty(),
    check('surname')
      .not()
      .isEmpty()
  ],
  patientsControllers.createPatient
);

router.patch(
  '/:pid',
  [
    check('title')
      .not()
      .isEmpty(),
    check('description').isLength({ min: 5 })
  ],
  patientsControllers.updatePatient
);

router.delete('/:pid', patientsControllers.deletePatient);

module.exports = router;
