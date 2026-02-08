// models/Ngo.js
const mongoose = require("mongoose");

const ngoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sector: { type: String, required: true },
  focus: { type: String },
  otherCauses: { type: String },
  description: { type: String },
  volunteerInfo: { type: String },
  location: { type: String },
  website: { type: String },
  verified: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model("Ngo", ngoSchema);
