const projectsService = require("./projects.service");
const { successResponse } = require("../../utils/response");

class ProjectsController {
  async getAll(req, res, next) {
    try {
      const projects = await projectsService.getAllProjects();
      return successResponse(
        res,
        200,
        "Projects retrieved successfully",
        projects,
      );
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const { id } = req.params;
      const project = await projectsService.getProjectById(id);
      return successResponse(
        res,
        200,
        "Project retrieved successfully",
        project,
      );
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const project = await projectsService.createProject(req.body);
      return successResponse(res, 201, "Project created successfully", project);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const project = await projectsService.updateProject(id, req.body);
      return successResponse(res, 200, "Project updated successfully", project);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      await projectsService.deleteProject(id);
      return successResponse(res, 200, "Project deleted successfully");
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ProjectsController();
