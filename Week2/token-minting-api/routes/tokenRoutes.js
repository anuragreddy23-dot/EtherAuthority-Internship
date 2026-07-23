const express = require("express");
const router = express.Router();

const {
    mintToken,
    getTokens,
    getTokenById,
    deleteToken,
} = require("../controllers/tokenController");

router.post("/mint", mintToken);
router.get("/", getTokens);
router.get("/:id", getTokenById);
router.delete("/:id", deleteToken);

module.exports = router;