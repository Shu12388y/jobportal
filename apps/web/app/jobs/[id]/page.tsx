"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ArrowLeft,
  MapPin,
  Briefcase,
  DollarSign,
  Clock,
  Users,
  Bookmark,
  Share2,
  Flag,
} from "lucide-react";

function Page({ params }: { params: { id: string } }) {
  const [saved, setSaved] = React.useState(false);

  const job = {
    title: "Senior Frontend Developer",
    company: "Stripe",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=Stripe",
    location: "Remote",
    type: "Full-time",
    salary: "$120k - $180k",
    posted: "2 days ago",
    applicants: 47,
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"],
    description: `We're looking for an experienced frontend developer to join our Payments team. You'll be working on the checkout experience used by millions of businesses worldwide.

This is a high-impact role where you'll be responsible for building and maintaining critical user-facing features that directly affect Stripe's revenue.`,
    responsibilities: [
      "Build and maintain user-facing features for our checkout and payment flows",
      "Collaborate with designers and backend engineers to ship new features",
      "Write clean, maintainable code with comprehensive test coverage",
      "Participate in code reviews and mentor junior engineers",
      "Optimize performance and ensure accessibility across all features",
    ],
    requirements: [
      "5+ years of experience with React and modern JavaScript",
      "Strong understanding of web performance and optimization",
      "Experience with TypeScript and type-safe development",
      "Excellent communication and collaboration skills",
      "Previous experience with payment systems is a plus",
    ],
    benefits: [
      "Competitive salary and equity package",
      "Health, dental, and vision insurance",
      "401(k) matching",
      "Flexible PTO and work from home policy",
      "Learning and development budget",
      "Home office setup stipend",
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto py-8 px-4">
        {/* Back Button */}
        <button className="flex items-center gap-2 text-zinc-600 hover:text-zinc-900 mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to jobs</span>
        </button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start gap-4 mb-6">
            <Avatar className="h-16 w-16 rounded-lg">
              <AvatarImage src={job.logo} />
              <AvatarFallback className="rounded-lg text-xl">
                {job.company[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-3xl font-semibold text-zinc-900 mb-2">
                {job.title}
              </h1>
              <p className="text-lg text-zinc-600">{job.company}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setSaved(!saved)}
                className="p-2.5 border border-zinc-300 rounded-lg hover:bg-zinc-50 transition-colors"
              >
                <Bookmark
                  className={`h-5 w-5 ${saved ? "fill-zinc-900 text-zinc-900" : "text-zinc-600"}`}
                />
              </button>
              <button className="p-2.5 border border-zinc-300 rounded-lg hover:bg-zinc-50 transition-colors">
                <Share2 className="h-5 w-5 text-zinc-600" />
              </button>
              <button className="p-2.5 border border-zinc-300 rounded-lg hover:bg-zinc-50 transition-colors">
                <Flag className="h-5 w-5 text-zinc-600" />
              </button>
            </div>
          </div>

          {/* Job Info */}
          <div className="flex flex-wrap gap-4 text-sm text-zinc-600 mb-6">
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
              <span>Posted {job.posted}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="h-4 w-4" />
              <span>{job.applicants} applicants</span>
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {job.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 bg-zinc-100 text-zinc-700 text-sm rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Apply Button */}
          <button className="w-full sm:w-auto px-8 py-3 bg-zinc-900 text-white font-medium rounded-lg hover:bg-zinc-800 transition-colors">
            Apply now
          </button>
        </div>

        {/* Job Description */}
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">
              About the role
            </h2>
            <p className="text-zinc-700 whitespace-pre-line leading-relaxed">
              {job.description}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">
              Responsibilities
            </h2>
            <ul className="space-y-2">
              {job.responsibilities.map((item, index) => (
                <li key={index} className="flex gap-3 text-zinc-700">
                  <span className="text-zinc-400 mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">
              Requirements
            </h2>
            <ul className="space-y-2">
              {job.requirements.map((item, index) => (
                <li key={index} className="flex gap-3 text-zinc-700">
                  <span className="text-zinc-400 mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">
              Benefits
            </h2>
            <ul className="space-y-2">
              {job.benefits.map((item, index) => (
                <li key={index} className="flex gap-3 text-zinc-700">
                  <span className="text-zinc-400 mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Apply Button */}
        <div className="mt-12 pt-8 border-t border-zinc-200">
          <button className="w-full sm:w-auto px-8 py-3 bg-zinc-900 text-white font-medium rounded-lg hover:bg-zinc-800 transition-colors">
            Apply for this position
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
