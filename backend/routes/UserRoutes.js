const express = require('express');
const router = express.Router();

// Controler
const {register, login, getCurrentUser, update, getUserById} = require('../controllers/UseController');

// Middlewares
const validate = require('../middlewares/handleValidation');
const {userCreateValidation, loginValidation, userUpdateValidation} = require('../middlewares/userValidations');
const authGuard = require('../middlewares/authGuard');
const {imageUploads} = require('../middlewares/imageUpload');

// Routes
router.post('/register', userCreateValidation(), validate, register);
router.post('/login', loginValidation(), validate, login);
router.get('/profile', authGuard, getCurrentUser);
router.put('/', authGuard, userUpdateValidation(), validate, imageUploads.single('profileImage'), update)
router.get('/:id', getUserById);

module.exports = router;
