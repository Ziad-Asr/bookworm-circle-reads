
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, BookOpen, User } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export function Header() {
  const isMobile = useIsMobile();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-bookshelf-primary" />
          <span className="font-serif text-xl font-bold">MyBookShelf</span>
        </Link>
        
        {!isMobile && (
          <nav className="flex items-center ml-6 gap-6 text-sm">
            <Link to="/discover" className="font-medium transition-colors hover:text-bookshelf-primary">
              Discover
            </Link>
            <Link to="/bookclubs" className="font-medium transition-colors hover:text-bookshelf-primary">
              Book Clubs
            </Link>
            <Link to="/discussions" className="font-medium transition-colors hover:text-bookshelf-primary">
              Discussions
            </Link>
          </nav>
        )}
        
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link to="/profile">
              <User className="h-5 w-5" />
            </Link>
          </Button>
          {isMobile ? (
            <Button size="sm" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
          ) : (
            <Button asChild>
              <Link to="/login">Sign In</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
