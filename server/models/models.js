const mongoose = require("mongoose");

// const productSchema = mongoose.Schema({
//     title : String,
//     price:  String,
//     category: String,
//     description: String,
// })

// const mongoose = require("mongoose")

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    photo: {
      type: String,
    },
    category: {
      type: String,
    },
    price: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("message", productSchema);
