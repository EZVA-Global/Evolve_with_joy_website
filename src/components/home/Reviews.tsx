import { Card, CardContent } from "@/components/ui/card";

const Reviews = () => {
  const reviews = [
    {
      testimonial: "Anne Marie is more than a coach, she’s a true catalyst for transformation. When we began working together in 2010, I was overwhelmed by years of grief and trauma. Anne Marie helped me shift my focus from pain to possibility, teaching me to create the mental space to thrive instead of just survive. Fifteen years later, she continues to be a priceless presence in my life, helping me stay grounded and purposeful. Thanks to her guidance, I now live with joy, clarity, and gratitude. If you seek genuine, lasting change, Anne Marie is the one to turn to.",
      name: "Torey"
    },
    {
      testimonial: "Anne Marie is a breath of fresh air! She helped me navigate parts of myself with clarity and compassion. I can’t thank her enough! With her guidance, I learned how to approach internal conflicts in an empowering and meditative way that I did not know was possible. And in just one session I have obtained a tool that I now use in my everyday life.",
      name: "Anthony"
    }
  ];

  return (
    <section className="py-24 bg-secondary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from those who've embarked on their journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="border-sage/20 hover:shadow-large transition-shadow">
              <CardContent className="p-8">
                <div className="mb-6">
                  <svg className="w-10 h-10 text-gold opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <blockquote className="text-lg text-foreground mb-6 leading-relaxed italic">
                  "{review.testimonial}"
                </blockquote>
                <p className="font-medium text-muted-foreground">
                  — {review.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
