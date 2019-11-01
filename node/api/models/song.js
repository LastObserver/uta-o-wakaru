const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SongSchema = new Schema({
  name: String,
  year: Number,
  artistId: Schema.Types.ObjectId,
  paragraphId: Schema.Types.ObjectId,
}, { versionKey: false });

SongSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

SongSchema.set('toJSON', {
  virtuals: true,
});

module.exports = mongoose.model('Song', SongSchema);
