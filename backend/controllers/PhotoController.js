const Photo = require('../models/Photo');
const User = require('../models/User');

const mongoose = require('mongoose');

// Insert a photo, with an user related to it
const insertPhoto = async(req, res) => {
  const {title} = req.body;
  const image = req.file.filename;

  const reqUser = req.user;

  const user = await User.findById(reqUser._id);

  // Create a photo
  const newPhoto = await Photo.create({
    image,
    title,
    userId: user._id,
    username: user.name
  });

  // If photo was createed sucessfully, return data
  if(!newPhoto){
    res.status(422).json({errors: ['Houve um problema, por favor tente novamente mais tarde']});
    return;
  }

  res.send(newPhoto);
};

// Remove a photo from DB
const deletePhoto = async (req, res) => {
  const {id} = req.params;

  const reqUser = req.user;

  try{

    const photo = await Photo.findById(id);

    // Check if photo exists
    if(!photo){
      res.status(404).json({errors: ['Foto não encontrada 1']});
      return;
    }

    // Check is photo belongs to user
    if(!photo.userId.equals(reqUser._id)){
      res.status(422).json({errors: ['Occoreu um erro, por favor tente novamente mais tarde!']});
      return;
    }

    await Photo.findByIdAndDelete(photo._id);

    res.status(200).json({id: photo._id, message: 'Foto excluída com sucesso!'});

  } catch(error){
    res.status(404).json({errors: ['Photo não encontrada 2']});
    return;
  }

};

// Get all photos
const getAllPhotos = async (req, res) => {
  const photos = await Photo.find({}).sort([['createdAt', -1]]).exec();

  return res.status(200).json(photos);
};

module.exports = {
  insertPhoto,
  deletePhoto,
  getAllPhotos
}
