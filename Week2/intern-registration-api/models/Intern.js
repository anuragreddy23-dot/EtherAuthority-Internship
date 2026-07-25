const mongoose = require("mongoose");

const internSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    phone: {
        type: String,
        required: true
    },

    college: {
        type: String,
        required: true
    },

    course: {
        type: String,
        required: true
    },

    year: {
        type: Number,
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Intern", internSchema);