const express = require('express');
const router = express.Router();

// Controller
const { insertPhoto } = require('../controllers/PhotoController');

// Middlewares
const { photoInsertValidation } = require('../middlewares/photoValidation');
const authGuard = require('../middlewares/authGuard');
const validate = require('../middlewares/handleValidation');
const { imageUploads } = require('../middlewares/imageUpload');

// Routes
router.post('/', authGuard, imageUploads.single('image'), photoInsertValidation(), validate, insertPhoto);

module.exports = router;
