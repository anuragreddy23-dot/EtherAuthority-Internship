const Intern = require("../models/Intern");

// Register Intern
exports.createIntern = async (req, res) => {
    try {
        console.log("Request Body:", req.body);

        const intern = await Intern.create(req.body);

        res.status(201).json(intern);
    } catch (err) {
        console.error("Create Intern Error:", err);

        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

// Get All Interns
exports.getInterns = async (req, res) => {
    try {
        const interns = await Intern.find();

        res.json(interns);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get One Intern
exports.getIntern = async (req, res) => {
    try {
        const intern = await Intern.findById(req.params.id);

        if (!intern) {
            return res.status(404).json({
                message: "Intern not found"
            });
        }

        res.json(intern);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update Intern
exports.updateIntern = async (req, res) => {
    try {
        const intern = await Intern.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(intern);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete Intern
exports.deleteIntern = async (req, res) => {
    try {
        await Intern.findByIdAndDelete(req.params.id);

        res.json({
            message: "Intern Deleted"
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};