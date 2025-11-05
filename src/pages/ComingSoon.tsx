import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center px-6 pt-24 pb-12">
        <div className="text-center max-w-2xl">
          <div className="mb-8">
            <span className="text-7xl">🌱</span>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl text-foreground mb-6">
            Coming Soon
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            We're working on something special! Our booking system will be available soon. 
            In the meantime, feel free to reach out via the contact page.
          </p>
          <Link to="/contact">
            <Button 
              variant="default"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold rounded-full"
              size="lg"
            >
              Contact Us Instead
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ComingSoon;
