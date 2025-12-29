const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  
  // FIXED IMAGE FIELD
  image: {
    filename: String,
    url: String
  },

  price: Number,
  location: String,
  country: String,
});

module.exports = mongoose.model("Listing", listingSchema);