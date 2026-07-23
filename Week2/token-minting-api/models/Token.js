const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema(
    {
        walletAddress: {
            type: String,
            required: true,
        },
        tokenName: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Token", tokenSchema);