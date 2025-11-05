const Testimonial = () => {
  return (
    <section className="py-24 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <svg className="w-16 h-16 mx-auto text-secondary opacity-50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          
          <blockquote className="font-heading text-2xl md:text-3xl text-foreground mb-6 italic leading-relaxed">
            The journey inward is not about fixing yourself. It's about returning to wholeness, 
            discovering that you were never broken—only disconnected from your true essence.
          </blockquote>
          
          <p className="text-muted-foreground">A guiding philosophy at Evolve With Joy</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
