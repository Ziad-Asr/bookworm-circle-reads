
import { useState } from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/Layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getBookClubs, getBookById } from "@/data/mockData";
import { PlusCircle, Search, Users } from "lucide-react";

export default function BookClubs() {
  const [clubs] = useState(() => getBookClubs());
  
  return (
    <PageLayout>
      <div className="page-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <h1 className="section-title">Book Clubs</h1>
          <div className="flex gap-2 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search clubs..." className="pl-8" />
            </div>
            <Button>
              <PlusCircle className="h-4 w-4 mr-2" />
              Create Club
            </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {clubs.map(club => {
            const currentBook = getBookById(club.currentBook);
            return (
              <div key={club.id} className="border rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow">
                <div className="h-40 overflow-hidden">
                  <img
                    src={club.coverImage}
                    alt={club.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-serif font-semibold">{club.name}</h2>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" />
                      {club.memberCount}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{club.description}</p>
                  
                  {currentBook && (
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-sm">Currently reading:</div>
                      <div className="flex items-center">
                        <img
                          src={currentBook.coverImage}
                          alt={currentBook.title}
                          className="h-10 w-8 object-cover rounded mr-2"
                        />
                        <div>
                          <p className="text-sm font-medium line-clamp-1">{currentBook.title}</p>
                          <p className="text-xs text-muted-foreground">{currentBook.author}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <Button asChild>
                    <Link to={`/bookclubs/${club.id}`}>View Club</Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
}
