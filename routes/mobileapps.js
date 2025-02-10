const express = require('express');
const router = express.Router();
const { getAllApps, getAppById, createApp, updateApp, deleteApp } = require('../controllers/mobileAppController.js');
const {createMobileApp} = require("../controllers/mobileAppController");

/**
 * @swagger
 * /api/apps:
 *   get:
 *     summary: Retrieve all Apps
 *     tags: [Apps]
 *     responses:
 *       200:
 *         description: A list of Apps
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/MobileApp'
 */

router.get('/', getAllApps);

/**
 * @swagger
 * /api/apps/{id}:
 *   get:
 *     summary: Get a mobile app by id
 *     tags: [Apps]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The mobile app id
 *     responses:
 *       200:
 *         description: App details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MobileApp'
 *       404:
 *         description: App not found
 */
router.get('/:id', getAppById);

/**
 * @swagger
 * /api/apps:
 *   post:
 *     summary: Create a new App
 *     tags: [Apps]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MobileApp'
 *     responses:
 *       201:
 *         description: App created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/', createMobileApp);

/**
 * @swagger
 * /api/apps/{id}:
 *   put:
 *     summary: Update a App by id
 *     tags: [Apps]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The App id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MobileApp'
 *     responses:
 *       200:
 *         description: App updated successfully
 *       404:
 *         description: App not found
 */
router.put('/:id', updateApp);

/**
 * @swagger
 * /api/apps/{id}:
 *   delete:
 *     summary: Delete an App by id
 *     tags: [Apps]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The App id
 *     responses:
 *       200:
 *         description: App deleted successfully
 *       404:
 *         description: App not found
 */
router.delete('/:id', deleteApp);

/**
 * @swagger
 * components:
 *   schemas:
 *     MobileApp:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - developer
 *         - price
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the App
 *         description:
 *           type: string
 *           description: Detailed description of the App
 *         rating:
 *           type: number
 *           minimum: 1
 *           maximum: 10
 *           description: Rating (1-10)
 *         developer:
 *           type: string
 *           description: Who made the app
 *         price:
 *           type: number
 *           minimum: 0
 *           maximum: 9999
 *
 */

module.exports = router;