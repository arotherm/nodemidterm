const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const dotenv = require('dotenv');
dotenv.config()

const app = express();

// Middleware
app.use(express.json());

// Swagger configuration
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Mobile Apps Library RESTful API',
            version: '1.0.0',
            description: 'A REST API for managing apps',
        },
        servers: [
            {
                url: 'http://localhost:3178',
                description: 'Development server',
            },
        ],
    },
    apis: ['./routes/*.js'],
};




const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Serve Swagger documentation
app.use('/midterm-api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, { customCssUrl: CSS_URL }));





//MongoDB connection to midterm database
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

// Routes
const mobileAppRoutes = require('./routes/mobileapps');
app.use('/api/apps', mobileAppRoutes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});