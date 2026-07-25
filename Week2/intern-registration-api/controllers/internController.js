const Intern = require("../models/Intern");

// Register Intern

const registerIntern = async (req, res) => {
    try {

        const intern = await Intern.create(req.body);

        res.status(201).json({
            success: true,
            message: "Intern Registered Successfully",
            data: intern
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }
};

// Get All Interns

const getInterns = async (req, res) => {

    try {

        const interns = await Intern.find();

        res.json({
            success: true,
            count: interns.length,
            data: interns
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }
};

// Get Single Intern

const getIntern = async (req, res) => {

    try {

        const intern = await Intern.findById(req.params.id);

        if (!intern) {

            return res.status(404).json({
                message: "Intern Not Found"
            });

        }

        res.json(intern);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

// Update Intern

const updateIntern = async (req, res) => {

    try {

        const intern = await Intern.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json({
            success: true,
            data: intern
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

// Delete Intern

const deleteIntern = async (req, res) => {

    try {

        await Intern.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: "Intern Deleted Successfully"
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

module.exports = {
    registerIntern,
    getInterns,
    getIntern,
    updateIntern,
    deleteIntern
};