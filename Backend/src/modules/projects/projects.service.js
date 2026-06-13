const projectsRepository = require("./projects.repository");

class ProjectsService {
  async getAllProjects() {
    return await projectsRepository.findAll();
  }

  async getProjectById(id) {
    const project = await projectsRepository.findById(id);
    if (!project) {
      const error = new Error("Project not found");
      error.statusCode = 404;
      throw error;
    }
    return project;
  }

  async createProject(data) {
    return await projectsRepository.create(data);
  }

  async updateProject(id, data) {
    // Check existence first
    await this.getProjectById(id);
    return await projectsRepository.update(id, data);
  }

  async deleteProject(id) {
    await this.getProjectById(id);
    return await projectsRepository.delete(id);
  }
}

module.exports = new ProjectsService();
