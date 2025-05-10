
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PageLayout } from "@/components/Layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen, Loader } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function Login() {
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();
  
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    await login(values.email, values.password);
  };

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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="name@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader className="mr-2 h-4 w-4 animate-spin" />
                    Signing In...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>
          </Form>
          
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
