import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import anneMariePortrait from "@/assets/annemarie-photo.jpeg";

const AboutPreview = () => {
  return (
    <section className="py-24 bg-background relative">
      {/* Playful accent dot */}
      <div className="absolute top-12 right-12 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative max-w-md mx-auto">
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-large border-4 border-gold/20">
              <img 
                src={anneMariePortrait} 
                alt="Anne Marie- Life Coach and Transformation Guide"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div>
            <div className="inline-block mb-4">
              <span className="text-gold text-5xl">🌿</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
              Meet Anne Marie Hennessey
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I believe that healing begins when we turn inward with compassion and curiosity. 
              My approach blends mindfulness, somatic awareness, and the transformative power 
              of Internal Family Systems to help you reconnect with your authentic self.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Whether you're navigating a life transition, healing from past wounds, or simply 
              seeking deeper meaning and joy, I'm here to support your journey with warmth and wisdom.
            </p>
            <Link to="/about">
              <Button 
                variant="default"
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold rounded-full transition-all"
              >
                Read More About My Journey
              </Button>
            </Link>
            
            <div className="mt-8 bg-gradient-to-br from-muted to-sage/10 rounded-3xl p-8 shadow-medium hover:shadow-large transition-all border border-gold/20">
            <div className="mb-4 text-gold text-3xl">"</div>
            <blockquote className="text-xl font-heading text-foreground italic leading-relaxed">
              True transformation happens when we learn to embrace all parts of ourselves 
              with understanding and love.
            </blockquote>
              <p className="mt-6 text-muted-foreground font-medium">— Anne Marie</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
