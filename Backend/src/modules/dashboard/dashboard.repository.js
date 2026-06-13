const prisma = require("../../config/database");

class DashboardRepository {
  async getStatistics() {
    // Run all count queries concurrently for performance
    const [
      totalProjects,
      totalSkills,
      totalCertifications,
      totalMessages,
      unreadMessages,
    ] = await Promise.all([
      prisma.project.count(),
      prisma.skill.count(),
      prisma.certification.count(),
      prisma.contactMessage.count(),
      prisma.contactMessage.count({ where: { isRead: false } }),
    ]);

    return {
      totalProjects,
      totalSkills,
      totalCertifications,
      totalMessages,
      unreadMessages,
    };
  }
}

module.exports = new DashboardRepository();
