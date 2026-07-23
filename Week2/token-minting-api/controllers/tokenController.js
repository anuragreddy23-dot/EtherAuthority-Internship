const Token = require("../models/Token");

// Mint Token
exports.mintToken = async (req, res) => {
    try {
        const token = await Token.create(req.body);

        res.status(201).json(token);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get All Tokens
exports.getTokens = async (req, res) => {
    try {
        const tokens = await Token.find();

        res.json(tokens);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Token by ID
exports.getTokenById = async (req, res) => {
    try {
        const token = await Token.findById(req.params.id);

        if (!token)
            return res.status(404).json({ message: "Token not found" });

        res.json(token);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete Token
exports.deleteToken = async (req, res) => {
    try {
        const token = await Token.findById(req.params.id);

        if (!token)
            return res.status(404).json({ message: "Token not found" });

        await token.deleteOne();

        res.json({ message: "Token deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};