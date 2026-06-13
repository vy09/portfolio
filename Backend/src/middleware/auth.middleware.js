const { verifyAccessToken } = require("../utils/jwt");
const { errorResponse } = require("../utils/response");

const authenticate = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return errorResponse(res, 401, "Unauthorized: No token provided");
    }

    const token = authHeader.split(" ")[1];
    const decoded = verifyAccessToken(token);

    req.user = decoded; // { id, email, role } based on our payload
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return errorResponse(res, 401, "Unauthorized: Token expired");
    }
    return errorResponse(res, 401, "Unauthorized: Invalid token");
  }
};

const authorizeRole = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return errorResponse(res, 403, "Forbidden: Insufficient permissions");
    }
    next();
  };
};

module.exports = {
  authenticate,
  authorizeRole,
};
