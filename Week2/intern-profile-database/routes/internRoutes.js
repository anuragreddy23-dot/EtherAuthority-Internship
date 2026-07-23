const express = require("express");

const router = express.Router();

const {
    createIntern,
    getInterns,
    getInternById,
    updateIntern,
    deleteIntern,
} = require("../controllers/internController");

router.post("/", createIntern);

router.get("/", getInterns);

router.get("/:id", getInternById);

router.put("/:id", updateIntern);

router.delete("/:id", deleteIntern);

module.exports = router;