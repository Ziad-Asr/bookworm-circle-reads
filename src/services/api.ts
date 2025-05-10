
import { toast } from "@/components/ui/sonner";

const API_BASE_URL = 'http://localhost:5004';

interface ApiOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: any;
  requiresAuth?: boolean;
}

export async function apiRequest<T>(endpoint: string, options: ApiOptions = {}): Promise<T> {
  const { method = 'GET', body, requiresAuth = true } = options;
  
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (requiresAuth) {
    const user = localStorage.getItem('user');
    if (user) {
      const { token } = JSON.parse(user);
      headers['Authorization'] = `Bearer ${token}`;
    }
  }

  const requestOptions: RequestInit = {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, requestOptions);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Request failed with status ${response.status}`);
    }
    
    // For DELETE requests or others that might not return JSON
    if (method === 'DELETE' || response.headers.get('content-length') === '0') {
      return { success: true } as unknown as T;
    }
    
    return await response.json();
  } catch (error) {
    console.error('API request error:', error);
    toast(error instanceof Error ? error.message : "An error occurred");
    throw error;
  }
}

// Book API
export const bookApi = {
  addBook: (bookData: { title: string; author: string; description: string; totalPages: number }) => 
    apiRequest('/api/Book', { method: 'POST', body: bookData }),
  
  getBook: (id: number) => 
    apiRequest<any>(`/api/Book/${id}`),
};

// Book Club API
export const bookClubApi = {
  createClub: (clubData: { name: string; description: string; bookTitle: string }) => 
    apiRequest('/api/BookClub', { method: 'POST', body: clubData }),
  
  getClub: (id: number) => 
    apiRequest<any>(`/api/BookClub/${id}`),
  
  deleteClub: (id: number) => 
    apiRequest(`/api/BookClub/${id}`, { method: 'DELETE' }),
};

// Discussion API
export const discussionApi = {
  createPost: (postData: { bookClubId: number; userId: number; bookTitle: string; content: string; postedAt: string }) => 
    apiRequest('/api/DiscussionPost', { method: 'POST', body: postData }),
  
  getPost: (id: number) => 
    apiRequest<any>(`/api/DiscussionPost/${id}`),
  
  deletePost: (id: number) => 
    apiRequest(`/api/DiscussionPost/${id}`, { method: 'DELETE' }),
};

// Reading Progress API
export const readingApi = {
  updateProgress: (bookId: number, pagesRead: number, readingGoal: number) => 
    apiRequest('/api/Reading/progress', { 
      method: 'POST', 
      body: { bookId, pagesRead, readingGoal } 
    }),
  
  getProgressForBook: (bookId: number) => 
    apiRequest<any>(`/api/Reading/progress/book?bookId=${bookId}`),
};

// User Library API
export const libraryApi = {
  getUserLibrary: () => 
    apiRequest<any[]>('/api/UserLibrary/library'),
  
  addBookToLibrary: (bookId: number) => 
    apiRequest('/api/UserLibrary/Add/Book', { 
      method: 'POST', 
      body: { bookId } 
    }),
  
  removeBookFromLibrary: (bookId: number) => 
    apiRequest('/api/UserLibrary/delete/Book', { 
      method: 'DELETE', 
      body: { bookId } 
    }),
};
