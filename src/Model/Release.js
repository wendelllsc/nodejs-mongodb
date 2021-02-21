const mongoose = require("mongoose");

const release = new mongoose.Schema({
    value: {
      type: Number,
      required: true,
    },
    releaseType: {
      type: String,
      required: true,
    },
    origin: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

const releaseModel = mongoose.model('Release', release);

module.exports = releaseModel;
