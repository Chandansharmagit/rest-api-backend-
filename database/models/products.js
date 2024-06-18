const mongoose = require('mongoose');

const products_details = new mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   price: {
      type: Number,
      required: [true, "price must be provided"],
   },
   featured: {
      type: Boolean,
      default: true,
   },
   rating: {
      type: Number,
      default: 4.5,
   },
   createdAt: {
      type: Date,
      default: Date.now,
   },
   company: {
      type: String,
      enum: {
         values: ["apple", "samsung", "dell", "hp", "oneplus"],
         message: '{VALUE} is not supported',
      }
   }
});

const products_detailing = mongoose.model("Product_detailing", products_details);

module.exports = products_detailing;
