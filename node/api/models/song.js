const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SongSchema = new Schema({
  name: String,
  year: Number,
  artistId: Schema.Types.ObjectId,
  paragraphId: Schema.Types.ObjectId,
}, { versionKey: false });

module.exports = mongoose.model('Song', SongSchema);
