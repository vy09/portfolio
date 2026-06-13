const certificationsService = require("./certifications.service");
const { successResponse } = require("../../utils/response");

class CertificationsController {
  async getAll(req, res, next) {
    try {
      const certifications = await certificationsService.getAllCertifications();
      return successResponse(
        res,
        200,
        "Certifications retrieved successfully",
        certifications,
      );
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const { id } = req.params;
      const certification =
        await certificationsService.getCertificationById(id);
      return successResponse(
        res,
        200,
        "Certification retrieved successfully",
        certification,
      );
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const certification = await certificationsService.createCertification(
        req.body,
      );
      return successResponse(
        res,
        201,
        "Certification created successfully",
        certification,
      );
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const certification = await certificationsService.updateCertification(
        id,
        req.body,
      );
      return successResponse(
        res,
        200,
        "Certification updated successfully",
        certification,
      );
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      await certificationsService.deleteCertification(id);
      return successResponse(res, 200, "Certification deleted successfully");
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CertificationsController();
