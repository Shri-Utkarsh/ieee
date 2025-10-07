"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail } from "lucide-react";

export default function About() {
  const executiveCommittee = [
    {
      name: "Raj Thakur",
      position: "Chairperson",
      email: "rajthakur913124@gmail.com",
      image: "/team-img/raj.jpeg",
    },
    {
      name: "Neelesh Choursiya",
      position: "Vice Chairperson",
      email: "neeleshchoursiya0786@gmail.com",
      image: "/team-img/neelesh.jpeg",
    },
    {
      name: "Anuj Agrawal",
      position: "Secretary",
      email: "anujagrawal311204@gmail.com",
      image: "/team-img/anuj.jpeg",
    },
    {
      name: "Piyush More",
      position: "Treasurer",
      email: "piyushmore302@gmail.com",
      image: "/team-img/piyush.png",
    },
    {
      name: "Raushan Raj",
      position: "Chairperson Educational Society",
      email: "raushanraj1200@sageuniversity.in",
      image: "/team-img/raushan.jpeg",
    },
    {
      name: "Nandini Sameliya",
      position: "Chairperson Women in Engineering",
      email: "nandinisameliya@gmail.com",
      image: "/team-img/",
    },
    {
      name: "Utkarsh Srivastava ",
      position: "Vice Chairperson Educational Society",
      email: "utkarshsrivastava1422@gmail.com",
      image: "/team-img/utkarsh.jpeg",
    },
    {
      name: "Avni Chaudhary",
      position: "vice Chairperson Women in Engineering",
      email: "avni.chaudhary29@gmail.com",
      image: "/team-img/",
    },
  ];

  const facultyAdvisors = [
    {
      name: "Dr. Nitika Vats",
      position: "Faculty Advisor",
      email: "nitika.doohan@gmail.com",
    },
  ];

  return (
    <div className="min-h-screen py-12 bg-gray-50 text-gray-900 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black dark:text-white transition-colors duration-500">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            About IEEE SB SAGE
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Empowering students through technology, innovation, and professional
            development since 2023
          </p>
        </div>

        {/* About us */}
        <Card className="mb-16 bg-white dark:bg-gray-800/70 shadow-lg dark:shadow-gray-800 border border-gray-200 dark:border-gray-700 transition-all">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-700 dark:text-blue-400">
              About Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The IEEE Student Branch at SAGE University Indore is a dynamic
              platform for students passionate about engineering, science, and
              technology. As a part of the world’s largest professional
              association dedicated to advancing technology, we provide
              opportunities to learn, network, and grow. Our branch organizes
              seminars, technical talks, hackathons, conferences, and
              community-driven initiatives, ensuring that members gain hands-on
              experience beyond the classroom. We take pride in fostering
              innovation, teamwork, and professional development, helping our
              members shine on both national and international stages.
            </p>
          </CardContent>
        </Card>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white dark:bg-gray-800/70 shadow-lg dark:shadow-gray-800 border border-gray-200 dark:border-gray-700 transition-all">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700 dark:text-blue-400">
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Our mission is to empower students to explore, innovate, and
                excel in the fields of engineering, technology, and research. We
                aim to create a collaborative ecosystem that nurtures technical
                skills, leadership qualities, and problem-solving abilities.
                Through workshops, projects, competitions, and knowledge-sharing
                platforms, we strive to inspire young minds to contribute
                meaningfully to society and the global tech community.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800/70 shadow-lg dark:shadow-gray-800 border border-gray-200 dark:border-gray-700 transition-all">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700 dark:text-blue-400">
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We envision building a vibrant community of innovators and
                leaders who drive positive change through technology and
                knowledge. Our vision is to position the IEEE Student Branch as
                a hub of excellence where students can bridge the gap between
                academics and industry, explore interdisciplinary fields, and
                prepare themselves to meet the challenges of tomorrow with
                confidence, creativity, and integrity.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Faculty Advisors */}
        <div className="mb-24 px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-14 text-center tracking-tight">
            Faculty Advisors
          </h2>

          <div className="flex flex-wrap justify-center gap-10">
            {facultyAdvisors.map((advisor, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white rounded-3xl shadow-xl dark:shadow-gray-800 p-8 w-full sm:w-[400px] md:w-[380px] lg:w-[420px] transition-transform transform hover:scale-105 hover:shadow-2xl border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col items-center space-y-5 text-center">
                  <div className="relative h-[150px] w-[150px] rounded-full overflow-hidden ring-4 ring-blue-600 shadow-md">
                    <img
                      src={"/team-img/nitika vats.jpeg"}
                      alt={advisor.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">{advisor.name}</h3>
                    <span className="inline-block mt-2 text-sm font-medium bg-indigo-600/30 text-indigo-100 px-3 py-1 rounded-full">
                      {advisor.position}
                    </span>
                    <div className="flex items-center justify-center space-x-2 text-base text-gray-500 dark:text-gray-300 mt-3">
                      <Mail className="h-5 w-5 text-indigo-500" />
                      <span>{advisor.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Committee */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-14 text-center tracking-tight">
            Executive Committee 2024-25
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {executiveCommittee.map((member, index) => (
              <Card
                key={index}
                className="bg-white dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white rounded-3xl shadow-lg dark:shadow-gray-800 p-6 flex flex-col items-center hover:shadow-2xl transition-transform transform hover:scale-105 border border-gray-200 dark:border-gray-700"
              >
                {/* Profile Image */}
                <div className="relative h-24 w-24 rounded-full overflow-hidden ring-4 ring-indigo-500 mb-5 shadow-md">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Name & Position */}
                <CardHeader className="text-center space-y-1 p-0">
                  <CardTitle className="text-lg font-semibold mb-0">
                    {member.name}
                  </CardTitle>
                  <Badge className="w-fit mx-auto bg-indigo-600/40 text-indigo-100 px-3 py-1 text-sm font-medium rounded-full">
                    {member.position}
                  </Badge>
                  <div className="flex items-center justify-center space-x-2 text-xs text-gray-600 dark:text-gray-300 mt-3">
                    <Mail className="h-4 w-4 text-indigo-500" />
                    <span>{member.email}</span>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
