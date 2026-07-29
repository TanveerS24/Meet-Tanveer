export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ContactFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}
