const mongoose = require("mongoose");
const validator = require("validator");

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A tour must have a unique name"],
    unique: true,
    trim: true,
    //validate: [validator.isAlpha, "Tour name must only contain character"],
  },
  rating: {
    type: Number,
    default: 4.1,
    min: [1, "Rating must be above 1.0"],
    max: [5, "Rating must be below 5.0"],
    //validate: [validator.isInt, "Tour rating can be only Integer value"],
  },
  price: {
    type: Number,
    required: [true, "A tour must have a price"],
  },
});

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
