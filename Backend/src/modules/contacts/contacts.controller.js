const contactsService = require("./contacts.service");
const { successResponse } = require("../../utils/response");

class ContactsController {
  async getAll(req, res, next) {
    try {
      const messages = await contactsService.getAllMessages();
      return successResponse(
        res,
        200,
        "Messages retrieved successfully",
        messages,
      );
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const message = await contactsService.createMessage(req.body);
      return successResponse(res, 201, "Message sent successfully", message);
    } catch (error) {
      next(error);
    }
  }

  async markAsRead(req, res, next) {
    try {
      const { id } = req.params;
      const message = await contactsService.markMessageAsRead(id);
      return successResponse(res, 200, "Message marked as read", message);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      await contactsService.deleteMessage(id);
      return successResponse(res, 200, "Message deleted successfully");
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ContactsController();
