import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

interface RecommendationCardProps {
  name: string;
  title: string;
  company: string;
  relationship: string;
  date: string;
  content: string;
  avatar?: string;
}

export const RecommendationCard = ({
  name,
  title,
  company,
  relationship,
  date,
  content,
  avatar
}: RecommendationCardProps) => {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <Card className="group p-6 h-full flex flex-col bg-card shadow-soft hover:shadow-large transition-all duration-500 border-border/50 hover:border-primary/20 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-card hover:to-secondary/30">
      <div className="flex items-start gap-4 mb-4">
        <Avatar className="h-12 w-12 border-2 border-trust-blue/20 group-hover:border-primary/40 transition-all duration-300 group-hover:scale-110">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold group-hover:animate-glow">
            {initials}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-trust-dark text-lg leading-tight group-hover:text-primary transition-colors duration-300">{name}</h3>
          <p className="text-trust-gray text-sm font-medium group-hover:text-trust-dark transition-colors duration-300">{title}</p>
          <p className="text-trust-gray text-sm group-hover:text-trust-dark transition-colors duration-300">{company}</p>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="secondary" className="text-xs bg-secondary/60 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
              {relationship}
            </Badge>
            <span className="text-xs text-muted-foreground group-hover:text-trust-gray transition-colors duration-300">{date}</span>
          </div>
        </div>
      </div>
      
      <div className="flex-1 relative">
        <Quote className="absolute -top-1 -left-1 h-8 w-8 text-trust-blue/20 group-hover:text-primary/40 transition-all duration-300 group-hover:scale-110" />
        <p className="text-foreground leading-relaxed pl-6 relative z-10 group-hover:text-trust-dark transition-colors duration-300">
          {content}
        </p>
      </div>
    </Card>
  );
};