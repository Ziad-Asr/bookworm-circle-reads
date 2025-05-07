
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BookDetails from "./pages/BookDetails";
import MyBooks from "./pages/MyBooks";
import ReadingStats from "./pages/ReadingStats";
import BookClubs from "./pages/BookClubs";
import Discussions from "./pages/Discussions";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/mybooks" element={<MyBooks />} />
          <Route path="/stats" element={<ReadingStats />} />
          <Route path="/bookclubs" element={<BookClubs />} />
          <Route path="/discussions" element={<Discussions />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
