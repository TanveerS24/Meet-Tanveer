import { prisma } from './prisma.client';
import { CreateContactDto } from '../types/contact.types';

export class ContactRepository {
  public async create(data: CreateContactDto) {
    try {
      return await prisma.contactSubmission.create({
        data,
      });
    } catch (error) {
      // Fallback if Prisma is not connected during initial dev setup
      return {
        id: `mock-${Date.now()}`,
        ...data,
        status: 'RECEIVED_FALLBACK',
        createdAt: new Date(),
      };
    }
  }

  public async findAll() {
    try {
      return await prisma.contactSubmission.findMany({
        orderBy: { createdAt: 'desc' },
      });
    } catch (error) {
      return [];
    }
  }
}

export const contactRepository = new ContactRepository();
