"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Briefcase, MapPin, DollarSign, Clock } from "lucide-react";

export default function Page() {
  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Stripe",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=Stripe",
      location: "Remote",
      type: "Full-time",
      salary: "$120k - $180k",
      posted: "2d ago",
      skills: ["React", "TypeScript", "Next.js"],
      description:
        "We're looking for an experienced frontend developer to help build the future of online payments...",
    },
    {
      id: 2,
      title: "Product Designer",
      company: "Vercel",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=Vercel",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$130k - $170k",
      posted: "3d ago",
      skills: ["Figma", "UI/UX", "Design Systems"],
      description:
        "Join our design team to craft beautiful experiences for millions of developers worldwide...",
    },
    {
      id: 3,
      title: "Full-Stack Engineer",
      company: "Linear",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=Linear",
      location: "Remote",
      type: "Full-time",
      salary: "$140k - $200k",
      posted: "5d ago",
      skills: ["React", "Node.js", "PostgreSQL"],
      description:
        "Help us build the best issue tracking tool for high-performance teams...",
    },
    {
      id: 4,
      title: "Mobile Developer (React Native)",
      company: "Notion",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=Notion",
      location: "New York, NY",
      type: "Full-time",
      salary: "$110k - $160k",
      posted: "1w ago",
      skills: ["React Native", "iOS", "Android"],
      description:
        "Build and ship features for our mobile app used by millions of users every day...",
    },
    {
      id: 5,
      title: "Backend Engineer",
      company: "Supabase",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=Supabase",
      location: "Remote",
      type: "Contract",
      salary: "$100 - $150/hr",
      posted: "1w ago",
      skills: ["PostgreSQL", "Node.js", "Docker"],
      description:
        "Work on our open-source Firebase alternative, building scalable backend infrastructure...",
    },
    {
      id: 6,
      title: "DevOps Engineer",
      company: "Railway",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=Railway",
      location: "Remote",
      type: "Full-time",
      salary: "$130k - $180k",
      posted: "2w ago",
      skills: ["Kubernetes", "AWS", "Terraform"],
      description:
        "Help scale our infrastructure platform that deploys millions of applications...",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto py-8 px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-zinc-900 mb-2">
            Job openings
          </h1>
          <p className="text-zinc-600">{jobs.length} positions available</p>
        </div>

        {/* Filters */}
        <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
          <button className="px-4 py-2 bg-zinc-900 text-white rounded-full text-sm font-medium whitespace-nowrap">
            All jobs
          </button>
          <button className="px-4 py-2 bg-zinc-100 text-zinc-700 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors whitespace-nowrap">
            Remote only
          </button>
          <button className="px-4 py-2 bg-zinc-100 text-zinc-700 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors whitespace-nowrap">
            Full-time
          </button>
          <button className="px-4 py-2 bg-zinc-100 text-zinc-700 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors whitespace-nowrap">
            Contract
          </button>
        </div>

        {/* Job List */}
        <div className="space-y-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="border border-zinc-200 rounded-lg p-6 hover:border-zinc-300 transition-colors cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex gap-4">
                  <Avatar className="h-12 w-12 rounded-lg">
                    <AvatarImage src={job.logo} />
                    <AvatarFallback className="rounded-lg">
                      {job.company[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-xl font-semibold text-zinc-900 group-hover:text-zinc-700 transition-colors">
                      {job.title}
                    </h2>
                    <p className="text-zinc-600">{job.company}</p>
                  </div>
                </div>
              </div>

              <p className="text-zinc-700 mb-4">{job.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {job.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-zinc-100 text-zinc-700 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-zinc-600">
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Briefcase className="h-4 w-4" />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <DollarSign className="h-4 w-4" />
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  <span>{job.posted}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
