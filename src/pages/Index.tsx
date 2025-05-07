
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/Layout/PageLayout";
import { BookCardGrid } from "@/components/Books/BookCardGrid";
import { getPopularBooks, getNewReleases, getRecentDiscussions, getBookClubs } from "@/data/mockData";
import { MessageSquare, Users } from "lucide-react";

export default function Index() {
  const [popularBooks] = useState(() => getPopularBooks(5));
  const [newReleases] = useState(() => getNewReleases(5));
  const [discussions] = useState(() => getRecentDiscussions(3));
  const [bookClubs] = useState(() => getBookClubs(3));

  return (
    <PageLayout showSidebar={false}>
      <section className="bg-gradient-to-r from-bookshelf-dark to-bookshelf-secondary py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4">
              Welcome to MyBookShelf
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Track your reading journey, discover new books, and connect with fellow book lovers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-white text-bookshelf-dark hover:bg-gray-100">
                <Link to="/discover">Discover Books</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                <Link to="/login">Sign In</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="page-container my-8">
        <BookCardGrid books={popularBooks} title="Popular Books" />
        
        <div className="mt-16">
          <BookCardGrid books={newReleases} title="New Releases" />
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="page-container">
          <h2 className="section-title">Join the Community</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <MessageSquare className="h-6 w-6 text-bookshelf-primary mr-2" />
                <h3 className="text-xl font-serif font-semibold">Recent Discussions</h3>
              </div>
              <div className="space-y-4">
                {discussions.map(discussion => (
                  <Link to={`/discussions/${discussion.id}`} key={discussion.id} className="block">
                    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-medium">{discussion.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        From {discussion.bookTitle}
                      </p>
                      <div className="flex items-center gap-2">
                        <img
                          src={discussion.userAvatar}
                          alt={discussion.userName}
                          className="h-6 w-6 rounded-full"
                        />
                        <span className="text-xs">{discussion.userName}</span>
                        <span className="text-xs text-muted-foreground ml-auto">
                          {discussion.commentCount} comments
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <Button variant="ghost" size="sm" className="mt-4" asChild>
                <Link to="/discussions">View all discussions</Link>
              </Button>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-bookshelf-primary mr-2" />
                <h3 className="text-xl font-serif font-semibold">Book Clubs</h3>
              </div>
              <div className="space-y-4">
                {bookClubs.map(club => (
                  <Link to={`/bookclubs/${club.id}`} key={club.id} className="block">
                    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex gap-4">
                        <img
                          src={club.coverImage}
                          alt={club.name}
                          className="h-16 w-16 object-cover rounded"
                        />
                        <div>
                          <h4 className="font-medium">{club.name}</h4>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {club.description}
                          </p>
                          <p className="text-xs text-bookshelf-primary mt-1">
                            {club.memberCount} members
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <Button variant="ghost" size="sm" className="mt-4" asChild>
                <Link to="/bookclubs">View all book clubs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
