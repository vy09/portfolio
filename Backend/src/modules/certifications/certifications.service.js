const certificationsRepository = require("./certifications.repository");

class CertificationsService {
  async getAllCertifications() {
    return await certificationsRepository.findAll();
  }

  async getCertificationById(id) {
    const certification = await certificationsRepository.findById(id);
    if (!certification) {
      const error = new Error("Certification not found");
      error.statusCode = 404;
      throw error;
    }
    return certification;
  }

  async createCertification(data) {
    return await certificationsRepository.create(data);
  }

  async updateCertification(id, data) {
    await this.getCertificationById(id);
    return await certificationsRepository.update(id, data);
  }

  async deleteCertification(id) {
    await this.getCertificationById(id);
    return await certificationsRepository.delete(id);
  }
}

module.exports = new CertificationsService();
