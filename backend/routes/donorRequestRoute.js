const express = require("express");
const DonorRequest = require("../models/DonorRequest");
const router = express.Router();

router.post("/add-request", async (req, res) => {
  const { donorId, availabilityDate } = req.body;

  try {
    const newRequest = new DonorRequest({ donorId, availabilityDate });
    await newRequest.save();
    res.status(201).json({ message: "Donor request added successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to add donor request", error });
  }
});

router.get("/", async (req, res) => {
  try {
    const requests = await DonorRequest.find().populate("donorId");
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch donor requests", error });
  }
});

module.exports = router;
