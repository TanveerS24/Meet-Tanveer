import { Request, Response } from 'express';
import { contactService } from '../services/contact.service';

export class ContactController {
  public submitMessage = async (req: Request, res: Response): Promise<Response> => {
    const result = await contactService.submitMessage(req.body);
    return res.status(201).json({
      success: true,
      data: result,
    });
  };

  public getMessages = async (_req: Request, res: Response): Promise<Response> => {
    const messages = await contactService.getMessages();
    return res.status(200).json({
      success: true,
      data: messages,
    });
  };
}

export const contactController = new ContactController();
