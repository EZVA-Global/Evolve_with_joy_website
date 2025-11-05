import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Instagram, Facebook, Youtube } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { z } from "zod";

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);

      // Here you would integrate with your form service (Formspree, etc.)
      // For now, we'll just show a success message
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-sage/20 to-gold/10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="text-6xl">💌</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl text-foreground mb-6">
              I'd Love to Hear From You
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Whether you're ready to begin your journey or just have questions, 
              I'm here to connect. Reach out and let's explore how we can work together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-card border border-border rounded-3xl p-8 shadow-medium">
              <h2 className="font-heading text-3xl text-foreground mb-6">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    maxLength={100}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    maxLength={255}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about what brings you here..."
                    rows={6}
                    required
                    maxLength={1000}
                    className="resize-none"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    {formData.message.length}/1000 characters
                  </p>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold hover:shadow-medium transition-all"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Direct Email */}
              <div className="bg-gradient-to-br from-gold/10 to-sage/10 rounded-3xl p-8 border border-gold/20">
                <div className="flex items-start gap-4">
                  <div className="bg-gold/20 rounded-full p-3">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-foreground mb-2">
                      Email Me Directly
                    </h3>
                    <a 
                      href="mailto:connect@evolvewithjoy.com"
                      className="text-lg text-primary hover:text-primary/80 transition-colors"
                    >
                      connect@evolvewithjoy.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">
                      I typically respond within 24-48 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-card border border-border rounded-3xl p-8 shadow-medium">
                <h3 className="font-heading text-xl text-foreground mb-6">
                  Connect on Social Media
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-all group"
                  >
                    <Instagram className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">Instagram</span>
                  </a>
                  
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-all group"
                  >
                    <Facebook className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">Facebook</span>
                  </a>
                  
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-all group"
                  >
                    <Youtube className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">YouTube</span>
                  </a>
                  
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-all group"
                  >
                    <svg 
                      className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                    </svg>
                    <span className="text-sm font-medium">TikTok</span>
                  </a>
                </div>
              </div>

              {/* Optional info box */}
              <div className="bg-muted/30 rounded-3xl p-6 border border-border">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-medium text-foreground">Note:</span> All consultations begin 
                  with a complimentary discovery call to ensure we're a good fit. 
                  I look forward to connecting with you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
