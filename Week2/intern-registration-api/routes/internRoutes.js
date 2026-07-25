const express = require("express");

const router = express.Router();

const {
    registerIntern,
    getInterns,
    getIntern,
    updateIntern,
    deleteIntern
} = require("../controllers/internController");

router.post("/", registerIntern);

router.get("/", getInterns);

router.get("/:id", getIntern);

router.put("/:id", updateIntern);

router.delete("/:id", deleteIntern);

module.exports = router;