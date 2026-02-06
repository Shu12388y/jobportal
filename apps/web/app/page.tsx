import { Search, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FeaturedJobs from "@/components/_components/featuredJobs";
import CTASection from "@/components/_components/ctaSection";

const trustedLogos = [
  { name: "Google", logo: "https://logo.clearbit.com/google.com" },
  { name: "Stripe", logo: "https://logo.clearbit.com/stripe.com" },
  { name: "Spotify", logo: "https://logo.clearbit.com/spotify.com" },
  { name: "Airbnb", logo: "https://logo.clearbit.com/airbnb.com" },
  { name: "Netflix", logo: "https://logo.clearbit.com/netflix.com" },
  { name: "Slack", logo: "https://logo.clearbit.com/slack.com" },
];

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col pl-10">
      <section className="relative pt-8 pb-20 md:pt-16 md:pb-32 overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute top-0 right-0 w-150 h-150 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-100 h-100 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container relative">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Over 50,000 jobs posted this week
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-[1.1] mb-6">
              Find work that
              <br />
              <span className="editorial-underline">works for you</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mb-10">
              Discover roles at companies that value your skills. From startups
              to Fortune 500, find where you belong.
            </p>

            {/* Search Box */}
            <div className="bg-card border border-border rounded-xl p-2 max-w-2xl">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Job title or keyword"
                    className="pl-10 h-12 border-0 bg-transparent focus-visible:ring-0 text-sm"
                  />
                </div>
                <div className="flex-1 relative border-t sm:border-t-0 sm:border-l border-border">
                  <MapPin className="absolute left-3.5 sm:left-5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Location or remote"
                    className="pl-10 sm:pl-12 h-12 border-0 bg-transparent focus-visible:ring-0 text-sm"
                  />
                </div>
                <Button className="h-12 px-6 bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium">
                  Search
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Popular searches */}
            <div className="flex flex-wrap items-center gap-2 mt-6">
              <span className="text-sm text-muted-foreground">Popular:</span>
              {["Remote", "Engineering", "Design", "Marketing"].map((term) => (
                <button
                  key={term}
                  className="tag-pill hover:bg-muted/80 transition-colors cursor-pointer"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>

          {/* Trusted by section */}
          <div className="mt-20 pt-12 border-t border-border flex flex-col items-center">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
              Trusted by teams at
            </p>
            <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
              {trustedLogos.map((company) => (
                <img
                  key={company.name}
                  src={company.logo}
                  alt={company.name}
                  className="h-6 opacity-40 hover:opacity-70 transition-opacity grayscale"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <FeaturedJobs />
      <CTASection />
    </div>
  );
};

export default Page;
