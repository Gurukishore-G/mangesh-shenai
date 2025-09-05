import { HeroSection } from "@/components/HeroSection";
import { RecommendationCard } from "@/components/RecommendationCard";
import { recommendations } from "@/data/recommendations";
import { Badge } from "@/components/ui/badge";
import { TrendingUpIcon, UsersIcon, AwardIcon } from "lucide-react";

const Index = () => {
  const profileData = {
    name: "Mangesh Shenai",
    title: "Sales & Leadership Training Expert | Behavioral Psychology Specialist"
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection 
        name={profileData.name}
        title={profileData.title}
        totalRecommendations={recommendations.length}
      />

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                <UsersIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-trust-dark mb-2">{recommendations.length}+</h3>
              <p className="text-trust-gray">Professional Recommendations</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                <TrendingUpIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-trust-dark mb-2">100%</h3>
              <p className="text-trust-gray">Client Satisfaction Rate</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                <AwardIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-trust-dark mb-2">5+</h3>
              <p className="text-trust-gray">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-trust-dark mb-4">
              What Clients Say About My Work
            </h2>
            <p className="text-lg text-trust-gray max-w-2xl mx-auto">
              Discover how my training and coaching has transformed teams and individuals across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendations.map((recommendation) => (
              <RecommendationCard
                key={recommendation.id}
                {...recommendation}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container mx-auto max-w-4xl text-center px-4">
          <h2 className="text-3xl font-bold text-trust-dark mb-4">
            Ready to Transform Your Team?
          </h2>
          <p className="text-lg text-trust-gray mb-8 max-w-2xl mx-auto">
            Join the many organizations that have benefited from expert training in sales, leadership, and behavioral psychology.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Sales Training
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Leadership Development
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              MBTI Expertise
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Behavioral Psychology
            </Badge>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
