
import { useState } from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/Layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getRecentDiscussions } from "@/data/mockData";
import { PlusCircle, Search, MessageSquare } from "lucide-react";
import { format } from "date-fns";

export default function Discussions() {
  const [discussions] = useState(() => getRecentDiscussions(10));
  
  return (
    <PageLayout>
      <div className="page-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <h1 className="section-title">Discussions</h1>
          <div className="flex gap-2 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search discussions..." className="pl-8" />
            </div>
            <Button>
              <PlusCircle className="h-4 w-4 mr-2" />
              New Topic
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="all">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Discussions</TabsTrigger>
            <TabsTrigger value="mybooks">My Books</TabsTrigger>
            <TabsTrigger value="joined">Joined</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="space-y-4">
              {discussions.map(discussion => (
                <Link to={`/discussions/${discussion.id}`} key={discussion.id}>
                  <div className="border rounded-lg p-4 bg-white hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex-1">
                        <h2 className="text-lg font-medium">{discussion.title}</h2>
                        <p className="text-sm text-muted-foreground mb-2">
                          About {discussion.bookTitle}
                        </p>
                        <p className="text-sm line-clamp-2">{discussion.content}</p>
                      </div>
                      
                      <div className="flex md:flex-col items-center md:items-end gap-4 md:gap-1">
                        <div className="flex items-center gap-2">
                          <img
                            src={discussion.userAvatar}
                            alt={discussion.userName}
                            className="h-6 w-6 rounded-full"
                          />
                          <span className="text-xs">{discussion.userName}</span>
                        </div>
                        <div className="flex items-center md:mt-2">
                          <span className="text-xs text-muted-foreground mr-2">
                            {format(discussion.date, 'MMM d')}
                          </span>
                          <MessageSquare className="h-4 w-4 text-muted-foreground mr-1" />
                          <span className="text-xs font-medium">{discussion.commentCount}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="mybooks">
            <div className="text-center py-10">
              <MessageSquare className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
              <h3 className="text-xl font-serif font-medium mb-2">No discussions yet</h3>
              <p className="text-muted-foreground mb-4">
                Join a discussion about books in your library
              </p>
              <Button>Browse All Discussions</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="joined">
            <div className="text-center py-10">
              <MessageSquare className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
              <h3 className="text-xl font-serif font-medium mb-2">No discussions joined yet</h3>
              <p className="text-muted-foreground mb-4">
                Join conversations to see them appear here
              </p>
              <Button>Browse All Discussions</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
}
