import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/events")({
  head: () => ({ meta: [{ title: "Events — ML Global" }, { name: "description", content: "Free workshops, seminars and open days at ML Global." }] }),
  component: Events,
});

const events = [
  { t: "Free IELTS Masterclass", d: "Nov 20, 2025", time: "5:00 PM", loc: "Lahore Campus" },
  { t: "PTE Score Boost Workshop", d: "Nov 27, 2025", time: "6:00 PM", loc: "Online" },
  { t: "Study Abroad Open Day", d: "Dec 5, 2025", time: "11:00 AM", loc: "Lahore Campus" },
  { t: "LanguageCert Info Session", d: "Dec 12, 2025", time: "4:00 PM", loc: "Online" },
];

function Events() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Upcoming" title="Events & Workshops" subtitle="Join our free masterclasses, seminars and open days." />
      <section className="mx-auto max-w-5xl px-6 py-12 grid md:grid-cols-2 gap-6">
        {events.map((e, i) => (
          <motion.div key={e.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-3xl glass p-6 shadow-soft">
            <div className="w-12 h-12 rounded-2xl bg-gradient-brand grid place-items-center shadow-glow mb-4"><Calendar className="w-5 h-5 text-white" /></div>
            <h3 className="font-display text-xl font-bold">{e.t}</h3>
            <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {e.d}</div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> {e.time}</div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {e.loc}</div>
            </div>
          </motion.div>
        ))}
      </section>
    </SiteLayout>
  );
}
