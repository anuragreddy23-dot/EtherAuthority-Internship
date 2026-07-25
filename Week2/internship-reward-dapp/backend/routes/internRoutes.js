const express = require("express");
const router = express.Router();

const {
  registerIntern,
  getInterns,
} = require("../controllers/internController");

// Register Intern
router.post("/", registerIntern);

// Get All Interns
router.get("/", getInterns);

module.exports = router;