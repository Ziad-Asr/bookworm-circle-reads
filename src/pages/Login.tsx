
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/Layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen } from "lucide-react";

export default function Login() {
  return (
    <PageLayout showSidebar={false}>
      <div className="container max-w-md mx-auto px-4 py-16">
        <div className="flex flex-col items-center mb-8">
          <BookOpen className="h-12 w-12 text-bookshelf-primary mb-4" />
          <h1 className="text-3xl font-serif font-bold mb-2">Welcome to MyBookShelf</h1>
          <p className="text-center text-muted-foreground">
            Sign in to track your reading journey, review books, and join discussions.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <form>
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="name@example.com" />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <Button type="submit" className="w-full">Sign In</Button>
            </div>
          </form>
          
          <div className="mt-4 text-center">
            <Link to="/forgot-password" className="text-sm text-bookshelf-primary hover:underline">
              Forgot password?
            </Link>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p>Don't have an account? <Link to="/signup" className="text-bookshelf-primary hover:underline">Sign Up</Link></p>
        </div>
      </div>
    </PageLayout>
  );
}
