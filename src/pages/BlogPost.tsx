import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";

// Sample blog post content - in a real app, this would come from a CMS or API
const blogContent = {
  1: {
    title: "Finding Peace in Inner Conflict",
    date: "November 2, 2025",
    readTime: "5 min read",
    category: "Inner Work",
    image: "🌿",
    content: `
      <p>We all have moments when different parts of ourselves seem to want different things. One part wants to take a risk, while another craves safety. One part yearns for connection, while another needs solitude. This inner conflict can feel confusing, even exhausting.</p>

      <p>But what if these seemingly contradictory voices aren't problems to be solved—but rather messengers to be heard?</p>

      <h2>The Wisdom of Internal Conflict</h2>

      <p>Internal Family Systems (IFS) teaches us that every part of us, no matter how troublesome it may seem, has a positive intention. That critical voice? It's trying to protect you from failure. That anxious feeling? It's working to keep you safe.</p>

      <p>When we approach our inner conflicts with curiosity instead of judgment, something remarkable happens. The parts that seemed to be fighting against each other begin to reveal their deeper wisdom.</p>

      <h2>Moving Toward Coherence</h2>

      <p>Finding peace doesn't mean silencing parts of yourself. It means creating an internal environment where all your parts feel heard, understood, and valued. This is what I call "inner coherence"—when your different aspects work together harmoniously rather than against each other.</p>

      <p>Here are three practices to help you move toward greater inner peace:</p>

      <h3>1. Notice Without Judgment</h3>
      <p>When you feel internal conflict, pause and simply notice. "A part of me feels anxious. Another part wants to move forward." No part is wrong. They're all trying to help.</p>

      <h3>2. Get Curious</h3>
      <p>Ask your parts what they're trying to protect you from or help you achieve. Often, beneath apparent opposition, there's shared care for your wellbeing.</p>

      <h3>3. Create Space for Dialogue</h3>
      <p>Imagine facilitating a conversation between your conflicting parts. What would each one say? What do they need from you? From each other?</p>

      <h2>The Gift of Integration</h2>

      <p>When we integrate our parts rather than trying to eliminate them, we become more whole. We access wisdom we didn't know we had. We make decisions that honor all of our needs, not just the loudest voice.</p>

      <p>Inner peace isn't about having one unified opinion on everything. It's about creating a compassionate internal democracy where every part has a voice and knows it's valued.</p>

      <p>This is the journey toward coherence—and it's one of the most profound transformations we can experience.</p>
    `
  }
};

const BlogPost = () => {
  const { id } = useParams();
  const post = blogContent[Number(id) as keyof typeof blogContent] || blogContent[1];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-gold/10 to-sage/10">
        <div className="container mx-auto px-6">
          <Link to="/blog">
            <Button 
              variant="ghost" 
              className="mb-8 hover:bg-gold/10 rounded-full"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
          
          <div className="max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1.5 bg-gold/20 rounded-full mb-6">
              <span className="text-sm text-forest font-medium">{post.category}</span>
            </div>
            
            <h1 className="font-heading text-5xl md:text-6xl text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gold" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-gold" />
                {post.readTime}
              </div>
            </div>

            <div className="text-6xl mb-8">{post.image}</div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div 
              className="prose prose-lg max-w-none
                prose-headings:font-heading prose-headings:text-foreground
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                prose-strong:text-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share */}
            <div className="mt-16 pt-8 border-t border-border">
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground">Share this article:</p>
                <Button 
                  variant="outline"
                  className="border-gold/30 hover:bg-gold/10 rounded-full"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-8 bg-gradient-to-br from-muted to-sage/10 rounded-3xl border border-gold/20">
              <div className="flex items-start gap-6">
                <div className="bg-gold/20 rounded-full w-20 h-20 flex items-center justify-center flex-shrink-0 text-3xl">
                  ✨
                </div>
                <div>
                  <h3 className="font-heading text-2xl text-foreground mb-2">Anne</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Transformational coach, speaker, and guide helping individuals find peace, 
                    coherence, and joy through mindfulness and Internal Family Systems.
                  </p>
                  <Link to="/about">
                    <Button 
                      variant="outline"
                      size="sm"
                      className="border-forest text-forest hover:bg-forest/5 rounded-full"
                    >
                      Learn More About Anne
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related CTA */}
      <section className="py-20 bg-gradient-to-br from-gold/20 to-sage/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl text-foreground mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's explore how coaching can support your path to inner peace
          </p>
          <Button 
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold rounded-full"
          >
            Schedule a Discovery Call
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
