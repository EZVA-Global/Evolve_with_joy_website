import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Finding Peace in Inner Conflict",
    excerpt: "When different parts of us want different things, it can feel overwhelming. Learn how to navigate these inner tensions with compassion.",
    date: "November 2, 2025",
    readTime: "5 min read",
    category: "Inner Work",
    image: "🌿"
  },
  {
    id: 2,
    title: "The Art of Self-Compassion",
    excerpt: "Discover why being kind to yourself isn't selfish—it's essential for authentic growth and healing.",
    date: "October 28, 2025",
    readTime: "4 min read",
    category: "Mindfulness",
    image: "💚"
  },
  {
    id: 3,
    title: "Understanding Your Parts",
    excerpt: "An introduction to Internal Family Systems and how recognizing our inner voices can lead to profound transformation.",
    date: "October 21, 2025",
    readTime: "7 min read",
    category: "IFS",
    image: "✨"
  },
  {
    id: 4,
    title: "When Healing Feels Hard",
    excerpt: "The journey isn't always linear. Here's what to remember when you're struggling through difficult emotions.",
    date: "October 14, 2025",
    readTime: "6 min read",
    category: "Healing",
    image: "🌸"
  },
  {
    id: 5,
    title: "Creating Sacred Space",
    excerpt: "How to design rituals and environments that support your inner work and personal growth.",
    date: "October 7, 2025",
    readTime: "5 min read",
    category: "Practice",
    image: "🕯️"
  },
  {
    id: 6,
    title: "The Power of Presence",
    excerpt: "Why being fully present—with ourselves and others—is one of the most transformative gifts we can offer.",
    date: "September 30, 2025",
    readTime: "4 min read",
    category: "Mindfulness",
    image: "🌟"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gold/10 to-sage/10 relative overflow-hidden">
        <div className="absolute top-20 left-0 w-96 h-96 bg-sage/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="text-5xl">📖</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl text-foreground mb-6">
              Reflections & Insights
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Weekly thoughts on mindfulness, healing, and the journey toward wholeness
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`}>
                <Card className="p-8 h-full bg-card/50 backdrop-blur-sm border-gold/20 rounded-3xl hover:shadow-gold transition-all group hover:-translate-y-2">
                  <div className="text-5xl mb-6">{post.image}</div>
                  
                  <div className="inline-block px-3 py-1 bg-gold/20 rounded-full mb-4">
                    <span className="text-sm text-forest font-medium">{post.category}</span>
                  </div>
                  
                  <h3 className="font-heading text-2xl text-foreground mb-3 group-hover:text-forest transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gold" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gold" />
                      {post.readTime}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-20 max-w-2xl mx-auto">
            <Card className="p-10 bg-gradient-to-br from-gold/10 to-sage/10 border-gold/20 rounded-3xl text-center shadow-medium">
              <div className="text-4xl mb-4">💌</div>
              <h3 className="font-heading text-3xl text-foreground mb-4">
                Stay Connected
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Receive new reflections and insights directly in your inbox each week
              </p>
              <Button 
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold rounded-full"
              >
                Subscribe to Newsletter
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
