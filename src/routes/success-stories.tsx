import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { motion } from "framer-motion";
import { useState } from "react";
import { Play, Star, Award } from "lucide-react";

export const Route = createFileRoute("/success-stories")({
  head: () => ({ meta: [{ title: "Success Stories — ML Global" }, { name: "description", content: "Video testimonials, band 8+ scorers, visa success and transformation stories." }] }),
  component: SuccessStories,
});

type Story = {
  id: string; name: string; achievement: string; category: "IELTS" | "PTE" | "Visa" | "Interview" | "Reel";
  thumb: string; videoId: string;
};

const stories: Story[] = [
  { id: "1", name: "Ayesha Khan", achievement: "IELTS 8.5", category: "IELTS", thumb: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600", videoId: "dQw4w9WgXcQ" },
  { id: "2", name: "Hamza Raza", achievement: "PTE 89", category: "PTE", thumb: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600", videoId: "dQw4w9WgXcQ" },
  { id: "3", name: "Zainab Malik", achievement: "UK Visa Approved", category: "Visa", thumb: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600", videoId: "dQw4w9WgXcQ" },
  { id: "4", name: "Ali Ahmed", achievement: "Student Interview", category: "Interview", thumb: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600", videoId: "dQw4w9WgXcQ" },
  { id: "5", name: "Fatima Noor", achievement: "IELTS 8.0", category: "IELTS", thumb: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600", videoId: "dQw4w9WgXcQ" },
  { id: "6", name: "Bilal Shah", achievement: "Canada PR", category: "Visa", thumb: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600", videoId: "dQw4w9WgXcQ" },
  { id: "7", name: "Sara Iqbal", achievement: "PTE 82", category: "PTE", thumb: "https://images.unsplash.com/photo-1541823709867-1b206113eafd?w=600", videoId: "dQw4w9WgXcQ" },
  { id: "8", name: "Reel: Study Tip", achievement: "60s Reel", category: "Reel", thumb: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600", videoId: "dQw4w9WgXcQ" },
  { id: "9", name: "Umar Farooq", achievement: "IELTS 7.5", category: "IELTS", thumb: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600", videoId: "dQw4w9WgXcQ" },
];

const filters = ["All", "IELTS", "PTE", "Visa", "Interview", "Reel"] as const;

function SuccessStories() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [active, setActive] = useState<Story | null>(null);
  const filtered = filter === "All" ? stories : stories.filter((s) => s.category === filter);

  return (
    <SiteLayout>
      <PageHero eyebrow="Success Stories" title="Stories that make us proud" subtitle="Real students. Real scores. Real journeys — captured on video." />
      <section className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${filter === f ? "bg-gradient-brand text-white shadow-glow" : "glass hover:bg-muted"}`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filtered.map((s, i) => (
            <motion.button
              key={s.id}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: (i % 6) * 0.05 }}
              onClick={() => setActive(s)}
              className="group relative block w-full overflow-hidden rounded-3xl shadow-soft hover:shadow-glow"
              style={{ aspectRatio: s.category === "Reel" ? "9/16" : i % 3 === 0 ? "3/4" : "4/5" }}
            >
              <img src={s.thumb} alt={s.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="w-16 h-16 rounded-full bg-white/90 grid place-items-center shadow-glow group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-brand fill-brand ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white text-left">
                <div className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest bg-white/20 backdrop-blur px-2 py-1 rounded-full mb-2">
                  <Award className="w-3 h-3" /> {s.category}
                </div>
                <div className="font-bold">{s.name}</div>
                <div className="text-sm opacity-90 flex items-center gap-1"><Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> {s.achievement}</div>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {active && (
        <div className="fixed inset-0 z-50 bg-black/90 grid place-items-center p-4" onClick={() => setActive(null)}>
          <div className="w-full max-w-4xl aspect-video rounded-3xl overflow-hidden shadow-glow" onClick={(e) => e.stopPropagation()}>
            <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${active.videoId}?autoplay=1`} title={active.name} allow="autoplay; encrypted-media" allowFullScreen />
          </div>
        </div>
      )}

      <section className="h-16" />
    </SiteLayout>
  );
}
