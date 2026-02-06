"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/60 backdrop-blur-md">
      <div className="">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-ink rounded-md flex items-center justify-center">
                <span className="text-background font-display font-bold text-sm">
                  JF
                </span>
              </div>
              <span className="text-lg font-display font-semibold tracking-tight">
                jobflow
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              <Link
                href="/jobs"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Find Jobs
              </Link>
              <Link
                href="/insights"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Insights
              </Link>
              <Link
                href="/recommdations"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Recommendation
              </Link>
            </nav>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" className="text-sm font-medium">
              Log in
            </Button>
            <Button className="bg-ink text-black hover:bg-ink/90 text-sm font-medium px-5">
              Post a Job
              <ArrowUpRight className="ml-1.5 h-4 w-4" />
            </Button>
          </div>

          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container py-6 flex flex-col gap-4">
            <Link href="/jobs" className="text-sm font-medium py-2">
              Find Jobs
            </Link>
            <Link href="/insights" className="text-sm font-medium py-2">
              Insights
            </Link>
            <Link href="/recommdations" className="text-sm font-medium py-2">
              Recommendation
            </Link>
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <Button variant="outline" className="w-full">
                Log in
              </Button>
              <Button className="w-full bg-ink text-background">
                Post a Job
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
