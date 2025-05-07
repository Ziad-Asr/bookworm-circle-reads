
import { PageLayout } from "@/components/Layout/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { AreaChart, BarChart } from "@/components/ui/charts";

export default function ReadingStats() {
  return (
    <PageLayout>
      <div className="page-container">
        <h1 className="section-title">Reading Stats</h1>
        
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Books Read This Year
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">24</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Pages Read
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">7,842</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Reading Streak
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">18 days</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Avg. Rating Given
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">4.2/5</div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="reading">
          <TabsList className="mb-6">
            <TabsTrigger value="reading">Reading Activity</TabsTrigger>
            <TabsTrigger value="genres">Genres</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
          </TabsList>
          
          <TabsContent value="reading">
            <Card>
              <CardHeader>
                <CardTitle>Reading Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <AreaChart
                  data={[
                    { date: "Jan", pages: 212 },
                    { date: "Feb", pages: 298 },
                    { date: "Mar", pages: 387 },
                    { date: "Apr", pages: 311 },
                    { date: "May", pages: 462 },
                    { date: "Jun", pages: 522 },
                    { date: "Jul", pages: 321 },
                    { date: "Aug", pages: 402 },
                    { date: "Sep", pages: 481 },
                    { date: "Oct", pages: 0 },
                    { date: "Nov", pages: 0 },
                    { date: "Dec", pages: 0 },
                  ]}
                  categories={["pages"]}
                  index="date"
                  colors={["#8B5CF6"]}
                  yAxisWidth={40}
                  className="h-80"
                />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="genres">
            <Card>
              <CardHeader>
                <CardTitle>Books Read by Genre</CardTitle>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={[
                    { genre: "Fiction", count: 12 },
                    { genre: "Non-Fiction", count: 6 },
                    { genre: "Fantasy", count: 8 },
                    { genre: "Science Fiction", count: 4 },
                    { genre: "Mystery", count: 7 },
                    { genre: "Biography", count: 3 },
                    { genre: "Self-Help", count: 5 },
                  ]}
                  categories={["count"]}
                  index="genre"
                  colors={["#8B5CF6"]}
                  yAxisWidth={40}
                  className="h-80"
                />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="progress">
            <Card>
              <CardHeader>
                <CardTitle>Reading Goal Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Yearly Goal: 52 books</span>
                      <span className="text-sm">24/52 (46%)</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full mt-1">
                      <div className="h-full bg-bookshelf-primary rounded-full" style={{ width: "46%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Monthly Goal: 4 books</span>
                      <span className="text-sm">2/4 (50%)</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full mt-1">
                      <div className="h-full bg-bookshelf-primary rounded-full" style={{ width: "50%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Pages per Day: 30 pages</span>
                      <span className="text-sm">Average: 32 pages</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full mt-1">
                      <div className="h-full bg-bookshelf-primary rounded-full" style={{ width: "107%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
}
