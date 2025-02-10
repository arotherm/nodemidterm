const MobileApp = require('../models/mobileapp');

// Get all mobileapps
const getAllApps = async (req, res) => {
    try {
        const mobileapp = await MobileApp.find();
        res.status(200).json(mobileapp);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single App by ID
const getAppById = async (req, res) => {
    try {
        const mobileapp = await MobileApp.findById(req.params.id);
        if (mobileapp) {
            res.status(200).json(mobileapp);
        } else {
            res.status(404).json({ message: 'Skill not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Create a new skill
const createMobileApp = async (req, res) => {
    const mobileapp = new MobileApp({
        name: req.body.name,
        description: req.body.description,
        level: req.body.level,
        yearsOfExperience: req.body.yearsOfExperience
    });

    try {
        const newMobileApp = await mobileapp.save();
        res.status(201).json(newMobileApp);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


// Update a app
const updateApp = async (req, res) => {
    try {
        const mobileapp = await MobileApp.findById(req.params.id);
        if (mobileapp) {
            Object.assign(mobileapp, req.body);
            const updatedApp = await mobileapp.save();
            res.status(200).json(updatedApp);
        } else {
            res.status(404).json({ message: 'The specified app was not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getAllApps,
    getAppById,
    createMobileApp,
    updateApp,

};
