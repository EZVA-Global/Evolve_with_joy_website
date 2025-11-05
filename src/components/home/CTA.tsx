import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gold/20 to-sage/20 relative overflow-hidden">
      {/* Playful curved accent at top */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-background" 
           style={{ clipPath: "ellipse(100% 100% at 50% 0%)" }} />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="inline-block mb-6">
          <span className="text-6xl">✨</span>
        </div>
        <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
          Let's Start Your Journey
        </h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Ready to explore what's possible when you turn inward with compassion? 
          I'd love to connect and learn about your story.
        </p>
        <Button 
          size="lg" 
          className="bg-forest text-cream hover:bg-forest/90 shadow-large hover:shadow-gold rounded-full px-8 transition-all"
        >
          Schedule a Discovery Call
        </Button>
      </div>
    </section>
  );
};

export default CTA;
