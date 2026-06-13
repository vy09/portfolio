const skillsRepository = require("./skills.repository");

class SkillsService {
  async getAllSkills() {
    return await skillsRepository.findAll();
  }

  async getSkillById(id) {
    const skill = await skillsRepository.findById(id);
    if (!skill) {
      const error = new Error("Skill not found");
      error.statusCode = 404;
      throw error;
    }
    return skill;
  }

  async createSkill(data) {
    return await skillsRepository.create(data);
  }

  async updateSkill(id, data) {
    await this.getSkillById(id);
    return await skillsRepository.update(id, data);
  }

  async deleteSkill(id) {
    await this.getSkillById(id);
    return await skillsRepository.delete(id);
  }
}

module.exports = new SkillsService();
