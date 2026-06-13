const { body } = require("express-validator");

const upsertAboutValidation = [
  body("name").trim().notEmpty().withMessage("Name is required"),
  body("title").trim().notEmpty().withMessage("Title is required"),
  body("bio").trim().notEmpty().withMessage("Bio is required"),
  body("profileImage")
    .optional()
    .isURL()
    .withMessage("Profile image must be a valid URL"),
  body("resumeUrl")
    .optional()
    .isURL()
    .withMessage("Resume URL must be a valid URL"),
];

module.exports = {
  upsertAboutValidation,
};
