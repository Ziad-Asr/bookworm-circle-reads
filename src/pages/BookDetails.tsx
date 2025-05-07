
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { PageLayout } from "@/components/Layout/PageLayout";
import { ReadingTracker } from "@/components/Books/ReadingTracker";
import { ReviewCard } from "@/components/Books/ReviewCard";
import { getBookById, getReviewsForBook, getReadingProgressForBook } from "@/data/mockData";
import { format } from "date-fns";
import { BookOpen, Star } from "lucide-react";

export default function BookDetails() {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState(id ? getBookById(id) : undefined);
  const [reviews, setReviews] = useState(id ? getReviewsForBook(id) : []);
  const [readingProgress, setReadingProgress] = useState(id ? getReadingProgressForBook(id) : undefined);
  
  useEffect(() => {
    if (id) {
      const fetchedBook = getBookById(id);
      setBook(fetchedBook);
      
      if (fetchedBook) {
        setReviews(getReviewsForBook(id));
        setReadingProgress(getReadingProgressForBook(id));
      }
    }
  }, [id]);

  if (!book) {
    return (
      <PageLayout>
        <div className="page-container">
          <h1 className="text-2xl font-serif">Book not found</h1>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="page-container">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-64 shrink-0">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="aspect-[2/3] w-full object-cover rounded-lg shadow-md"
                />
                <div className="flex gap-2 mt-4">
                  <Button className="flex-1">Add to My Books</Button>
                </div>
              </div>
              
              <div className="flex-1">
                <h1 className="text-3xl font-serif font-bold">{book.title}</h1>
                <p className="text-lg text-muted-foreground mb-2">By {book.author}</p>
                
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < Math.floor(book.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} 
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm">{book.rating.toFixed(1)}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {book.genre.map(genre => (
                    <span 
                      key={genre}
                      className="px-3 py-1 bg-bookshelf-soft text-bookshelf-dark text-sm rounded-full"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Description</h3>
                    <p>{book.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Published</span>
                      <p>{format(book.publishDate, 'MMMM d, yyyy')}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Pages</span>
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-1" />
                        <p>{book.pageCount}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {readingProgress && (
              <div className="mt-8">
                <h2 className="text-xl font-serif font-semibold mb-4">Your Reading Progress</h2>
                <ReadingTracker
                  currentPage={readingProgress.currentPage}
                  totalPages={book.pageCount}
                  startDate={readingProgress.startDate}
                  targetDate={readingProgress.targetDate}
                />
              </div>
            )}
            
            <div className="mt-8">
              <h2 className="text-xl font-serif font-semibold mb-4">Reviews & Ratings</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Write a Review</h3>
                <div className="mb-2">
                  <span className="block text-sm font-medium mb-1">Rating</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-gray-300 cursor-pointer hover:text-yellow-500" />
                    ))}
                  </div>
                </div>
                <Textarea placeholder="Share your thoughts on this book..." className="mb-2" />
                <Button>Submit Review</Button>
              </div>
              
              <div className="space-y-4">
                {reviews.length > 0 ? (
                  reviews.map(review => (
                    <ReviewCard
                      key={review.id}
                      userName={review.userName}
                      userAvatar={review.userAvatar}
                      rating={review.rating}
                      date={review.date}
                      content={review.content}
                    />
                  ))
                ) : (
                  <p>No reviews yet. Be the first to review this book!</p>
                )}
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <h3 className="font-serif font-semibold mb-3">Reading Stats</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Currently reading:</span>
                  <span className="font-medium">842</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Have read:</span>
                  <span className="font-medium">3,208</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Want to read:</span>
                  <span className="font-medium">5,361</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <h3 className="font-serif font-semibold mb-3">Similar Books</h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    alt="Similar book"
                    className="h-16 w-12 object-cover rounded"
                  />
                  <div>
                    <h4 className="font-medium line-clamp-1">The Great Gatsby</h4>
                    <p className="text-sm text-muted-foreground">F. Scott Fitzgerald</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    alt="Similar book"
                    className="h-16 w-12 object-cover rounded"
                  />
                  <div>
                    <h4 className="font-medium line-clamp-1">Normal People</h4>
                    <p className="text-sm text-muted-foreground">Sally Rooney</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-serif font-semibold mb-3">Join a Discussion</h3>
              <div className="space-y-3">
                <div className="border-b pb-3">
                  <h4 className="font-medium line-clamp-1">What did you think about the ending?</h4>
                  <p className="text-sm text-muted-foreground">24 comments</p>
                </div>
                <div>
                  <h4 className="font-medium line-clamp-1">Character analysis: Nora Seed</h4>
                  <p className="text-sm text-muted-foreground">13 comments</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-3">Start new discussion</Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
