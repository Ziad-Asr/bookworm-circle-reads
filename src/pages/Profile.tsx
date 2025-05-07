
import { PageLayout } from "@/components/Layout/PageLayout";
import { Button } from "@/components/ui/button";
import { getUserBooks } from "@/data/mockData";
import { BookCardGrid } from "@/components/Books/BookCardGrid";
import { useState } from "react";
import { Edit, Settings, Book, Star } from "lucide-react";

export default function Profile() {
  const [userBooks] = useState(() => getUserBooks());

  return (
    <PageLayout>
      <div className="page-container">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="shrink-0">
              <div className="w-32 h-32 rounded-full bg-bookshelf-soft flex items-center justify-center border-4 border-white shadow">
                <span className="text-4xl font-serif text-bookshelf-dark">JD</span>
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <h1 className="text-3xl font-serif font-bold">Jane Doe</h1>
                <div className="flex gap-2 justify-center md:justify-start">
                  <Button size="sm" variant="outline">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit Profile
                  </Button>
                  <Button size="sm" variant="outline">
                    <Settings className="h-4 w-4 mr-1" />
                    Settings
                  </Button>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 max-w-2xl">
                Book lover, coffee enthusiast, and aspiring writer. I enjoy contemporary fiction, sci-fi, and historical novels.
                Currently working through my 2023 reading challenge of 52 books!
              </p>
              
              <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                <div className="flex items-center">
                  <Book className="h-5 w-5 text-bookshelf-primary mr-2" />
                  <div>
                    <div className="font-medium">24</div>
                    <div className="text-xs text-muted-foreground">Books Read</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-bookshelf-primary mr-2" />
                  <div>
                    <div className="font-medium">4.2</div>
                    <div className="text-xs text-muted-foreground">Avg Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-12">
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-serif font-semibold">Currently Reading</h2>
              <Button variant="link">View all</Button>
            </div>
            <BookCardGrid books={userBooks.slice(0, 2)} />
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-serif font-semibold">Recently Finished</h2>
              <Button variant="link">View all</Button>
            </div>
            <BookCardGrid books={userBooks.slice(2)} />
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-serif font-semibold">Recent Reviews</h2>
              <Button variant="link">View all</Button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-5 bg-white">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    alt="Book cover"
                    className="w-12 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-medium">The Midnight Library</h3>
                    <p className="text-sm text-muted-foreground">Matt Haig</p>
                  </div>
                </div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < 4 ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} 
                    />
                  ))}
                </div>
                <p className="text-sm line-clamp-3">
                  A beautiful, thought-provoking novel that made me reconsider my life choices. Highly recommended!
                </p>
              </div>
              
              <div className="border rounded-lg p-5 bg-white">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="https://images.unsplash.com/photo-1535398089889-dd807df1dfaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    alt="Book cover"
                    className="w-12 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-medium">Atomic Habits</h3>
                    <p className="text-sm text-muted-foreground">James Clear</p>
                  </div>
                </div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < 5 ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} 
                    />
                  ))}
                </div>
                <p className="text-sm line-clamp-3">
                  This book completely changed how I think about habits and productivity. The concept of 1% improvements is life-changing!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
