const express = require("express");
const router = express.Router();
const aboutController = require("./about.controller");
const { upsertAboutValidation } = require("./about.validation");
const { validateRequest } = require("../../middleware/validation.middleware");
const {
  authenticate,
  authorizeRole,
} = require("../../middleware/auth.middleware");

// Public route
router.get("/", aboutController.getProfile);

// Protected routes (Admin only)
router.put(
  "/",
  authenticate,
  authorizeRole("ADMIN"),
  upsertAboutValidation,
  validateRequest,
  aboutController.upsertProfile,
);

module.exports = router;
