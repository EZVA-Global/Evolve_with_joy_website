import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import EWJLogo from "../assets/EWJ-logo.png";

const Navigation = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 w-full border-b border-border z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/98 backdrop-blur-sm shadow-soft"
          : "bg-background"
      }`}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={EWJLogo}
              alt="EWJ Logo"
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-heading text-2xl text-foreground">
              Evolve With Joy
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              to="/"
              className={`text-base font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-base font-medium transition-colors hover:text-primary ${
                isActive("/about") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`text-base font-medium transition-colors hover:text-primary ${
                isActive("/services") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Services
            </Link>
            <Link
              to="/coming-soon"
              className={`text-base font-medium transition-colors hover:text-primary ${
                isActive("/coming-soon") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Blog
            </Link>

            <Link to="/contact">
              <Button
                variant="default"
                size="sm"
                className="text-base px-5 py-2 bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold hover:shadow-medium transition-all"
              >
                Contact
              </Button>
            </Link>

            <Link to="/coming-soon">
              <Button
                variant="secondary"
                size="sm"
                className="text-base px-5 py-2 shadow-gold hover:shadow-medium transition-all"
              >
                Book a Session
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 mt-8">
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium transition-colors hover:text-primary ${
                    isActive("/") ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium transition-colors hover:text-primary ${
                    isActive("/about") ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  About
                </Link>
                <Link
                  to="/services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium transition-colors hover:text-primary ${
                    isActive("/services") ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  Services
                </Link>
                <Link
                  to="/coming-soon"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium transition-colors hover:text-primary ${
                    isActive("/coming-soon") ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  Blog
                </Link>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    variant="default"
                    size="sm"
                    className="w-full text-base px-5 py-2 bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold hover:shadow-medium transition-all"
                  >
                    Contact
                  </Button>
                </Link>
                <Link to="/coming-soon" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="w-full text-base px-5 py-2 shadow-gold hover:shadow-medium transition-all"
                  >
                    Book a Session
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
