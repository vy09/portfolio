const prisma = require("../../config/database");

class AboutRepository {
  // Since "About" profile is usually single, we will fetch the first record
  async getProfile() {
    return await prisma.about.findFirst();
  }

  async createProfile(data) {
    return await prisma.about.create({
      data,
    });
  }

  async updateProfile(id, data) {
    return await prisma.about.update({
      where: { id },
      data,
    });
  }
}

module.exports = new AboutRepository();
