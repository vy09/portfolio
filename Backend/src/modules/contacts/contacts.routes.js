const express = require("express");
const router = express.Router();
const contactsController = require("./contacts.controller");
const { createMessageValidation } = require("./contacts.validation");
const { validateRequest } = require("../../middleware/validation.middleware");
const {
  authenticate,
  authorizeRole,
} = require("../../middleware/auth.middleware");

// Public route (Users sending messages from portfolio)
router.post(
  "/",
  createMessageValidation,
  validateRequest,
  contactsController.create,
);

// Protected routes (Admin checking inbox)
router.use(authenticate, authorizeRole("ADMIN"));
router.get("/", contactsController.getAll);
router.patch("/:id/read", contactsController.markAsRead);
router.delete("/:id", contactsController.delete);

module.exports = router;
