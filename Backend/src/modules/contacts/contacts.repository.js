const prisma = require("../../config/database");

class ContactsRepository {
  async findAll() {
    return await prisma.contactMessage.findMany({
      orderBy: { createdAt: "desc" },
    });
  }

  async findById(id) {
    return await prisma.contactMessage.findUnique({
      where: { id },
    });
  }

  async create(data) {
    return await prisma.contactMessage.create({
      data,
    });
  }

  async markAsRead(id) {
    return await prisma.contactMessage.update({
      where: { id },
      data: { isRead: true },
    });
  }

  async delete(id) {
    return await prisma.contactMessage.delete({
      where: { id },
    });
  }
}

module.exports = new ContactsRepository();
