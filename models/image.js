const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  imageUrl: String,
});

const ImageModel = mongoose.model('images', ImageSchema);

module.exports = ImageModel;

