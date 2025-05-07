
import { BookCard } from "./BookCard";

interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  rating: number;
}

interface BookCardGridProps {
  books: Book[];
  title?: string;
}

export function BookCardGrid({ books, title }: BookCardGridProps) {
  return (
    <div className="space-y-4">
      {title && <h2 className="text-2xl font-serif font-semibold">{title}</h2>}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6">
        {books.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            coverImage={book.coverImage}
            rating={book.rating}
          />
        ))}
      </div>
    </div>
  );
}
