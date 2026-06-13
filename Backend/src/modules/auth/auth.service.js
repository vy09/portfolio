const authRepository = require("./auth.repository");
const { comparePassword } = require("../../utils/bcrypt");
const {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} = require("../../utils/jwt");

class AuthService {
  async login(email, password) {
    const user = await authRepository.findUserByEmail(email);
    if (!user) {
      return { error: "Invalid email or password" };
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return { error: "Invalid email or password" };
    }

    const payload = { id: user.id, email: user.email, role: user.role };
    const accessToken = generateAccessToken(payload);
    const refreshToken = generateRefreshToken(payload);

    return {
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      accessToken,
      refreshToken,
    };
  }

  async refreshToken(token) {
    try {
      const decoded = verifyRefreshToken(token);

      const user = await authRepository.findUserByEmail(decoded.email);
      if (!user) {
        return { error: "Invalid refresh token" };
      }

      const payload = { id: user.id, email: user.email, role: user.role };
      const newAccessToken = generateAccessToken(payload);
      const newRefreshToken = generateRefreshToken(payload);

      return {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      };
    } catch (error) {
      return { error: "Invalid or expired refresh token" };
    }
  }
}

module.exports = new AuthService();
