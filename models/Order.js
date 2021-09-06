const mongoose = require("mongoose");

const { Schema } = mongoose;

const OrderSchema = new Schema({
  description: {
    type: String,
    required: [true, "please enter order description"],
    max: [100, "max 100 chars are allowed for the description"],
  },
  price: {
    type: Number,
    required: [true, "please enter order price"],
    max: 100,
  },
  userId: {
    type: String,
    required: [true, "please enter userId"],
    max: [50, "please enter userId"],
  },
});

module.exports = mongoose.model("Order", OrderSchema);
