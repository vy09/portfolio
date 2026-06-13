const aboutService = require("./about.service");
const { successResponse } = require("../../utils/response");

class AboutController {
  async getProfile(req, res, next) {
    try {
      const profile = await aboutService.getAboutProfile();
      return successResponse(
        res,
        200,
        "About profile retrieved successfully",
        profile,
      );
    } catch (error) {
      next(error);
    }
  }

  async upsertProfile(req, res, next) {
    try {
      const profile = await aboutService.upsertAboutProfile(req.body);
      return successResponse(
        res,
        200,
        "About profile saved successfully",
        profile,
      );
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AboutController();
