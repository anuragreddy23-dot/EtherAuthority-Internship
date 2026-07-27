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

        walletAddress: {
            type: String,
            required: true
        },

        rewardPoints: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Intern", internSchema);