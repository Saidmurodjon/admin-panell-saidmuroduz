const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  Name: String,
  phone: { type: Number, min: 18, index: true },
  email: { type: String, min: 18, index: true },
  Description: String,
});
module.exports = mongoose.model("User", UserSchema);
