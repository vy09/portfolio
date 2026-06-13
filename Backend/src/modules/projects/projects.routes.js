const express = require("express");
const router = express.Router();
const projectsController = require("./projects.controller");
const {
  createProjectValidation,
  updateProjectValidation,
} = require("./projects.validation");
const { validateRequest } = require("../../middleware/validation.middleware");
const {
  authenticate,
  authorizeRole,
} = require("../../middleware/auth.middleware");

// Public routes
router.get("/", projectsController.getAll);
router.get("/:id", projectsController.getById);

// Protected routes (Admin only)
router.use(authenticate, authorizeRole("ADMIN")); // Apply to all routes below
router.post(
  "/",
  createProjectValidation,
  validateRequest,
  projectsController.create,
);
router.put(
  "/:id",
  updateProjectValidation,
  validateRequest,
  projectsController.update,
);
router.delete("/:id", projectsController.delete);

module.exports = router;
