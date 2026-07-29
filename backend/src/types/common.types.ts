export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
  meta?: {
    timestamp: string;
    version: string;
    path: string;
  };
}

export interface PaginationParams {
  page?: number;
  limit?: number;
}
