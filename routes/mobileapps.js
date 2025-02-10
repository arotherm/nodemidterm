const express = require('express');
const router = express.Router();
const { getAllApps, getAppById, createApp, updateApp, deleteApp } = require('../controllers/mobileAppController');

/**
 * @swagger
 * /api/Apps:
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
 * /api/Apps/{id}:
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
router.get('/:id', getAppById());

/**
 * @swagger
 * /api/Apps:
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
router.post('/', createApp);

/**
 * @swagger
 * /api/Apps/{id}:
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
 * /api/Apps/{id}:
 *   delete:
 *     summary: Delete a App by id
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
 *         - level
 *         - yearsOfExperience
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the App
 *         description:
 *           type: string
 *           description: Detailed description of the App
 *         level:
 *           type: number
 *           minimum: 1
 *           maximum: 10
 *           description: Proficiency level (1-10)
 *         yearsOfExperience:
 *           type: number
 *           minimum: 0
 *           description: Years of experience in this App
 */

module.exports = router;