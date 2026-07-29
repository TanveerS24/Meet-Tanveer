import { ApiResponse } from '../types/api';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';

export async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const url = `${API_BASE_URL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;

  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });

    const json: ApiResponse<T> = await res.json();

    if (!res.ok || !json.success) {
      throw new Error(json.error || `HTTP error! status: ${res.status}`);
    }

    return json.data as T;
  } catch (error) {
    console.warn(`API call failed for ${endpoint}:`, error);
    throw error;
  }
}
