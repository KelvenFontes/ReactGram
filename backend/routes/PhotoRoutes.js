const express = require('express');
const router = express.Router();

// Controller
const { insertPhoto, deletePhoto, getAllPhotos } = require('../controllers/PhotoController');

// Middlewares
const { photoInsertValidation } = require('../middlewares/photoValidation');
const authGuard = require('../middlewares/authGuard');
const validate = require('../middlewares/handleValidation');
const { imageUploads } = require('../middlewares/imageUpload');

// Routes
router.post('/', authGuard, imageUploads.single('image'), photoInsertValidation(), validate, insertPhoto);
router.delete('/:id', authGuard, deletePhoto);
router.get('/', authGuard, getAllPhotos);

module.exports = router;
