import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-home.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/40" />
      </div>
      
      {/* Playful curved accent */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-background" 
           style={{ clipPath: "ellipse(100% 100% at 50% 100%)" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-block bg-gold/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-gold font-medium">✨ Transform Your Inner World</span>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl text-primary-foreground mb-6 leading-tight">
            Transforming Inner Conflict into Coherence and Peace
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/95 mb-10 font-light leading-relaxed">
            Guiding you toward wholeness, joy, and self-understanding.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 bg-gold/20 border-primary-foreground/80 text-primary-foreground hover:bg-primary-foreground/15 backdrop-blur-sm rounded-full transition-all"
              >
                ✨ Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
