const dashboardRepository = require("./dashboard.repository");

class DashboardService {
  async getDashboardStats() {
    return await dashboardRepository.getStatistics();
  }
}

module.exports = new DashboardService();
