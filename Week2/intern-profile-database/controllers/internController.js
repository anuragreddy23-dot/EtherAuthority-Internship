const Intern = require("../models/Intern");

// Create Intern
exports.createIntern = async (req, res) => {
    try {
        const intern = await Intern.create(req.body);

        res.status(201).json(intern);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get All Interns
exports.getInterns = async (req, res) => {
    try {
        const interns = await Intern.find();

        res.json(interns);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Intern by ID
exports.getInternById = async (req, res) => {
    try {
        const intern = await Intern.findById(req.params.id);

        if (!intern)
            return res.status(404).json({
                message: "Intern not found",
            });

        res.json(intern);
    } catch (error) {
        res.status(500).json({ message: error.message });
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

        if (!intern)
            return res.status(404).json({
                message: "Intern not found",
            });

        res.json(intern);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete Intern
exports.deleteIntern = async (req, res) => {
    try {
        const intern = await Intern.findById(req.params.id);

        if (!intern)
            return res.status(404).json({
                message: "Intern not found",
            });

        await intern.deleteOne();

        res.json({
            message: "Intern deleted successfully",
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};