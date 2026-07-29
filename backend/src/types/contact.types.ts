export interface CreateContactDto {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactSubmissionResponse {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: string;
  createdAt: Date;
}
