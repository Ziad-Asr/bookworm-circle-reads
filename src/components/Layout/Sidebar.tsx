
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { BookOpen, Home, Users, MessageSquare, Calendar, BookUser } from "lucide-react";

const sidebarItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "My Books", path: "/mybooks", icon: BookOpen },
  { name: "Reading Stats", path: "/stats", icon: Calendar },
  { name: "Book Clubs", path: "/bookclubs", icon: Users },
  { name: "Discussions", path: "/discussions", icon: MessageSquare },
  { name: "Profile", path: "/profile", icon: BookUser },
];

export function Sidebar() {
  const location = useLocation();
  
  return (
    <aside className="hidden lg:flex h-screen w-64 flex-col border-r bg-sidebar">
      <div className="flex h-14 items-center border-b px-4">
        <Link to="/" className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-bookshelf-primary" />
          <span className="font-serif font-bold">MyBookShelf</span>
        </Link>
      </div>
      <nav className="flex-1 overflow-auto py-4">
        <ul className="px-2 space-y-1">
          {sidebarItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
