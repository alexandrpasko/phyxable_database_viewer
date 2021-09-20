const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Patient", patientSchema);
