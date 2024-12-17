const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
console.log("PORT:", process.env.PORT);
console.log("MONGO_URI:", process.env.MONGO_URI);

const app = express();

// Middleware
app.use(cors()); // Allow Cross-Origin Requests
app.use(express.json()); // Parse incoming JSON requests

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Routes
app.use("/api/donor-requests", require("./routes/donorRequestRoute"));
app.use("/api/donors", require("./routes/bloodRequestRoute.js"));
app.use("/api/donors/add", require("./routes/donorRoute.js"));

// Port Setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
