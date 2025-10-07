import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Newspaper, Image } from "lucide-react";
import HeroSection from "../components/HeroSection";

export default function Index() {
  const upcomingEvents = [
    {
      title: "AI Workshop Series",
      date: "December 15, 2024",
      description: "Learn about machine learning and AI applications",
      type: "Workshop",
    },
    {
      title: "IEEE Day Celebration",
      date: "December 20, 2024",
      description: "Annual celebration with technical presentations",
      type: "Event",
    },
    {
      title: "Power Systems Seminar",
      date: "January 10, 2025",
      description: "Expert talk on renewable energy systems",
      type: "Seminar",
    },
  ];

  const achievements = [
    {
      title: "Best Student Branch Award",
      description:
        "Recognized as the top performing student branch in Central India",
      year: "2024",
    },
    {
      title: "Technical Paper Competition",
      description: "First place in national IEEE technical paper presentation",
      year: "2024",
    },
    {
      title: "Community Service Recognition",
      description: "Outstanding contribution to engineering education outreach",
      year: "2023",
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* Quick Stats */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-blue-600">200+</div>
              <div className="text-gray-600">Active Members</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-blue-600">50+</div>
              <div className="text-gray-600">Events Organized</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-blue-600">8</div>
              <div className="text-gray-600">Active Chapters</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-blue-600">5+</div>
              <div className="text-gray-600">Years Active</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Upcoming Events */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
              Upcoming Events
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              Join us for exciting technical events and hands-on workshops
            </p>
            <div className="mt-4 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex justify-between items-center mb-3">
                    <Badge
                      variant={
                        event.type === "Workshop" ? "default" : "secondary"
                      }
                      className="px-3 py-1 text-sm font-medium rounded-full"
                    >
                      {event.type}
                    </Badge>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {event.date}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                    {event.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {event.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:opacity-90 hover:scale-105 transition-transform duration-300 shadow-md"
            >
              <Link to="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <Link to="/events">
                <CardHeader>
                  <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Workshops, seminars, and technical events
                  </CardDescription>
                </CardContent>
              </Link>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <Link to="/chapters">
                <CardHeader>
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Chapters</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Specialized technical societies and groups
                  </CardDescription>
                </CardContent>
              </Link>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <Link to="/news">
                <CardHeader>
                  <Newspaper className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>News</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Latest updates and announcements
                  </CardDescription>
                </CardContent>
              </Link>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <Link to="/gallery">
                <CardHeader>
                  <Image className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Gallery</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Photos and videos from our events
                  </CardDescription>
                </CardContent>
              </Link>
            </Card>
          </div>
        </div>
      </section> */}
    </div>
  );
}
