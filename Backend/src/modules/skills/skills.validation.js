const { body } = require("express-validator");

const createSkillValidation = [
  body("name").trim().notEmpty().withMessage("Skill name is required"),
  body("category").trim().notEmpty().withMessage("Category is required"),
  body("percentage")
    .isInt({ min: 0, max: 100 })
    .withMessage("Percentage must be an integer between 0 and 100"),
  body("icon").optional().isString().withMessage("Icon must be a string"),
];

const updateSkillValidation = [
  body("name")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Skill name cannot be empty"),
  body("category")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Category cannot be empty"),
  body("percentage")
    .optional()
    .isInt({ min: 0, max: 100 })
    .withMessage("Percentage must be an integer between 0 and 100"),
  body("icon").optional().isString().withMessage("Icon must be a string"),
];

module.exports = {
  createSkillValidation,
  updateSkillValidation,
};
