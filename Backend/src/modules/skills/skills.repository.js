const prisma = require("../../config/database");

class SkillsRepository {
  async findAll() {
    return await prisma.skill.findMany({
      orderBy: [{ category: "asc" }, { percentage: "desc" }],
    });
  }

  async findById(id) {
    return await prisma.skill.findUnique({
      where: { id },
    });
  }

  async create(data) {
    return await prisma.skill.create({
      data,
    });
  }

  async update(id, data) {
    return await prisma.skill.update({
      where: { id },
      data,
    });
  }

  async delete(id) {
    return await prisma.skill.delete({
      where: { id },
    });
  }
}

module.exports = new SkillsRepository();
