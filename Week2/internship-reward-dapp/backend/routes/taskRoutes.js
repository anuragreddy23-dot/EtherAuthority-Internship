const express = require("express");
const router = express.Router();

const {
  submitTask,
  getTasks,
  approveTask,
} = require("../controllers/taskController");

// Submit Task
router.post("/", submitTask);

// Get All Tasks
router.get("/", getTasks);

// Approve Task
router.put("/:id/approve", approveTask);

module.exports = router;