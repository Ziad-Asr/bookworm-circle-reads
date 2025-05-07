
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { format } from "date-fns";

interface ReviewCardProps {
  userName: string;
  userAvatar: string;
  rating: number;
  date: Date;
  content: string;
}

export function ReviewCard({ userName, userAvatar, rating, date, content }: ReviewCardProps) {
  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <img
            src={userAvatar}
            alt={userName}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <h4 className="font-medium text-sm">{userName}</h4>
            <div className="flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-3 w-3 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} 
                  />
                ))}
              </div>
              <span className="ml-2 text-xs text-muted-foreground">
                {format(date, 'MMM d, yyyy')}
              </span>
            </div>
          </div>
        </div>
        <p className="text-sm">{content}</p>
      </CardContent>
    </Card>
  );
}
