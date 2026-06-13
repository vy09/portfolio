const dashboardService = require("./dashboard.service");
const { successResponse } = require("../../utils/response");

class DashboardController {
  async getStatistics(req, res, next) {
    try {
      const stats = await dashboardService.getDashboardStats();
      return successResponse(
        res,
        200,
        "Dashboard statistics retrieved successfully",
        stats,
      );
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new DashboardController();
