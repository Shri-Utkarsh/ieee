
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Calendar, Mail } from "lucide-react";

export default function Chapters() {
  const chapters = [
    {
      name: "Computer Society",
      description: "Advancing computing as a science and profession through technical excellence, educational activities, and professional development.",
      focus: ["Software Engineering", "AI/ML", "Data Science", "Web Development"],
      members: 65,
      coordinator: "Rahul Sharma",
      email: "cs@ieeesbsage.org",
      activities: ["Coding workshops", "Hackathons", "Technical talks", "Project mentoring"],
      upcomingEvent: "AI Workshop Series - Dec 15, 2024"
    },
    {
      name: "Power & Energy Society",
      description: "Promoting technological innovation in the generation, transmission, distribution, and utilization of electric power and energy.",
      focus: ["Renewable Energy", "Smart Grids", "Power Electronics", "Energy Storage"],
      members: 42,
      coordinator: "Priya Patel",
      email: "pes@ieeesbsage.org",
      activities: ["Power system simulations", "Industry visits", "Research projects", "Expert seminars"],
      upcomingEvent: "Renewable Energy Seminar - Jan 10, 2025"
    },
    {
      name: "Women in Engineering (WIE)",
      description: "Inspiring and empowering women in engineering through professional development, mentorship, and networking opportunities.",
      focus: ["Professional Development", "Mentorship", "Leadership", "Diversity & Inclusion"],
      members: 38,
      coordinator: "Sneha Gupta",
      email: "wie@ieeesbsage.org",
      activities: ["Leadership workshops", "Mentorship programs", "Tech talks by women leaders", "Networking events"],
      upcomingEvent: "Women in Tech Panel - Jan 15, 2025"
    },
    {
      name: "Young Professionals",
      description: "Supporting early-career engineers through professional development, networking, and leadership opportunities.",
      focus: ["Career Development", "Industry Networking", "Leadership Skills", "Professional Ethics"],
      members: 28,
      coordinator: "Arjun Kumar",
      email: "yp@ieeesbsage.org",
      activities: ["Career guidance sessions", "Industry networking", "Skill development workshops", "Mock interviews"],
      upcomingEvent: "Career Fair - Feb 5, 2025"
    },
    {
      name: "Robotics and Automation Society",
      description: "Advancing the theory and practice of robotics and automation engineering for the benefit of humanity.",
      focus: ["Robotics", "Automation", "Control Systems", "Mechatronics"],
      members: 55,
      coordinator: "Vikash Singh",
      email: "ras@ieeesbsage.org",
      activities: ["Robot building workshops", "Automation projects", "Competitions", "Industry collaborations"],
      upcomingEvent: "Robotics Competition - Jan 25, 2025"
    },
    {
      name: "Communications Society",
      description: "Promoting advancement in communications and networking technologies through research, education, and industry collaboration.",
      focus: ["5G/6G Technologies", "Network Security", "IoT", "Wireless Communications"],
      members: 35,
      coordinator: "Neha Sharma",
      email: "comsoc@ieeesbsage.org",
      activities: ["Networking workshops", "Research seminars", "Industry projects", "Technical paper reviews"],
      upcomingEvent: "5G Technology Workshop - Feb 15, 2025"
    },
    {
      name: "Signal Processing Society",
      description: "Advancing and promoting the science of signal processing and its applications in various engineering disciplines.",
      focus: ["Digital Signal Processing", "Image Processing", "Audio Processing", "Machine Learning"],
      members: 30,
      coordinator: "Ravi Verma",
      email: "sps@ieeesbsage.org",
      activities: ["Signal processing labs", "Research projects", "Algorithm development", "Industry applications"],
      upcomingEvent: "Image Processing Workshop - Mar 1, 2025"
    },
    {
      name: "Circuits and Systems Society",
      description: "Promoting research and development in circuits, systems, and related technologies for advancing electronic engineering.",
      focus: ["Analog Circuits", "Digital Systems", "VLSI Design", "Embedded Systems"],
      members: 25,
      coordinator: "Amit Jain",
      email: "cas@ieeesbsage.org",
      activities: ["Circuit design workshops", "VLSI projects", "PCB design training", "Industry internships"],
      upcomingEvent: "VLSI Design Workshop - Mar 20, 2025"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Chapters & Societies</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Explore our specialized technical societies and affinity groups, each focusing on specific engineering domains and professional development
          </p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">{chapters.length}</div>
            <div className="text-gray-700">Active Chapters</div>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {chapters.reduce((total, chapter) => total + chapter.members, 0)}
            </div>
            <div className="text-gray-700">Total Members</div>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-gray-700">Annual Activities</div>
          </div>
          <div className="text-center p-6 bg-orange-50 rounded-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">8</div>
            <div className="text-gray-700">Upcoming Events</div>
          </div>
        </div>

        {/* Chapters Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {chapters.map((chapter, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <CardTitle className="text-xl text-blue-600 mb-2">{chapter.name}</CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{chapter.members} members</span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {chapter.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Focus Areas */}
                  <div>
                    <h4 className="font-medium text-sm mb-2">Focus Areas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {chapter.focus.map((area, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {area}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Activities */}
                  <div>
                    <h4 className="font-medium text-sm mb-2">Key Activities:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {chapter.activities.map((activity, idx) => (
                        <li key={idx}>• {activity}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Coordinator Info */}
                  <div className="pt-2 border-t">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Coordinator: {chapter.coordinator}</p>
                        <div className="flex items-center space-x-2 text-xs text-gray-600 mt-1">
                          <Mail className="h-3 w-3" />
                          <span>{chapter.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Upcoming Event */}
                  {chapter.upcomingEvent && (
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="flex items-center space-x-2 text-sm">
                        <Calendar className="h-4 w-4 text-blue-600" />
                        <span className="font-medium text-blue-800">Next Event:</span>
                      </div>
                      <p className="text-sm text-blue-700 mt-1">{chapter.upcomingEvent}</p>
                    </div>
                  )}

                  {/* Join Button */}
                  <Button className="w-full mt-4">Join Chapter</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How to Join */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">How to Join a Chapter</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h3 className="font-semibold">Choose Your Interest</h3>
                <p className="text-gray-600 text-sm">
                  Explore the different chapters and find the one that aligns with your technical interests and career goals.
                </p>
              </div>
              <div className="space-y-3">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <h3 className="font-semibold">Contact Coordinator</h3>
                <p className="text-gray-600 text-sm">
                  Reach out to the chapter coordinator via email to express your interest and learn about membership requirements.
                </p>
              </div>
              <div className="space-y-3">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <h3 className="font-semibold">Start Participating</h3>
                <p className="text-gray-600 text-sm">
                  Attend meetings, participate in activities, and begin your journey of technical and professional growth.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
