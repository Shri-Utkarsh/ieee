
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Events() {
  const [selectedTab, setSelectedTab] = useState("upcoming");
  const navigate = useNavigate();

  const upcomingEvents = [
    {
      id: 1,
      title: "PathX Series #5: Build Career With AI",
      date: "7th October, 2025",
      time: "06:00 PM - 07:00 PM",
      location: "Google Meet",
      type: "Seminar",
      attendees: null,
      maxAttendees: null,
      description: "Guidance on how to work with AI, covering fundamentals of AI/ML with practical implementation using Python and TensorFlow.",
      status: "Coming Soon"
    },
    {
      id: 2,
      title: "IEEE Day Celebration 2024",
      date: "Coming Soon...",
      time: "9:00 AM - 6:00 PM",
      location: "Online",
      type: "Celebration",
      attendees: null,
      maxAttendees: null,
      description: "Annual IEEE Day celebration featuring technical presentations, poster sessions, and networking opportunities.",
      status: "Coming Soon"
    },
    {
      id: 3,
      title: "Renewable Energy Systems Seminar",
      date: "comming soon...",
      time: "2:00 PM - 5:00 PM",
      location: "Seminar Hall, Block B",
      type: "Seminar",
      attendees: null,
      maxAttendees: null,
      description: "Expert talk on latest developments in renewable energy systems and sustainable power generation.",
      status: "Coming Soon"
    },
    {
      id: 4,
      title: "Robotics Competition",
      date: "comming soon...",
      time: "9:00 AM - 6:00 PM",
      location: "Engineering Lab Complex",
      type: "Competition",
      attendees: null,
      maxAttendees: null,
      description: "Inter-college robotics competition featuring line-following, obstacle avoidance, and custom challenge rounds.",
      status: "Coming Soon"
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: "Web Development Bootcamp",
      date: "November 15, 2024",
      time: "10:00 AM - 5:00 PM",
      location: "Computer Lab 2, Block A",
      type: "Bootcamp",
      attendees: 60,
      maxAttendees: 60,
      description: "Comprehensive bootcamp covering HTML, CSS, JavaScript, and React.js for modern web development.",
      status: "Completed",
      outcomes: "40 students completed final projects"
    },
    {
      id: 6,
      title: "Cybersecurity Awareness Session",
      date: "October 28, 2024",
      time: "3:00 PM - 6:00 PM",
      location: "Main Auditorium",
      type: "Seminar",
      attendees: 120,
      maxAttendees: 150,
      description: "Interactive session on cybersecurity best practices, ethical hacking, and digital privacy.",
      status: "Completed",
      outcomes: "Successfully raised awareness among 120+ students"
    },
    {
      id: 7,
      title: "IoT Innovation Challenge",
      date: "September 20, 2024",
      time: "9:00 AM - 8:00 PM",
      location: "Innovation Lab",
      type: "Hackathon",
      attendees: 80,
      maxAttendees: 80,
      description: "24-hour hackathon focused on developing IoT solutions for smart cities and sustainable development.",
      status: "Completed",
      outcomes: "15 innovative projects developed, 3 winners selected"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Registration Open":
        return "bg-green-100 text-green-800";
      case "Coming Soon":
        return "bg-blue-100 text-blue-800";
      case "Completed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Workshop":
        return "bg-purple-100 text-purple-800";
      case "Seminar":
        return "bg-blue-100 text-blue-800";
      case "Competition":
        return "bg-red-100 text-red-800";
      case "Hackathon":
        return "bg-orange-100 text-orange-800";
      case "Bootcamp":
        return "bg-indigo-100 text-indigo-800";
      case "Celebration":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
   <div className="min-h-screen py-16 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
  <div className="container mx-auto px-6">
    {/* Header */}
    <div className="text-center mb-16">
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
        Events
      </h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Join our hands-on workshops, inspiring seminars, and exciting competitions designed to
        enhance your engineering and networking skills.
      </p>
      <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
    </div>

    {/* Tabs */}
    <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-10">
      <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 rounded-xl bg-gray-200 dark:bg-gray-800 p-1">
        <TabsTrigger
          value="upcoming"
          className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-lg text-gray-700 dark:text-gray-300"
        >
          Upcoming Events
        </TabsTrigger>
        <TabsTrigger
          value="past"
          className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-lg text-gray-700 dark:text-gray-300"
        >
          Past Events
        </TabsTrigger>
      </TabsList>

      {/* Upcoming Events */}
      <TabsContent value="upcoming" className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {upcomingEvents.map((event) => (
            <Card
              key={event.id}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex gap-2">
                    <Badge className={getTypeColor(event.type)}>{event.type}</Badge>
                    <Badge className={getStatusColor(event.status)}>{event.status}</Badge>
                  </div>
                </div>
                <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {event.title}
                </CardTitle>
                <CardDescription className="text-base text-gray-700 dark:text-gray-300">
                  {event.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-blue-500" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-blue-500" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-blue-500" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-blue-500" />
                    <span>
                      {event.attendees}/{event.maxAttendees} registered
                    </span>
                  </div>

                  {event.status === "Registration Open" && (
                    <div className="pt-4">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition-all">
                        Register Now
                      </Button>
                    </div>
                  )}

                  {event.status === "Coming Soon" && (
                    <div className="pt-4">
                      <Button
                        variant="outline"
                        className="w-full border-gray-400 dark:border-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                        disabled
                      >
                        Registration Opens Soon
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>

      {/* Past Events */}
      <TabsContent value="past" className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {pastEvents.map((event) => (
            <Card
              key={event.id}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex gap-2">
                    <Badge className={getTypeColor(event.type)}>{event.type}</Badge>
                    <Badge className={getStatusColor(event.status)}>{event.status}</Badge>
                  </div>
                </div>
                <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {event.title}
                </CardTitle>
                <CardDescription className="text-base text-gray-700 dark:text-gray-300">
                  {event.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-blue-500" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-blue-500" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-blue-500" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-blue-500" />
                    <span>{event.attendees} attendees</span>
                  </div>

                  {event.outcomes && (
                    <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                      <h4 className="font-medium text-sm mb-1 text-gray-800 dark:text-gray-200">
                        Outcomes:
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {event.outcomes}
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>

    {/* Subscribe CTA */}
    <Card className="mt-16 text-center bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white">
          Stay Updated 🚀
        </CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-400 text-base max-w-lg mx-auto">
          Subscribe to our newsletter and never miss an update on upcoming events,
          workshops, and opportunities.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-all"
          onClick={() => navigate('/contact')}
        >
          Subscribe to Newsletter
        </Button>
      </CardContent>
    </Card>
  </div>
</div>

  );
}
