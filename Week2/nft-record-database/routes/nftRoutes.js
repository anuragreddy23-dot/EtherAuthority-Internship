const express = require("express");

const router = express.Router();

const {
    createNFT,
    getNFTs,
    getNFTById,
    updateNFT,
    deleteNFT,
} = require("../controllers/nftController");

router.post("/", createNFT);

router.get("/", getNFTs);

router.get("/:id", getNFTById);

router.put("/:id", updateNFT);

router.delete("/:id", deleteNFT);

module.exports = router;