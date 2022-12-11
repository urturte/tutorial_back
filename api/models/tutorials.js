const mongoose = require("mongoose");

const tutorialSchema = mongoose.Schema({
  userId: { type: String },
  title: { type: String, required: true },
  content: { type: String, required: true, min: 20 },
  private: { type: Boolean, required: true },
});

module.exports = mongoose.model("Tutorial", tutorialSchema);
