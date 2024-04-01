const cors = require("cors");
const express = require("express");

module.exports = (app) => {
  // Enable CORS
  app.use(cors());

  // Parse JSON
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
}