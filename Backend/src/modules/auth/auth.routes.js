const express = require("express");
const router = express.Router();
const authController = require("./auth.controller");
const {
  loginValidation,
  refreshTokenValidation,
} = require("./auth.validation");
const { validateRequest } = require("../../middleware/validation.middleware");
const { authLimiter } = require("../../middleware/rateLimit.middleware");

// We apply authLimiter specifically for login to protect against Brute-Force/Credential Stuffing
router.post(
  "/login",
  authLimiter,
  loginValidation,
  validateRequest,
  authController.login,
);
router.post(
  "/refresh-token",
  refreshTokenValidation,
  validateRequest,
  authController.refreshToken,
);
router.post("/logout", authController.logout);

module.exports = router;
