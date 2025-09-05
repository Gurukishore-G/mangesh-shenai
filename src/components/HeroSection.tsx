import { Button } from "@/components/ui/button";
import { LinkedinIcon, ExternalLinkIcon } from "lucide-react";

interface HeroSectionProps {
  name: string;
  title: string;
  totalRecommendations: number;
}

export const HeroSection = ({ name, title, totalRecommendations }: HeroSectionProps) => {
  const handleLinkedInClick = () => {
    // Replace with actual LinkedIn profile URL
    window.open("https://linkedin.com/in/your-profile", "_blank");
  };

  return (
    <section className="relative bg-gradient-hero text-white py-20 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="mb-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Professional <span className="text-white/90">Recommendations</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-white/90 mb-2">
            {name}
          </p>
          <p className="text-lg text-white/80 mb-8">
            {title}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
            <span className="text-2xl font-bold">{totalRecommendations}</span>
            <span className="text-white/90 ml-2">Professional Recommendations</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            onClick={handleLinkedInClick}
            variant="secondary" 
            size="lg"
            className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transition-all duration-300"
          >
            <LinkedinIcon className="mr-2 h-5 w-5" />
            View LinkedIn Profile
            <ExternalLinkIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};