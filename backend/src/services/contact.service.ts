import { contactRepository } from '../repositories/contact.repository';
import { CreateContactDto } from '../types/contact.types';
import { logger } from '../utils/logger';

export class ContactService {
  public async submitMessage(dto: CreateContactDto) {
    logger.info(`Processing contact submission from ${dto.email}`);
    const record = await contactRepository.create(dto);
    return {
      message: 'Thank you for reaching out! Your message has been received successfully.',
      submissionId: record.id,
      createdAt: record.createdAt,
    };
  }

  public async getMessages() {
    return await contactRepository.findAll();
  }
}

export const contactService = new ContactService();
