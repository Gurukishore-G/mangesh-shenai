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
    <Card className="p-6 h-full flex flex-col bg-card shadow-soft hover:shadow-medium transition-all duration-300 border-border/50">
      <div className="flex items-start gap-4 mb-4">
        <Avatar className="h-12 w-12 border-2 border-trust-blue/20">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">
            {initials}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-trust-dark text-lg leading-tight">{name}</h3>
          <p className="text-trust-gray text-sm font-medium">{title}</p>
          <p className="text-trust-gray text-sm">{company}</p>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="secondary" className="text-xs bg-secondary/60">
              {relationship}
            </Badge>
            <span className="text-xs text-muted-foreground">{date}</span>
          </div>
        </div>
      </div>
      
      <div className="flex-1 relative">
        <Quote className="absolute -top-1 -left-1 h-8 w-8 text-trust-blue/20" />
        <p className="text-foreground leading-relaxed pl-6 relative z-10">
          {content}
        </p>
      </div>
    </Card>
  );
};