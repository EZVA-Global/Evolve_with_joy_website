import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-4xl text-foreground mb-4">
            Stay Connected
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Receive insights, reflections, and resources on mindful living and inner transformation
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1"
            />
            <Button type="submit" className="whitespace-nowrap">
              Join the Journey
            </Button>
          </form>
          
          <p className="text-sm text-muted-foreground mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
