import JobCard from "./jobCard";
import { ArrowRight } from "lucide-react";

const featuredJobs = [
  {
    id: 1,
    title: "Senior Product Designer",
    company: "Spotify",
    logo: "https://logo.clearbit.com/spotify.com",
    location: "San Francisco, CA",
    salary: "$120k – $180k",
    type: "Full-time",
    posted: "2h ago",
    tags: ["Design", "Figma", "User Research"],
    featured: true,
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Stripe",
    logo: "https://logo.clearbit.com/stripe.com",
    location: "Remote",
    salary: "$140k – $200k",
    type: "Full-time",
    posted: "5h ago",
    tags: ["React", "Node.js", "TypeScript"],
    featured: true,
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "Airbnb",
    logo: "https://logo.clearbit.com/airbnb.com",
    location: "New York, NY",
    salary: "$130k – $170k",
    type: "Full-time",
    posted: "1d ago",
    tags: ["Python", "ML", "SQL"],
    featured: false,
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "Netflix",
    logo: "https://logo.clearbit.com/netflix.com",
    location: "Los Angeles, CA",
    salary: "$150k – $210k",
    type: "Full-time",
    posted: "1d ago",
    tags: ["AWS", "Kubernetes", "CI/CD"],
    featured: false,
  },
  {
    id: 5,
    title: "Marketing Lead",
    company: "Slack",
    logo: "https://logo.clearbit.com/slack.com",
    location: "Remote",
    salary: "$90k – $130k",
    type: "Full-time",
    posted: "2d ago",
    tags: ["Growth", "SEO", "Analytics"],
    featured: false,
  },
  {
    id: 6,
    title: "iOS Engineer",
    company: "Apple",
    logo: "https://logo.clearbit.com/apple.com",
    location: "Cupertino, CA",
    salary: "$160k – $220k",
    type: "Full-time",
    posted: "3d ago",
    tags: ["Swift", "SwiftUI", "iOS"],
    featured: false,
  },
];

const FeaturedJobs = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight">
              Featured opportunities
            </h2>
            <p className="text-muted-foreground mt-1.5 text-sm">
              Hand-picked roles from companies we love
            </p>
          </div>
          <a 
            href="/jobs" 
            className="inline-flex items-center text-sm font-medium text-primary hover:underline underline-offset-4 group"
          >
            View all jobs
            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredJobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;