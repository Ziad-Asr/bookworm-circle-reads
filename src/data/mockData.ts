
export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  rating: number;
  description: string;
  pageCount: number;
  genre: string[];
  publishDate: Date;
}

export interface Review {
  id: string;
  bookId: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  date: Date;
  content: string;
}

export interface BookClub {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  memberCount: number;
  currentBook: string;
}

export interface Discussion {
  id: string;
  title: string;
  bookId: string;
  bookTitle: string;
  userAvatar: string;
  userName: string;
  date: Date;
  content: string;
  commentCount: number;
}

export interface ReadingProgress {
  bookId: string;
  currentPage: number;
  startDate: Date;
  targetDate?: Date;
}

export const books: Book[] = [
  {
    id: "1",
    title: "The Midnight Library",
    author: "Matt Haig",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    rating: 4.2,
    description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.",
    pageCount: 304,
    genre: ["Fiction", "Fantasy", "Contemporary"],
    publishDate: new Date("2020-08-13")
  },
  {
    id: "2",
    title: "Atomic Habits",
    author: "James Clear",
    coverImage: "https://images.unsplash.com/photo-1535398089889-dd807df1dfaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    description: "No matter your goals, Atomic Habits offers a proven framework for improving--every day.",
    pageCount: 320,
    genre: ["Self-Help", "Psychology", "Personal Development"],
    publishDate: new Date("2018-10-16")
  },
  {
    id: "3",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    rating: 4.0,
    description: "The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.",
    pageCount: 180,
    genre: ["Fiction", "Classics", "Literature"],
    publishDate: new Date("1925-04-10")
  },
  {
    id: "4",
    title: "Educated",
    author: "Tara Westover",
    coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    description: "An account of the struggle for self-invention. It is a tale of fierce family loyalty, and of the grief that comes from severing one's closest ties.",
    pageCount: 334,
    genre: ["Memoir", "Biography", "Autobiography"],
    publishDate: new Date("2018-02-20")
  },
  {
    id: "5",
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    coverImage: "https://images.unsplash.com/photo-1576872381149-7847515ce5d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    description: "A novel about a young woman determined to make her way in the wilds of North Carolina, and the two men that will break her isolation open.",
    pageCount: 384,
    genre: ["Fiction", "Mystery", "Literary Fiction"],
    publishDate: new Date("2018-08-14")
  },
  {
    id: "6",
    title: "Project Hail Mary",
    author: "Andy Weir",
    coverImage: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    description: "A lone astronaut must save the earth from disaster in this incredible new science-based thriller from the #1 New York Times bestselling author of The Martian.",
    pageCount: 496,
    genre: ["Science Fiction", "Fiction", "Space"],
    publishDate: new Date("2021-05-04")
  },
  {
    id: "7",
    title: "Normal People",
    author: "Sally Rooney",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    rating: 3.9,
    description: "At school Connell and Marianne pretend not to know each other. He's popular and well-adjusted, star of the school football team, while she is lonely, proud and intensely private.",
    pageCount: 266,
    genre: ["Fiction", "Contemporary", "Romance"],
    publishDate: new Date("2018-08-28")
  },
  {
    id: "8",
    title: "Becoming",
    author: "Michelle Obama",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    description: "In her memoir, a work of deep reflection and mesmerizing storytelling, Michelle Obama invites readers into her world.",
    pageCount: 448,
    genre: ["Autobiography", "Memoir", "Biography"],
    publishDate: new Date("2018-11-13")
  },
];

export const reviews: Review[] = [
  {
    id: "1",
    bookId: "1",
    userId: "1",
    userName: "Alex Johnson",
    userAvatar: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    date: new Date("2022-08-15"),
    content: "A beautiful, thought-provoking novel that made me reconsider my life choices. Highly recommended!"
  },
  {
    id: "2",
    bookId: "1",
    userId: "2",
    userName: "Jamie Smith",
    userAvatar: "https://i.pravatar.cc/150?img=2",
    rating: 4,
    date: new Date("2022-07-23"),
    content: "Well-written with an interesting premise, though some parts dragged a bit. Overall very good read."
  },
  {
    id: "3",
    bookId: "1",
    userId: "3",
    userName: "Casey Lee",
    userAvatar: "https://i.pravatar.cc/150?img=3",
    rating: 3,
    date: new Date("2022-09-05"),
    content: "Decent book but I found the ending a bit predictable. The character development was quite good though."
  },
];

export const bookClubs: BookClub[] = [
  {
    id: "1",
    name: "Fiction Fanatics",
    description: "A club for lovers of all fiction genres, from classics to contemporary.",
    coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    memberCount: 245,
    currentBook: "1" // ID reference to The Midnight Library
  },
  {
    id: "2",
    name: "Science & Beyond",
    description: "Exploring the universe through non-fiction and sci-fi books.",
    coverImage: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    memberCount: 178,
    currentBook: "6" // ID reference to Project Hail Mary
  },
  {
    id: "3",
    name: "Personal Growth Circle",
    description: "Read and discuss books about self-improvement and psychology.",
    coverImage: "https://images.unsplash.com/photo-1535398089889-dd807df1dfaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    memberCount: 132,
    currentBook: "2" // ID reference to Atomic Habits
  }
];

export const discussions: Discussion[] = [
  {
    id: "1",
    title: "What did you think about the ending?",
    bookId: "1",
    bookTitle: "The Midnight Library",
    userAvatar: "https://i.pravatar.cc/150?img=5",
    userName: "Morgan Taylor",
    date: new Date("2022-09-12"),
    content: "I just finished the book and I'm curious what others thought about the ending. Without spoilers, did you find it satisfying?",
    commentCount: 24
  },
  {
    id: "2",
    title: "Implementing atomic habits in daily life",
    bookId: "2",
    bookTitle: "Atomic Habits",
    userAvatar: "https://i.pravatar.cc/150?img=6",
    userName: "Jordan Rivera",
    date: new Date("2022-08-28"),
    content: "What habits have you successfully implemented using the techniques in this book? I've been having success with habit stacking.",
    commentCount: 32
  },
  {
    id: "3",
    title: "Symbolism of the green light",
    bookId: "3",
    bookTitle: "The Great Gatsby",
    userAvatar: "https://i.pravatar.cc/150?img=7",
    userName: "Drew Patel",
    date: new Date("2022-09-03"),
    content: "Let's discuss the symbolism of the green light in The Great Gatsby. What does it represent to you?",
    commentCount: 18
  }
];

export const readingProgress: ReadingProgress[] = [
  {
    bookId: "1",
    currentPage: 203,
    startDate: new Date("2022-09-01"),
    targetDate: new Date("2022-09-30")
  },
  {
    bookId: "2",
    currentPage: 158,
    startDate: new Date("2022-08-15"),
    targetDate: new Date("2022-10-15")
  }
];

// Data access functions
export function getPopularBooks(limit = 5): Book[] {
  return [...books].sort((a, b) => b.rating - a.rating).slice(0, limit);
}

export function getNewReleases(limit = 5): Book[] {
  return [...books].sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime()).slice(0, limit);
}

export function getBookById(id: string): Book | undefined {
  return books.find(book => book.id === id);
}

export function getReviewsForBook(bookId: string): Review[] {
  return reviews.filter(review => review.bookId === bookId);
}

export function getRecentDiscussions(limit = 5): Discussion[] {
  return [...discussions].sort((a, b) => b.date.getTime() - a.date.getTime()).slice(0, limit);
}

export function getBookClubs(limit?: number): BookClub[] {
  return limit ? bookClubs.slice(0, limit) : bookClubs;
}

export function getReadingProgressForBook(bookId: string): ReadingProgress | undefined {
  return readingProgress.find(progress => progress.bookId === bookId);
}

export function getUserBooks(): Book[] {
  // In a real app, this would filter based on user ID
  // For now, returning a subset of the books as "user's books"
  return books.slice(0, 4);
}

export function getDiscussionById(id: string): Discussion | undefined {
  return discussions.find(discussion => discussion.id === id);
}

export function getBookClubById(id: string): BookClub | undefined {
  return bookClubs.find(club => club.id === id);
}
