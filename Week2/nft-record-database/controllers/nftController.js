const NFT = require("../models/NFT");

// Create NFT Record
exports.createNFT = async (req, res) => {
    try {
        const nft = await NFT.create(req.body);
        res.status(201).json(nft);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get All NFT Records
exports.getNFTs = async (req, res) => {
    try {
        const nfts = await NFT.find();
        res.json(nfts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get NFT by ID
exports.getNFTById = async (req, res) => {
    try {
        const nft = await NFT.findById(req.params.id);

        if (!nft) {
            return res.status(404).json({ message: "NFT not found" });
        }

        res.json(nft);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update NFT
exports.updateNFT = async (req, res) => {
    try {
        const nft = await NFT.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });

        if (!nft) {
            return res.status(404).json({ message: "NFT not found" });
        }

        res.json(nft);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete NFT
exports.deleteNFT = async (req, res) => {
    try {
        const nft = await NFT.findById(req.params.id);

        if (!nft) {
            return res.status(404).json({ message: "NFT not found" });
        }

        await nft.deleteOne();

        res.json({ message: "NFT deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};