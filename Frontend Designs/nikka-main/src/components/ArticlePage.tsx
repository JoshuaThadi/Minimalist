import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook } from "lucide-react";
import heroImage from "@/assets/hero-meeting.jpg";

const ArticlePage = () => {
  return (
    <article className="max-w-7xl mx-auto px-6">
      {/* Article Header */}
      <motion.header
        className="text-center py-16 md:py-24 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
          23rd November 2024
        </p>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground mb-6">
          A Guide to Streamlining Your Business
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
          Dive into the world of operational efficiency and learn strategies to boost productivity effortlessly.
        </p>
      </motion.header>

      {/* Hero Image */}
      <motion.div
        className="w-full mb-16 md:mb-24"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img
          src={heroImage}
          alt="Business meeting in a modern office"
          className="w-full h-[300px] md:h-[500px] object-cover"
        />
      </motion.div>

      {/* Content + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 lg:gap-16 pb-24">
        {/* Left: Share + Content */}
        <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-8">
          {/* Share Column */}
          <aside className="md:sticky md:top-24 md:self-start">
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">Share</p>
            <div className="flex md:flex-col gap-3">
              <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-4 w-4" />
                <span className="text-xs">Instagram</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-4 w-4" />
                <span className="text-xs">Twitter</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="h-4 w-4" />
                <span className="text-xs">Facebook</span>
              </a>
            </div>
          </aside>

          {/* Article Body */}
          <div className="prose-article">
            <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-6">
              Understanding the Current Landscape
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              In the dynamic realm of business, understanding the current operational landscape is paramount. Before embarking on the journey of streamlining, it's crucial to conduct a comprehensive analysis of existing processes. This involves identifying bottlenecks, redundancies, and areas where efficiency can be heightened. By delving into the intricacies of day-to-day operations, businesses can pinpoint the exact pain points that hinder optimal performance.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Taking a holistic view, consider not only internal processes but also external factors influencing operations. Analyze market trends, customer expectations, and industry benchmarks. This comprehensive understanding lays the foundation for strategic streamlining, ensuring that efforts are targeted at the core areas that will yield the most significant impact.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-6">
              Crafting a Streamlining Strategy
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Armed with insights from the operational analysis, the next step is crafting a tailored streamlining strategy. This involves not just cutting excesses but optimizing processes for sustained efficiency. Begin by setting clear objectives for the streamlining initiative— whether it's to enhance productivity, reduce costs, or improve customer satisfaction. With defined goals, it becomes easier to align strategies with desired outcomes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Introduce technology as an ally in the streamlining process. Automation, data analytics, and integrated software solutions can revolutionize operations. Consider the human element as well—training and equipping your team with the skills needed to navigate the streamlined processes. A cohesive strategy addresses both systemic and human factors, ensuring a holistic and sustainable approach to business optimization.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-6">
              Continuous Improvement for Long-Term Success
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Streamlining isn't a one-time fix; it's an ongoing commitment to continuous improvement. After implementing the initial changes, regularly assess and reassess their effectiveness. Monitor key performance indicators, gather feedback from stakeholders, and stay agile in response to evolving business dynamics. Continuous improvement fosters a culture of adaptability, positioning the business to thrive in an ever-changing landscape.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Encourage a mindset of innovation within the organization. Employees at all levels should feel empowered to propose improvements and contribute to the streamlining efforts. By fostering a culture that embraces change and values efficiency, businesses can ensure that streamlining becomes ingrained in the DNA of the organization, leading to long-term success.
            </p>

            <div className="border-t border-border pt-10 mt-10">
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">Conclusion</p>
              <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-6">
                Streamlining isn't merely about cutting excess
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                In conclusion, streamlining your business is not just a one-time initiative but a dynamic process that requires ongoing commitment and adaptability. By understanding your current operational landscape, crafting a targeted strategy, and embracing a culture of continuous improvement, businesses can position themselves for sustained success in an ever-evolving market.
              </p>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="lg:sticky lg:top-24 lg:self-start space-y-8">
          {/* Details */}
          <div className="border border-border p-6 space-y-4">
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">Details</p>
            <div className="flex justify-between text-sm">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Date</span>
              <span className="text-foreground text-sm">23rd November 2024</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Category</span>
              <span className="text-foreground text-sm">Consulting</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Reading</span>
              <span className="text-foreground text-sm">10 Min</span>
            </div>
          </div>

          {/* Author */}
          <div className="border border-border p-6">
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">Author</p>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-sm font-medium text-foreground">
                ER
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Elena Rodriguez</p>
                <p className="text-xs text-primary uppercase tracking-wider">Marketing Specialist</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Innovative marketer with a flair for captivating campaigns, weaving brands through strategic communication and creativity.
            </p>
          </div>
        </aside>
      </div>
    </article>
  );
};

export default ArticlePage;
