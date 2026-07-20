import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blogs")({
  head: () => ({ meta: [{ title: "Blog — ML Global" }, { name: "description", content: "Tips, insights and strategies for IELTS, PTE and English mastery." }] }),
  component: Blogs,
});

const posts = [
  { t: "10 Proven Tips to Score IELTS Band 8+", d: "Nov 2, 2025", img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800", cat: "IELTS" },
  { t: "PTE Speaking: The Complete Fluency Playbook", d: "Oct 24, 2025", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800", cat: "PTE" },
  { t: "How to Ace Your UK Student Visa Interview", d: "Oct 12, 2025", img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800", cat: "Visa" },
  { t: "Vocabulary Boosters that Actually Work", d: "Sep 30, 2025", img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800", cat: "Study" },
  { t: "Australia PR: PTE 79+ Roadmap", d: "Sep 12, 2025", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800", cat: "PTE" },
  { t: "Master IELTS Writing Task 2 in 30 Days", d: "Aug 28, 2025", img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800", cat: "IELTS" },
];

function Blogs() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Learn" title="Blog & Insights" subtitle="Study strategies, exam tips and student journeys — from our expert faculty." />
      <section className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p, i) => (
          <motion.article
            key={p.t}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: (i % 3) * 0.08 }}
            className="group rounded-3xl overflow-hidden glass shadow-soft hover:shadow-glow hover:-translate-y-1 transition-all"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img src={p.img} alt={p.t} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                <span className="px-2 py-0.5 rounded-full bg-gradient-brand text-white text-[10px] font-semibold">{p.cat}</span>
                <Calendar className="w-3 h-3" /> {p.d}
              </div>
              <h3 className="font-display font-bold text-lg leading-snug">{p.t}</h3>
              <Link to="/blogs" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand">Read more <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </motion.article>
        ))}
      </section>
    </SiteLayout>
  );
}
