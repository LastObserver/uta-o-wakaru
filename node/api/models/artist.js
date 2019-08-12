const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
  name: String,
}, { versionKey: false });

module.exports = mongoose.model('Artist', ArtistSchema);
