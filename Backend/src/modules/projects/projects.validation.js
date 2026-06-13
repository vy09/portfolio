const { body } = require("express-validator");

const createProjectValidation = [
  body("title").trim().notEmpty().withMessage("Title is required"),
  body("description").trim().notEmpty().withMessage("Description is required"),
  body("technologies")
    .isArray({ min: 1 })
    .withMessage("Technologies must be an array with at least one item"),
  body("imageUrl")
    .optional()
    .isURL()
    .withMessage("Image URL must be a valid URL"),
  body("githubUrl")
    .optional()
    .isURL()
    .withMessage("GitHub URL must be a valid URL"),
  body("liveUrl")
    .optional()
    .isURL()
    .withMessage("Live URL must be a valid URL"),
  body("isFeatured")
    .optional()
    .isBoolean()
    .withMessage("isFeatured must be a boolean value"),
];

const updateProjectValidation = [
  body("title")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Title cannot be empty"),
  body("description")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Description cannot be empty"),
  body("technologies")
    .optional()
    .isArray({ min: 1 })
    .withMessage("Technologies must be an array with at least one item"),
  body("imageUrl")
    .optional()
    .isURL()
    .withMessage("Image URL must be a valid URL"),
  body("githubUrl")
    .optional()
    .isURL()
    .withMessage("GitHub URL must be a valid URL"),
  body("liveUrl")
    .optional()
    .isURL()
    .withMessage("Live URL must be a valid URL"),
  body("isFeatured")
    .optional()
    .isBoolean()
    .withMessage("isFeatured must be a boolean value"),
];

module.exports = {
  createProjectValidation,
  updateProjectValidation,
};
