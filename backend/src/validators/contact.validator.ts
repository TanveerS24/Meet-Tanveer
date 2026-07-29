import { z } from 'zod';

export const createContactSchema = z.object({
  body: z.object({
    name: z.string().min(2, 'Name must be at least 2 characters long').max(100),
    email: z.string().email('Please enter a valid email address'),
    subject: z.string().min(3, 'Subject must be at least 3 characters long').max(150),
    message: z.string().min(10, 'Message must be at least 10 characters long').max(2000),
  }),
});
