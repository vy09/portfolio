const authService = require("./auth.service");
const { successResponse, errorResponse } = require("../../utils/response");

class AuthController {
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const result = await authService.login(email, password);

      if (result.error) {
        return errorResponse(res, 401, result.error);
      }

      return successResponse(res, 200, "Login successful", result);
    } catch (error) {
      next(error); // Pass to global error handler
    }
  }

  async refreshToken(req, res, next) {
    try {
      const { refreshToken } = req.body;
      const result = await authService.refreshToken(refreshToken);

      if (result.error) {
        return errorResponse(res, 403, result.error);
      }

      return successResponse(res, 200, "Token refreshed successfully", result);
    } catch (error) {
      next(error);
    }
  }

  async logout(req, res, next) {
    try {
      // In a stateless JWT setup, logout on the backend is largely informational
      // since the client deletes the token. If you used Redis or a DB table for token blacklisting,
      // it would happen here. For now, we just return success.
      return successResponse(res, 200, "Logout successful");
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AuthController();
