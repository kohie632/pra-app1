//mongoose 参照
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const ProductScheme = new Schema({
  // author: ObjectId,
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
});

module.exports = mongoose.model('Product', ProductScheme)