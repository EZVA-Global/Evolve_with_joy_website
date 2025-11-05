import { Card } from "@/components/ui/card";
import { Heart, Users, Mic } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "One-on-One Coaching",
    description: "Personalized transformational coaching sessions tailored to your unique journey of healing and growth."
  },
  {
    icon: Users,
    title: "Workshops & Groups",
    description: "Collaborative learning experiences focused on mindfulness, self-compassion, and inner peace."
  },
  {
    icon: Mic,
    title: "Speaking & Training",
    description: "Inspiring talks and professional development on wellness, resilience, and authentic living."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Playful background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-sage/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="w-16 h-1 bg-gold rounded-full mx-auto" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            How We Can Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the path that resonates with where you are on your journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-gold transition-all group bg-card/50 backdrop-blur-sm border-gold/20 rounded-3xl hover:-translate-y-2"
            >
              <div className="bg-gold/10 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-all">
                <service.icon className="w-8 h-8 text-forest" />
              </div>
              <h3 className="font-heading text-2xl text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
