// src/config/swagger.js
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import path from "path"; // <--- ADD THIS
import { fileURLToPath } from "url"; // <--- ADD THIS for ES modules

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); // This is now 'src/config'

// Swagger definition
const swaggerDefinition = {
  openapi: "3.0.0", // version of Swagger
  info: {
    title: "My API", // title of your API
    version: "1.0.0", // API version
    description: "A simple Express API", // description of the API
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT || 5001}`, // URL to the API
    },
  ],
};

// Options for SwaggerJSDoc
// const options = {
//   swaggerDefinition,
//   // apis: ["./src/routes/**/*.js"], // path to the API docs
//   apis: ["./src/routes/*.js"],
// };

const options = {
  swaggerDefinition,
  apis: [path.join(__dirname, "../routes/*.js")], // Resolves to /backend/src/routes/*.js
};

// Initialize SwaggerJSDoc
const swaggerSpec = swaggerJSDoc(options);

export { swaggerUi, swaggerSpec };
