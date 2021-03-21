const express = require('express');
const cors = require("cors");

const app = express();
const db = require('./config/db');
const apiRouter = require('./routes/api');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', apiRouter);

app.listen(3000, () => {
    console.log('Server runnig');
});

// app.js
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {

  openapi: '3.0.0',
  info: {
    title: 'Sistemas de Información I',
    version: '1.0.0',
    description:
      'This is a REST API application made with Express. It retrieves data from JSONPlaceholder.',
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
    contact: {
      name: 'JSONPlaceholder',
      url: 'https://jsonplaceholder.typicode.com',
    },
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
  ],
  components: {
      schemas: {

      },
      securitySchemes: {
          Bearer: {
              type: "http",
              description: "Enter JWT Bearer token **_only_**",
              scheme: "bearer",
              bearerFormat: "JWT"
          },
          BasicAuth: {
              type: "http",
              scheme: "basic"
          }
      }
  }



};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./routes/*.js', './routes/api/company.route.js', './routes/api/user.route.js', './routes/api/organization.route.js']
};

const swaggerSpec = swaggerJSDoc(options);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));