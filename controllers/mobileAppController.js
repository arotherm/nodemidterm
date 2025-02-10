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

