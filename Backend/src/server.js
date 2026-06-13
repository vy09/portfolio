const app = require("./app");
const env = require("./config/env");
const prisma = require("./config/database");

const startServer = async () => {
  try {
    // Test DB Connection
    await prisma.$connect();
    console.log("📦 Database connected successfully");

    app.listen(env.port, () => {
      console.log(
        `🚀 Server running in ${env.nodeEnv} mode on port ${env.port}`,
      );
    });
  } catch (error) {
    console.error("❌ Server startup error:", error);
    await prisma.$disconnect();
    process.exit(1);
  }
};

startServer();
