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
            res.status(404).json({ message: 'App not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Create a new mobile App entry
const createMobileApp = async (req, res) => {
    const mobileapp = new MobileApp({
        name: req.body.name,
        description: req.body.description,
        rating: req.body.rating,
        developer: req.body.developer,
        price: req.body.price
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


// Delete an app
const deleteApp = async (req, res) => {
    try {
        const mobileapp = await MobileApp.findById(req.params.id);
        if (mobileapp) {
            await mobileapp.deleteOne();
            res.status(200).json({ message: 'Mobile App deleted successfully' });
        } else {
            res.status(404).json({ message: 'Mobile App not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



module.exports = {
    getAllApps,
    getAppById,
    createMobileApp,
    updateApp,
    deleteApp
};