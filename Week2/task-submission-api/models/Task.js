const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
    {
        internName: {
            type: String,
            required: true,
        },

        taskTitle: {
            type: String,
            required: true,
        },

        githubLink: {
            type: String,
            required: true,
        },

        status: {
            type: String,
            enum: ["Pending", "Submitted", "Reviewed"],
            default: "Pending",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Task", taskSchema);