import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Users, Mic, Check } from "lucide-react";

const Services = () => {
  const coachingBenefits = [
    "Personalized 1-on-1 sessions tailored to your journey",
    "Deep exploration using Internal Family Systems",
    "Somatic and mindfulness-based practices",
    "Safe, compassionate space for transformation",
    "Flexible scheduling to fit your life"
  ];

  const workshops = [
    {
      title: "Inner Peace Retreat",
      description: "A weekend immersion into mindfulness, self-compassion, and inner healing.",
      duration: "2-day retreat"
    },
    {
      title: "Parts Work Workshop",
      description: "Learn to understand and integrate different aspects of yourself through IFS.",
      duration: "Half-day workshop"
    },
    {
      title: "Mindful Leadership",
      description: "Develop authentic leadership skills grounded in self-awareness and presence.",
      duration: "4-week series"
    }
  ];

  const speakingTopics = [
    "Resilience and Well-being in the Workplace",
    "The Power of Self-Compassion",
    "Internal Family Systems: An Introduction",
    "Mindfulness for Modern Life",
    "Healing Through Connection"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gold/10 to-sage/10 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6">
              <div className="w-16 h-1 bg-gold rounded-full mx-auto" />
            </div>
            <h1 className="font-heading text-5xl md:text-6xl text-foreground mb-6">
              Services & Workshops
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Choose the path that feels right for your transformation journey
            </p>
          </div>
        </div>
      </section>

      {/* Individual Coaching */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gold/10 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-forest" />
              </div>
              <h2 className="font-heading text-4xl text-foreground mb-6">
                Individual Coaching
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Work one-on-one with me in a personalized transformational coaching experience. 
                Together, we'll explore what's holding you back and discover the path toward 
                greater peace, clarity, and joy.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Using a blend of Internal Family Systems, mindfulness, and somatic practices, 
                we'll create a safe space for deep healing and authentic growth.
              </p>
              <Button 
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold rounded-full"
              >
                Book Your Discovery Call
              </Button>
            </div>
            
            <Card className="p-8 bg-gradient-to-br from-muted to-sage/10 border-gold/20 rounded-3xl shadow-medium">
              <h3 className="font-heading text-2xl text-foreground mb-6">What You'll Experience</h3>
              <ul className="space-y-4">
                {coachingBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Workshops & Retreats */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sage/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="bg-gold/10 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 mx-auto">
              <Users className="w-8 h-8 text-forest" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
              Workshops & Retreats
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join a community of seekers in group experiences designed for connection and growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {workshops.map((workshop, index) => (
              <Card 
                key={index}
                className="p-8 bg-card/50 backdrop-blur-sm border-gold/20 rounded-3xl hover:shadow-gold transition-all group hover:-translate-y-2"
              >
                <div className="text-gold text-3xl mb-4">✨</div>
                <h3 className="font-heading text-2xl text-foreground mb-3">
                  {workshop.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {workshop.description}
                </p>
                <p className="text-sm text-gold font-medium">{workshop.duration}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-forest text-cream hover:bg-forest/90 shadow-large rounded-full"
            >
              Join a Workshop
            </Button>
          </div>
        </div>
      </section>

      {/* Speaking Engagements */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="p-8 bg-gradient-to-br from-gold/10 to-transparent border-gold/20 rounded-3xl shadow-medium order-2 md:order-1">
              <h3 className="font-heading text-2xl text-foreground mb-6">Speaking Topics</h3>
              <ul className="space-y-3">
                {speakingTopics.map((topic, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 bg-gold rounded-full" />
                    {topic}
                  </li>
                ))}
              </ul>
            </Card>

            <div className="order-1 md:order-2">
              <div className="bg-gold/10 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                <Mic className="w-8 h-8 text-forest" />
              </div>
              <h2 className="font-heading text-4xl text-foreground mb-6">
                Speaking & Training
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Bring inspiration and practical wisdom to your organization, conference, or event. 
                I offer engaging talks and professional development sessions on mindfulness, 
                resilience, and authentic living.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you're looking for a keynote speaker or facilitator for team development, 
                I create customized experiences that leave lasting impact.
              </p>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-forest text-forest hover:bg-forest/5 rounded-full"
              >
                Inquire About Speaking
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-gold/20 to-sage/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-24 bg-background" 
             style={{ clipPath: "ellipse(100% 100% at 50% 0%)" }} />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-heading text-4xl text-foreground mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's explore which offering feels right for you
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold rounded-full"
            >
              Schedule Discovery Call
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-forest text-forest hover:bg-forest/5 rounded-full"
            >
              View Calendar
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
