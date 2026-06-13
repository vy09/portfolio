const { errorResponse } = require("../utils/response");
const env = require("../config/env");

const errorHandler = (err, req, res, next) => {
  // Log the error for internal debugging
  if (env.nodeEnv === "development") {
    console.error(`[ERROR]: ${err.message}`, err.stack);
  } else {
    console.error(`[ERROR]: ${err.message}`);
  }

  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  // Prisma Specific Errors
  if (err.name === "PrismaClientKnownRequestError") {
    // Unique constraint violation (e.g., Duplicate Email)
    if (err.code === "P2002") {
      statusCode = 409;
      message = "A record with that value already exists.";
    }
    // Record not found
    if (err.code === "P2025") {
      statusCode = 404;
      message =
        "Operation failed because it depends on one or more records that were required but not found.";
    }
  }

  // Hide stack trace in production for security
  const errors = env.nodeEnv === "development" ? err.stack : null;

  return errorResponse(res, statusCode, message, errors);
};

module.exports = {
  errorHandler,
};
