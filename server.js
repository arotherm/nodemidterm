const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const dotenv = require('dotenv');
dotenv.config()

const app = express();

// Swagger configuration
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Mobile Apps Library RESTful API',
            version: '1.3.3.7.',
            description: 'A REST API for managing skills',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Development server',
            },
        ],
    },
    apis: ['./controllers/*.js']
};


// Middleware
app.use(express.json());

//MongoDB connection to midterm.midterm

mongoose.connect(process.env.DBURL, {
    serverSelectionTimeoutMS: 5000,
    family: 4
})
    .then(() => {
        console.log('Successfully connected to MongoDB.');
    })
    .catch(error => {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});