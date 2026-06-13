const { body } = require("express-validator");

const createCertificationValidation = [
  body("name").trim().notEmpty().withMessage("Certification name is required"),
  body("issuer").trim().notEmpty().withMessage("Issuer is required"),
  body("issueDate")
    .isISO8601()
    .toDate()
    .withMessage("Issue date must be a valid ISO8601 date"),
  body("credentialUrl")
    .optional()
    .isURL()
    .withMessage("Credential URL must be a valid URL"),
  body("imageUrl")
    .optional()
    .isURL()
    .withMessage("Image URL must be a valid URL"),
];

const updateCertificationValidation = [
  body("name")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Certification name cannot be empty"),
  body("issuer")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Issuer cannot be empty"),
  body("issueDate")
    .optional()
    .isISO8601()
    .toDate()
    .withMessage("Issue date must be a valid ISO8601 date"),
  body("credentialUrl")
    .optional()
    .isURL()
    .withMessage("Credential URL must be a valid URL"),
  body("imageUrl")
    .optional()
    .isURL()
    .withMessage("Image URL must be a valid URL"),
];

module.exports = {
  createCertificationValidation,
  updateCertificationValidation,
};
