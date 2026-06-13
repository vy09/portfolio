const aboutRepository = require("./about.repository");

class AboutService {
  async getAboutProfile() {
    const profile = await aboutRepository.getProfile();
    if (!profile) {
      const error = new Error("About profile not found");
      error.statusCode = 404;
      throw error;
    }
    return profile;
  }

  async upsertAboutProfile(data) {
    const existingProfile = await aboutRepository.getProfile();

    if (existingProfile) {
      // Update existing
      return await aboutRepository.updateProfile(existingProfile.id, data);
    } else {
      // Create new
      return await aboutRepository.createProfile(data);
    }
  }
}

module.exports = new AboutService();
