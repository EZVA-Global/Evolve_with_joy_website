import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

const Navigation = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className={`fixed top-0 w-full border-b border-border z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/98 backdrop-blur-sm shadow-soft" : "bg-background"
    }`}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-logo-bg rounded-2xl px-4 py-2 shadow-medium transition-all group-hover:shadow-gold">
              <span className="font-heading text-xl text-cream">EWJ</span>
            </div>
            <span className="font-heading text-2xl text-foreground hidden sm:block">
              Evolve With Joy
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/about") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/services") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Services
            </Link>
            <Link 
              to="/blog" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/blog") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/contact") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Contact
            </Link>
            <Link to="/contact">
              <Button
                variant="default" 
                size="sm"
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold hover:shadow-medium transition-all"
              >
                Contact
              </Button>
            </Link>
            <Link to="/coming-soon">
              <Button
                variant="secondary" 
                size="sm"
                className="shadow-gold hover:shadow-medium transition-all"
              >
                Book a Session
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
