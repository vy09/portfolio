const prisma = require("../../config/database");

class CertificationsRepository {
  async findAll() {
    return await prisma.certification.findMany({
      orderBy: { issueDate: "desc" },
    });
  }

  async findById(id) {
    return await prisma.certification.findUnique({
      where: { id },
    });
  }

  async create(data) {
    return await prisma.certification.create({
      data: {
        ...data,
        issueDate: new Date(data.issueDate),
      },
    });
  }

  async update(id, data) {
    const updateData = { ...data };
    if (updateData.issueDate) {
      updateData.issueDate = new Date(updateData.issueDate);
    }

    return await prisma.certification.update({
      where: { id },
      data: updateData,
    });
  }

  async delete(id) {
    return await prisma.certification.delete({
      where: { id },
    });
  }
}

module.exports = new CertificationsRepository();
