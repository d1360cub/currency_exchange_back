const mongoose = require("mongoose");

const historicalSchema = new mongoose.Schema({
  disclaimer: {
    type: String,
  },
  license: {
    type: String,
  },
  timestamp: {
    type: Number,
    required: true,
  },
  base: {
    type: String,
    default: "USD",
  },
  rates: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("Historical", historicalSchema);
