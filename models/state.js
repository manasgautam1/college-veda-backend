const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  coverImage: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const State = mongoose.model("State", stateSchema);

module.exports = State;
