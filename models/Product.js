const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: String,
  price: Number,
  quantity: Number,
  image: {
    type: String,
    default: "data:image/jpeg;base64,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"
  }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;