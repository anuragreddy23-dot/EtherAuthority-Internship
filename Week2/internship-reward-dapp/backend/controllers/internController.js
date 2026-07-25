const Intern = require("../models/Intern");

// Register Intern
exports.registerIntern = async (req, res) => {
  try {
    const intern = await Intern.create(req.body);

    res.status(201).json({
      success: true,
      message: "Intern Registered Successfully",
      data: intern,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Interns
exports.getInterns = async (req, res) => {
  try {
    const interns = await Intern.find();

    res.status(200).json({
      success: true,
      count: interns.length,
      data: interns,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};