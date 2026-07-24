const mongoose = require("mongoose");

const nftSchema = new mongoose.Schema(
    {
        tokenId: {
            type: Number,
            required: true,
            unique: true,
        },
        owner: {
            type: String,
            required: true,
        },
        nftName: {
            type: String,
            required: true,
        },
        metadataURI: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("NFT", nftSchema);