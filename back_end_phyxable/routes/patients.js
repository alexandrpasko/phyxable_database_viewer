const express = require("express");
const router = express.Router();

// Get all patients
router.get("/", (req, res) => {});

// Create a new patient
router.post("/", (req, res) => {});

// Delete a patient
router.delete("/:id", (req, res) => {});

module.exports = router;
