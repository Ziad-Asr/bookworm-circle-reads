
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  rating: number;
}

export function BookCard({ id, title, author, coverImage, rating }: BookCardProps) {
  return (
    <Link to={`/books/${id}`}>
      <Card className="book-card overflow-hidden h-full">
        <div className="aspect-[2/3] relative overflow-hidden">
          <img 
            src={coverImage} 
            alt={`${title} by ${author}`} 
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium text-base line-clamp-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{author}</p>
          <div className="flex items-center mt-2">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <span className="ml-1 text-sm">{rating.toFixed(1)}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
