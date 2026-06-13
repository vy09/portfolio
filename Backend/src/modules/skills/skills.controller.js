const skillsService = require("./skills.service");
const { successResponse } = require("../../utils/response");

class SkillsController {
  async getAll(req, res, next) {
    try {
      const skills = await skillsService.getAllSkills();
      return successResponse(res, 200, "Skills retrieved successfully", skills);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const { id } = req.params;
      const skill = await skillsService.getSkillById(id);
      return successResponse(res, 200, "Skill retrieved successfully", skill);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const skill = await skillsService.createSkill(req.body);
      return successResponse(res, 201, "Skill created successfully", skill);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const skill = await skillsService.updateSkill(id, req.body);
      return successResponse(res, 200, "Skill updated successfully", skill);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      await skillsService.deleteSkill(id);
      return successResponse(res, 200, "Skill deleted successfully");
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new SkillsController();
