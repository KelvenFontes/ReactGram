const multer = require('multer');
const path = require('path');

// Destination to storage image
const imageStorage = multer.diskStorage({
  destination: function(req, file, cb){
    let folder = ''

    if(req.baseUrl.includes('users')){
      folder = 'users';
    } else if(req.baseUrl.includes('photos')){
      folder = 'photos';
    }

    cb(null, `uploads/${folder}/`);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }

});

const imageUploads = multer({
  storage: imageStorage,
  fileFilter(req, res, cb){
    if(!file.originalname.math(/\.(png|jpg)$/)){
      // upload only png and jpg format
      return cb(new Error('Por favor, envie apenas png ou jpg'));
    }
    cb(undefined, true);
  }
});

mudule.exports = {imageUploads};
