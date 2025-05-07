
import { useState } from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/Layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookCard } from "@/components/Books/BookCard";
import { ReadingTracker } from "@/components/Books/ReadingTracker";
import { getUserBooks, getReadingProgressForBook, getBookById } from "@/data/mockData";
import { PlusCircle, BookOpen, Bookmark, Clock } from "lucide-react";

export default function MyBooks() {
  const [userBooks] = useState(() => getUserBooks());
  
  return (
    <PageLayout>
      <div className="page-container">
        <div className="flex justify-between items-center mb-6">
          <h1 className="section-title">My Books</h1>
          <Button>
            <PlusCircle className="h-4 w-4 mr-2" />
            Add Book
          </Button>
        </div>
        
        <Tabs defaultValue="reading">
          <TabsList className="mb-6">
            <TabsTrigger value="reading" className="flex items-center">
              <BookOpen className="h-4 w-4 mr-2" />
              Currently Reading
            </TabsTrigger>
            <TabsTrigger value="toread">
              <Bookmark className="h-4 w-4 mr-2" />
              To Read
            </TabsTrigger>
            <TabsTrigger value="completed">
              <Clock className="h-4 w-4 mr-2" />
              Completed
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="reading" className="space-y-8">
            {userBooks.slice(0, 2).map(book => {
              const progress = getReadingProgressForBook(book.id);
              return (
                <div key={book.id} className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow-sm">
                  <div className="w-full md:w-36 shrink-0">
                    <Link to={`/books/${book.id}`}>
                      <img
                        src={book.coverImage}
                        alt={book.title}
                        className="aspect-[2/3] w-full object-cover rounded-lg shadow-sm"
                      />
                    </Link>
                  </div>
                  
                  <div className="flex-1">
                    <Link to={`/books/${book.id}`} className="hover:text-bookshelf-primary">
                      <h2 className="text-xl font-serif font-semibold">{book.title}</h2>
                    </Link>
                    <p className="text-muted-foreground mb-4">By {book.author}</p>
                    
                    {progress && (
                      <div className="max-w-xl">
                        <ReadingTracker
                          currentPage={progress.currentPage}
                          totalPages={book.pageCount}
                          startDate={progress.startDate}
                          targetDate={progress.targetDate}
                        />
                      </div>
                    )}
                    
                    <div className="mt-4 flex flex-wrap gap-3">
                      <Button size="sm">Update Progress</Button>
                      <Button size="sm" variant="outline">Add Notes</Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </TabsContent>
          
          <TabsContent value="toread">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {userBooks.slice(2).map(book => (
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
          </TabsContent>
          
          <TabsContent value="completed">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {userBooks.slice(0, 1).map(book => (
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
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
}
