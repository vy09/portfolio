const express = require("express");
const router = express.Router();
const dashboardController = require("./dashboard.controller");
const {
  authenticate,
  authorizeRole,
} = require("../../middleware/auth.middleware");

// Protected route (Admin only)
router.use(authenticate, authorizeRole("ADMIN"));
router.get("/statistics", dashboardController.getStatistics);

module.exports = router;
