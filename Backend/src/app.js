const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");
const env = require("./config/env");
const { apiLimiter } = require("./middleware/rateLimit.middleware");
const { errorHandler } = require("./middleware/error.middleware");

const app = express();

// Security and utility middleware
app.use(helmet()); // Sets secure HTTP headers
app.use(cors({ origin: env.corsOrigin, credentials: true }));
app.use(express.json({ limit: "10mb" })); // Parses incoming JSON and limits payload size
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Serve the admin dashboard UI
app.use(
  "/dashboard",
  express.static(path.join(__dirname, "public", "dashboard")),
);

app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "dashboard", "index.html"));
});

// Apply rate limiting to all requests
app.use(apiLimiter);

// Logging
if (env.nodeEnv === "development") {
  app.use(morgan("dev"));
}

// Global routes
const routes = require("./routes/index");
app.use("/api", routes);

// 404 Handler for undefined routes
app.use((req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  error.statusCode = 404;
  next(error);
});

// Global Error Handler (must be the last middleware)
app.use(errorHandler);

module.exports = app;
