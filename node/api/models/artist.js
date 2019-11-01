const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
  name: String,
}, { versionKey: false });

ArtistSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

ArtistSchema.set('toJSON', {
  virtuals: true,
});

module.exports = mongoose.model('Artist', ArtistSchema);
