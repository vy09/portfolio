const express = require("express");
const router = express.Router();
const certificationsController = require("./certifications.controller");
const {
  createCertificationValidation,
  updateCertificationValidation,
} = require("./certifications.validation");
const { validateRequest } = require("../../middleware/validation.middleware");
const {
  authenticate,
  authorizeRole,
} = require("../../middleware/auth.middleware");

// Public routes
router.get("/", certificationsController.getAll);
router.get("/:id", certificationsController.getById);

// Protected routes (Admin only)
router.use(authenticate, authorizeRole("ADMIN"));
router.post(
  "/",
  createCertificationValidation,
  validateRequest,
  certificationsController.create,
);
router.put(
  "/:id",
  updateCertificationValidation,
  validateRequest,
  certificationsController.update,
);
router.delete("/:id", certificationsController.delete);

module.exports = router;
