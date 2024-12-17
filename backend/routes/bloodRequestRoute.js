const express = require("express");
const BloodRequest = require("../models/BloodRequest");
const router = express.Router();

router.post("/add-request", async (req, res) => {
  const { patientName, bloodGroup, contactNumber, urgencyLevel } = req.body;
  console.log(req.body);
  try {
    const newRequest = new BloodRequest({
      patientName,
      bloodGroup,
      contactNumber,
      urgencyLevel,
    });
    await newRequest.save();
    res.status(201).json({ message: "Blood request added successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to add blood request", error });
  }
});

router.get("/", async (req, res) => {
  try {
    const requests = await BloodRequest.find();
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch blood requests", error });
  }
});

module.exports = router;
