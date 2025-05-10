
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, BookOpen, User, LogOut } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useAuth } from "@/contexts/AuthContext";

export function Header() {
  const isMobile = useIsMobile();
  const { user, logout, isAuthenticated } = useAuth();
  
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
          
          {isAuthenticated() ? (
            <>
              <Button variant="ghost" size="icon" asChild>
                <Link to="/profile">
                  <User className="h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={logout} 
                title="Logout"
              >
                <LogOut className="h-5 w-5" />
              </Button>
              {!isMobile && (
                <div className="text-sm font-medium ml-2">
                  {user?.fullName}
                </div>
              )}
            </>
          ) : (
            isMobile ? (
              <Button size="sm" asChild>
                <Link to="/login">Sign In</Link>
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button variant="outline" asChild>
                  <Link to="/signup">Sign Up</Link>
                </Button>
                <Button asChild>
                  <Link to="/login">Sign In</Link>
                </Button>
              </div>
            )
          )}
        </div>
      </div>
    </header>
  );
}
