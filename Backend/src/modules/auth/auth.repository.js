const prisma = require("../../config/database");

class AuthRepository {
  async findUserByEmail(email) {
    return await prisma.user.findUnique({
      where: { email },
    });
  }

  // Used for creating the initial admin user
  async createUser(data) {
    return await prisma.user.create({
      data,
    });
  }
}

module.exports = new AuthRepository();
