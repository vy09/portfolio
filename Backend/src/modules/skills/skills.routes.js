const express = require("express");
const router = express.Router();
const skillsController = require("./skills.controller");
const {
  createSkillValidation,
  updateSkillValidation,
} = require("./skills.validation");
const { validateRequest } = require("../../middleware/validation.middleware");
const {
  authenticate,
  authorizeRole,
} = require("../../middleware/auth.middleware");

// Public routes
router.get("/", skillsController.getAll);
router.get("/:id", skillsController.getById);

// Protected routes (Admin only)
router.use(authenticate, authorizeRole("ADMIN"));
router.post(
  "/",
  createSkillValidation,
  validateRequest,
  skillsController.create,
);
router.put(
  "/:id",
  updateSkillValidation,
  validateRequest,
  skillsController.update,
);
router.delete("/:id", skillsController.delete);

module.exports = router;
