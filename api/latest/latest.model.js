const mongoose = require("mongoose");

const latestSchema = new mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Latest", latestSchema);
