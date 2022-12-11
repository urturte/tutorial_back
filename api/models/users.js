const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: { type: String, required: true, min: 10 },
  password: { type: String },
  regTimestamp: { type: Object },
});

module.exports = mongoose.model("User", userSchema);
