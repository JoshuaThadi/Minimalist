import React from "react";
import Link from "next/link";
import {
  ChevronRight,
  Layout,
  Calendar,
  BarChart,
  ArrowRight,
  Zap,
  Users,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CompanyCarousel from "@/components/company-carousel";
import Image from "next/image";

const faqs = [
  {
    question: "What is Sprintly?",
    answer:
      "Sprintly is a powerful project management tool designed to help teams organize, track, and manage their work efficiently. It combines intuitive design with robust features to streamline your workflow and boost productivity.",
  },
  {
    question: "How does Sprintly compare to other project management tools?",
    answer:
      "Sprintly offers a unique combination of intuitive design, powerful features, and flexibility. Unlike other tools, we focus on providing a seamless experience for both agile and traditional project management methodologies, making it versatile for various team structures and project types.",
  },
  {
    question: "Is Sprintly suitable for small teams?",
    answer:
      "Absolutely! Sprintly is designed to be scalable and flexible. It works great for small teams and can easily grow with your organization as it expands. Our user-friendly interface ensures that teams of any size can quickly adapt and start benefiting from Sprintly's features.",
  },
  {
    question: "What key features does Sprintly offer?",
    answer:
      "Sprintly provides a range of powerful features including intuitive Kanban boards for visualizing workflow, robust sprint planning tools for agile teams, comprehensive reporting for data-driven decisions, customizable workflows, time tracking, and team collaboration tools. These features work seamlessly together to enhance your project management experience.",
  },
  {
    question: "Can Sprintly handle multiple projects simultaneously?",
    answer:
      "Yes, Sprintly is built to manage multiple projects concurrently. You can easily switch between projects, and get a bird's-eye view of all your ongoing work. This makes Sprintly ideal for organizations juggling multiple projects or clients.",
  },
  {
    question: "Is there a learning curve for new users?",
    answer:
      "While Sprintly is packed with features, we've designed it with user-friendliness in mind. New users can quickly get up to speed thanks to our intuitive interface, helpful onboarding process, and comprehensive documentation.",
  },
];

const features = [
  {
    title: "Intuitive Kanban Boards",
    description:
      "Visualize your workflow and optimize team productivity with our easy-to-use Kanban boards.",
    icon: Layout,
  },
  {
    title: "Powerful Sprint Planning",
    description:
      "Plan and manage sprints effectively, ensuring your team stays focused on delivering value.",
    icon: Calendar,
  },
  {
    title: "Comprehensive Reporting",
    description:
      "Gain insights into your team's performance with detailed, customizable reports and analytics.",
    icon: BarChart,
  },
];

const stats = [
  { number: "10K+", label: "Active Teams" },
  { number: "98%", label: "Satisfaction Rate" },
  { number: "2M+", label: "Tasks Completed" },
];

export default function Home() {
  return (
    <div className="min-h-screen dotted-background text-white">

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-48 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight gradient-title">
          Streamline your projects, boost your teams productivity with&nbsp;
          <span style={{ textDecoration: "underline" }}>
            Sprintly
          </span>

        </h1>

        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
          Sprintly helps teams plan, track, and deliver projects efficiently for event organizations and Cooperatives companies
          with powerful tools, smart workflows, and real-time insights.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link href="/onboarding">
            <Button
              size="lg"
              className="bg-zinc-600 hover:bg-zinc-700 text-white px-8 py-6 text-lg rounded-1"
            >
              Get Started Free
              <ChevronRight size={20} className="ml-2" />
            </Button>
          </Link>
          <Link href="#features">
            <Button
              size="lg"
              variant="outline"
              className="border-slate-700 text-slate-300 hover:bg-slate-800 px-8 py-6 text-lg rounded-lg"
            >
              Learn More
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-zinc-400 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-zinc-900/50 py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Key Features
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Everything you need to manage projects efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="bg-zinc-800/50 border-gray-700 hover:border-zinc-500/50 transition-all rounded-none">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-zinc-500/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-zinc-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Carousel */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Trusted by Industry Leaders
          </h3>
          <CompanyCarousel />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="bg-zinc-900/50 py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-lg text-slate-400">
              Everything you need to know about Sprintly
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-0">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-zinc-700 rounded-1 bg-zinc-800/30 px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-zinc-400 py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-400 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Workflow?
          </h3>

          <p className="text-xl text-slate-400 mb-8">
            Join thousands of teams already using Sprintly to streamline their projects and boost productivity.
          </p>

          <Link href="/onboarding">
            <Button
              size="lg"
              className="bg-zinc-600 hover:bg-zinc-700 text-white px-10 py-6 text-lg rounded-1"
            >
              Start For Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>

          <p className="mt-6 text-sm text-slate-500">
            14-day free trial • No credit card required
          </p>
        </div>
      </section>
      {/* footer */}
      <footer id="contact" className="bg-black text-white pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          {/* ================= TOP BRAND ================= */}
          <div className="text-center mb-16">
            <div className="w-full flex justify-center">
              <Image
                src="/sprintly-logo-c.png"   // put your image in /public folder
                alt="Sprintly"
                width={1200}
                height={300}
                priority
                className="w-full max-w-5xl h-auto object-contain px-4" />
            </div>

            <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm sm:text-base">
              <span className="inline-block bg-white text-black border border-black px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                beta-version
              </span>

              &nbsp;&nbsp;&nbsp;Manage projects. Track progress. Build faster.
            </p>
          </div>

          {/* ================= LINKS ================= */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">

            {/* Product */}
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><Link href="#">Features</Link></li>
                <li><Link href="#">Pricing</Link></li>
                <li><Link href="#">Integrations</Link></li>
                <li><Link href="#">Updates</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><Link href="#">About</Link></li>
                <li><Link href="#">Careers</Link></li>
                <li><Link href="#">Blog</Link></li>
                <li><Link href="#">Press</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><Link href="#">Docs</Link></li>
                <li><Link href="#">Help Center</Link></li>
                <li><Link href="#">Community</Link></li>
                <li><Link href="#">Tutorials</Link></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><Link href="#">GitHub</Link></li>
                <li><Link href="#">LinkedIn</Link></li>
                <li><Link href="#">Twitter</Link></li>
                <li><Link href="#">Discord</Link></li>
              </ul>
            </div>

          </div>

          {/* ================= BOTTOM ================= */}
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">

            <p>
              © {new Date().getFullYear()} Sprintly. All rights reserved.
            </p>

            <div className="flex gap-6">
              <Link href="#">Privacy</Link>
              <Link href="#">Terms</Link>
              <Link href="#">Security</Link>
            </div>

          </div>

        </div>
      </footer>
    </div>
  );
}