import { HeroSection } from "@/components/HeroSection";
import { RecommendationCard } from "@/components/RecommendationCard";
import { recommendations } from "@/data/recommendations";
import { Badge } from "@/components/ui/badge";
import { TrendingUpIcon, UsersIcon, AwardIcon } from "lucide-react";
import { useStaggeredAnimation, useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  const profileData = {
    name: "Mangesh Shenai",
    title: "Sales & Leadership Training Expert | Behavioral Psychology Specialist"
  };

  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();
  const { ref: cardsRef, visibleItems } = useStaggeredAnimation(recommendations.length, 150);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection 
        name={profileData.name}
        title={profileData.title}
        totalRecommendations={recommendations.length}
      />

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-muted/30 overflow-hidden">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className={`flex flex-col items-center transition-all duration-700 ${statsVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-[-50px]'}`}>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 hover:scale-110 hover:animate-glow transition-all duration-300 group">
                <UsersIcon className="h-8 w-8 text-white group-hover:animate-bounce" />
              </div>
              <h3 className="text-2xl font-bold text-trust-dark mb-2 hover:text-primary transition-colors duration-300">{recommendations.length}+</h3>
              <p className="text-trust-gray">Professional Recommendations</p>
            </div>
            <div className={`flex flex-col items-center transition-all duration-700 ${statsVisible ? 'animate-fade-in-scale' : 'opacity-0 scale-90'}`} style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 hover:scale-110 hover:animate-glow transition-all duration-300 group">
                <TrendingUpIcon className="h-8 w-8 text-white group-hover:animate-bounce" />
              </div>
              <h3 className="text-2xl font-bold text-trust-dark mb-2 hover:text-primary transition-colors duration-300">100%</h3>
              <p className="text-trust-gray">Client Satisfaction Rate</p>
            </div>
            <div className={`flex flex-col items-center transition-all duration-700 ${statsVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-[50px]'}`} style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 hover:scale-110 hover:animate-glow transition-all duration-300 group">
                <AwardIcon className="h-8 w-8 text-white group-hover:animate-bounce" />
              </div>
              <h3 className="text-2xl font-bold text-trust-dark mb-2 hover:text-primary transition-colors duration-300">5+</h3>
              <p className="text-trust-gray">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-trust-dark mb-4 hover:text-primary transition-colors duration-300">
              What Clients Say About My Work
            </h2>
            <p className="text-lg text-trust-gray max-w-2xl mx-auto animate-fade-in-scale" style={{animationDelay: '0.2s'}}>
              Discover how my training and coaching has transformed teams and individuals across various industries.
            </p>
          </div>

          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendations.map((recommendation, index) => (
              <div
                key={recommendation.id}
                className={`transition-all duration-700 ${
                  visibleItems.has(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: visibleItems.has(index) ? '0ms' : `${index * 150}ms`
                }}
              >
                <RecommendationCard {...recommendation} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-16 bg-gradient-secondary">
        <div className="container mx-auto max-w-4xl text-center px-4">
          <h2 className={`text-3xl font-bold text-trust-dark mb-4 transition-all duration-700 ${ctaVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            Ready to Transform Your Team?
          </h2>
          <p className={`text-lg text-trust-gray mb-8 max-w-2xl mx-auto transition-all duration-700 ${ctaVisible ? 'animate-fade-in-scale' : 'opacity-0 scale-90'}`} style={{animationDelay: '0.2s'}}>
            Join the many organizations that have benefited from expert training in sales, leadership, and behavioral psychology.
          </p>
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ${ctaVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-8'}`} style={{animationDelay: '0.4s'}}>
            <Badge variant="secondary" className="text-sm px-4 py-2 hover:scale-105 hover:bg-primary/10 hover:text-primary transition-all duration-300">
              Sales Training
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2 hover:scale-105 hover:bg-primary/10 hover:text-primary transition-all duration-300">
              Leadership Development
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2 hover:scale-105 hover:bg-primary/10 hover:text-primary transition-all duration-300">
              MBTI Expertise
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2 hover:scale-105 hover:bg-primary/10 hover:text-primary transition-all duration-300">
              Behavioral Psychology
            </Badge>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
