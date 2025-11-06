import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  const handleJoinClick = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "mailto:connect@evolvewithjoy.com?subject=Newsletter - Join the Journey&body=Hi Anne Marie,%0A%0AI would love to stay updated with news and reflections from Evolve With Joy.%0A%0AThank you 💫";
  };

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

          <form
            onSubmit={handleJoinClick}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
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
