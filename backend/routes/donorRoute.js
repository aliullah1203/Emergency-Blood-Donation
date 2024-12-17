const express = require("express");
const Donor = require("../models/Donor");
const router = express.Router();

// Add a new donor
router.post("/add-donor", async (req, res) => {
  const { name, bloodGroup, email, phone, address } = req.body;
  console.log(req.body);

  try {
    const newDonor = new Donor({
      name,
      bloodGroup,
      email,
      phone,
      address,
    });
    await newDonor.save();
    res.status(201).json({ message: "Donor added successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add donor", error: error.message });
  }
});

// Get all donors
router.get("/", async (req, res) => {
  try {
    const donors = await Donor.find();
    res.status(200).json(donors);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch donors", error });
  }
});

module.exports = router;
