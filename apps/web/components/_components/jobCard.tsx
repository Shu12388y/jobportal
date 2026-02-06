import { MapPin, Building2, ArrowUpRight } from "lucide-react";

interface JobCardProps {
  title: string;
  company: string;
  logo: string;
  location: string;
  salary: string;
  type: string;
  posted: string;
  tags: string[];
  featured?: boolean;
}

const JobCard = ({ 
  title, 
  company, 
  logo, 
  location, 
  salary, 
  type, 
  tags,
  featured = false 
}: JobCardProps) => {
  return (
    <article className={`group card-editorial rounded-lg p-5 cursor-pointer ${featured ? 'ring-1 ring-primary/20' : ''}`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-11 h-11 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
              {logo ? (
                <img src={logo} alt={company} className="w-7 h-7 object-contain" />
              ) : (
                <Building2 className="w-5 h-5 text-muted-foreground" />
              )}
            </div>
          </div>
          
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                {title}
              </h3>
              {featured && (
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wider bg-primary/10 text-primary">
                  Featured
                </span>
              )}
            </div>
            <p className="text-sm text-muted-foreground mt-0.5">{company}</p>
          </div>
        </div>

        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight className="h-5 w-5 text-primary" />
        </div>
      </div>
      
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5" />
          {location}
        </span>
        <span>·</span>
        <span>{salary}</span>
        <span>·</span>
        <span>{type}</span>
      </div>
      
      <div className="flex flex-wrap gap-1.5 mt-4">
        {tags.slice(0, 3).map((tag) => (
          <span key={tag} className="tag-pill">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};

export default JobCard;