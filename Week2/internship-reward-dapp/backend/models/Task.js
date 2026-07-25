const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    internId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Intern",
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    githubLink: {
      type: String,
      required: true,
    },

    status: {
    type: String,
    default: "Pending",
},

    reward: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", taskSchema);