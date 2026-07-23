const mongoose = require("mongoose");

const internSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        phone: {
            type: String,
            required: true,
        },
        college: {
            type: String,
            required: true,
        },
        department: {
            type: String,
            required: true,
        },
        year: {
            type: Number,
            required: true,
        },
        skills: {
            type: [String],
            default: [],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Intern", internSchema);