
import { Progress } from "@/components/ui/progress";

interface ReadingTrackerProps {
  currentPage: number;
  totalPages: number;
  startDate?: Date;
  targetDate?: Date;
}

export function ReadingTracker({ currentPage, totalPages, startDate, targetDate }: ReadingTrackerProps) {
  const progressPercentage = Math.round((currentPage / totalPages) * 100);
  
  const daysElapsed = startDate ? Math.floor((Date.now() - startDate.getTime()) / (1000 * 60 * 60 * 24)) : 0;
  const pagesPerDay = daysElapsed ? Math.round(currentPage / daysElapsed) : 0;
  
  const remainingDays = targetDate ? Math.floor((targetDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24)) : 0;
  const pagesRemaining = totalPages - currentPage;
  const pagesPerDayNeeded = remainingDays && pagesRemaining ? Math.ceil(pagesRemaining / remainingDays) : 0;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Reading Progress</span>
        <span className="text-sm font-medium">{progressPercentage}%</span>
      </div>
      <Progress value={progressPercentage} className="h-2" />
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>Page {currentPage} of {totalPages}</span>
        <span>{pagesRemaining} pages remaining</span>
      </div>
      
      {(startDate || targetDate) && (
        <div className="border rounded-md p-3 mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {startDate && (
            <div>
              <p className="text-xs text-muted-foreground">Reading pace</p>
              <p className="font-medium">{pagesPerDay} pages/day</p>
            </div>
          )}
          {targetDate && pagesPerDayNeeded > 0 && (
            <div>
              <p className="text-xs text-muted-foreground">To meet goal</p>
              <p className="font-medium">{pagesPerDayNeeded} pages/day</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
