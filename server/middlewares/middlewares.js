const cors = require("cors");
const { json, urlencoded } = require("express");

module.exports = (app) => {
  // Enable CORS
  app.use(cors());

  // Parse JSON
  app.use(json());
  app.use(urlencoded({ extended: true }));
}