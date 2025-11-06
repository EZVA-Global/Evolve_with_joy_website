import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import Services from "@/components/home/Services";
import Testimonial from "@/components/home/Testimonial";
import Reviews from "@/components/home/Reviews";
import Newsletter from "@/components/home/Newsletter";
import CTA from "@/components/home/CTA";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutPreview />
      <Services />
      <Testimonial />
      <Reviews />
      <Newsletter />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
