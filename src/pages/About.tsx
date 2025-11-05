import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-about.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center mt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/30" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="font-heading text-5xl md:text-6xl text-primary-foreground max-w-2xl">
            A Journey to Wholeness
          </h1>
        </div>
      </section>
      
      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
              Welcome to Evolve With Joy
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Evolve With Joy was born from a deep belief that lasting peace and fulfillment 
              come not from fixing ourselves, but from understanding and embracing every part 
              of who we are. My mission is to create a safe, compassionate space where you can 
              explore your inner landscape and reconnect with your authentic self.
            </p>
          </div>
        </div>
      </section>
      
      {/* Anne's Journey */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                  My Story
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  My path to becoming a transformational coach began with my own journey of 
                  healing and self-discovery. After years of searching externally for answers, 
                  I learned that the wisdom I sought was already within me—I just needed to 
                  learn how to listen.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Through deep personal work and formal training in mindfulness-based practices 
                  and Internal Family Systems, I discovered the profound impact of turning 
                  inward with curiosity rather than judgment. This transformation inspired me 
                  to dedicate my life to helping others do the same.
                </p>
              </div>
              
              <div className="bg-background rounded-2xl p-8 shadow-medium">
                <h3 className="font-heading text-2xl text-foreground mb-4">
                  Credentials & Training
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Certified Life Coach (ICF Accredited)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Internal Family Systems Level 1 & 2 Training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Mindfulness-Based Stress Reduction (MBSR)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Somatic Experiencing Practitioner</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>10+ years of personal meditation practice</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Coaching Philosophy */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
              My Approach
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At the heart of my coaching practice is <strong className="text-foreground">Internal Family Systems (IFS)</strong>—
              a gentle, powerful modality that recognizes we all have different parts within us, 
              each with its own perspective, feelings, and protective role.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Rather than trying to eliminate unwanted thoughts or behaviors, we learn to understand 
              them with compassion. This approach helps you:
            </p>
            <ul className="space-y-3 text-lg text-muted-foreground mb-8">
              <li className="flex items-start">
                <span className="text-secondary mr-3 mt-1">✓</span>
                <span>Develop self-compassion and inner harmony</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-3 mt-1">✓</span>
                <span>Release old patterns that no longer serve you</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-3 mt-1">✓</span>
                <span>Access your innate wisdom and resilience</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-3 mt-1">✓</span>
                <span>Create authentic connections with yourself and others</span>
              </li>
            </ul>
            
            <div className="bg-secondary/10 rounded-2xl p-8 mb-8">
              <blockquote className="text-xl font-heading text-foreground italic mb-4">
                "When we can hold all parts of ourselves with curiosity and compassion, 
                transformation becomes not just possible—it becomes inevitable."
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-accent-foreground mb-6">
            Ready to Begin?
          </h2>
          <p className="text-lg text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
            I'd be honored to support you on your journey toward greater peace, 
            clarity, and authentic joy.
          </p>
          <Button size="lg" className="bg-accent-foreground text-accent hover:bg-accent-foreground/90">
            Book a Discovery Session
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
