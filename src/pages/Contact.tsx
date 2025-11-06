import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Instagram, Facebook, Youtube } from "lucide-react";

const Contact = () => {
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

      {/* Google Form + Contact Info */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">
            
            {/* Google Form */}
            <div className="bg-card border border-border rounded-3xl p-6 shadow-medium">
              <h2 className="font-heading text-3xl text-foreground mb-6 text-center">
                Send a Message
              </h2>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSe5ZXRf6LyHIp6yW4y4P2QzNlNr9LU-6iWUJvG1hfARcg_kBg/viewform?embedded=true"
                width="100%"
                height="720"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="rounded-xl"
              >
                Loading…
              </iframe>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
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
                      I typically respond within 24–48 hours
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
                    href="https://www.instagram.com/evolvewithjoy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-all group"
                  >
                    <Instagram className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">Instagram</span>
                  </a>

                  <a
                    href="https://www.facebook.com/profile.php?id=100089750405248"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-all group"
                  >
                    <Facebook className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">Facebook</span>
                  </a>

                  <a
                    href="https://www.tiktok.com/@evolvewithjoy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-all group"
                  >
                    <svg
                      className="w-5 h-5 text-primary group-hover:scale-110 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                    </svg>
                    <span className="text-sm font-medium">TikTok</span>
                  </a>
                </div>
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
