const expressValidator = require("express-validator");
const { body } = expressValidator;

exports.validateTaskCreation = [
  body("title")
    .notEmpty()
    .withMessage("Title is required"),
  body("description")
    .notEmpty()
    .withMessage("Description is required"),
  body("dueDate")
    .notEmpty()
    .withMessage("Date is required"),
  body("priority")
    .isIn(["Low", "Medium", "High"])
    .withMessage("Invalid priority value")
]

// module.exports = validateTaskCreation;