const express = require("express");
const router = express.Router();
const Patient = require("../models/patient");

// Get all patients
router.get("/", async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new patient
router.post("/", async (req, res) => {
  const patient = new Patient({
    email: req.body.email,
  });
  try {
    const newPatient = await patient.save();
    res.status(201).json(newPatient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a patient
router.delete("/:id", getPatient, async (req, res) => {
  try {
    await res.patient.remove();
    res.json({ message: "Deleted Patient" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Reusable helper function for other APIs (if needed)
async function getPatient(req, res, next) {
  let patient;
  try {
    patient = await Patient.findById(req.params.id);
    if (patient == null) {
      return res.status(404).json({ message: "Cannot find the patient" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.patient = patient;
  next();
}

module.exports = router;
