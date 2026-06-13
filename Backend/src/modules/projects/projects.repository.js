const prisma = require("../../config/database");

class ProjectsRepository {
  async findAll() {
    return await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
    });
  }

  async findById(id) {
    return await prisma.project.findUnique({
      where: { id },
    });
  }

  async create(data) {
    return await prisma.project.create({
      data,
    });
  }

  async update(id, data) {
    return await prisma.project.update({
      where: { id },
      data,
    });
  }

  async delete(id) {
    return await prisma.project.delete({
      where: { id },
    });
  }
}

module.exports = new ProjectsRepository();
