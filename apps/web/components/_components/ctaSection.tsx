import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-black text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6">
            Ready to find your
            <br />
            next opportunity?
          </h2>
          <p className="text-background/60 text-lg mb-10 max-w-xl mx-auto">
            Join over 2 million professionals who've found their dream roles
            through JobFlow.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-orange-400 text-primary-foreground hover:bg-orange/50 text-sm font-medium px-8 h-12"
            >
              Get started free
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-background  text-sm font-medium px-8 h-12"
            >
              For employers
            </Button>
          </div>

          <div className="mt-12 pt-12 border-t border-background/10">
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
              <div className="text-center">
                <p className="text-3xl font-display font-bold">50K+</p>
                <p className="text-sm text-background/50 mt-1">Active jobs</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-bold">10K+</p>
                <p className="text-sm text-background/50 mt-1">Companies</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-bold">2M+</p>
                <p className="text-sm text-background/50 mt-1">Professionals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
