const mongoose = require("mongoose");

const latestSchema = new mongoose.Schema({
  disclaimer: {
    type: String,
  },
  license: {
    type: String,
  },
  timestamp: {
    type: number,
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

module.exports = mongoose.model("Latest", latestSchema);
