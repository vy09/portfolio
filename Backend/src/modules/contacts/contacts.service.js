const contactsRepository = require('./contacts.repository');

class ContactsService {
  async getAllMessages() {
    return await contactsRepository.findAll();
  }

  async createMessage(data) {
    return await contactsRepository.create(data);
  }

  async markMessageAsRead(id) {
    const message = await contactsRepository.findById(id);
    if (!message) {
      const error = new Error('Message not found');
      error.statusCode = 404;
      throw error;
    }
    return await contactsRepository.markAsRead(id);
  }

  async deleteMessage(id) {
    const message = await contactsRepository.findById(id);
    if (!message) {
      const error = new Error('Message not found');
      error.statusCode = 404;
      throw error;
    }
    return await contactsRepository.delete(id);
  }
}

module.exports = new ContactsService();
