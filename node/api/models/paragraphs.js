const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParagraphsSchema = new Schema({
  japanese: [String],
  romanji: [String],
  translation: [String],
}, { versionKey: false });

module.exports = mongoose.model('Paragraphs', ParagraphsSchema);
