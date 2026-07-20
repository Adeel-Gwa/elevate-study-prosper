import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [{ title: "Gallery — ML Global" }, { name: "description", content: "Photo gallery of our classrooms, events and student community." }] }),
  component: Gallery,
});

const images = [
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800",
  "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800",
  "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800",
  "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800",
  "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
];

function Gallery() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <SiteLayout>
      <PageHero eyebrow="Moments" title="Life at ML Global" subtitle="Classrooms, celebrations and success — captured." />
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((src, i) => (
            <motion.button
              key={src}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: (i % 8) * 0.05 }}
              onClick={() => setActive(src)}
              className="block w-full overflow-hidden rounded-3xl shadow-soft hover:shadow-glow group"
            >
              <img src={src} alt="" loading="lazy" className="w-full transition-transform duration-500 group-hover:scale-105" />
            </motion.button>
          ))}
        </div>
      </section>
      {active && (
        <div className="fixed inset-0 z-50 bg-black/80 grid place-items-center p-6" onClick={() => setActive(null)}>
          <button className="absolute top-6 right-6 w-11 h-11 rounded-full glass grid place-items-center text-white" onClick={() => setActive(null)}><X /></button>
          <img src={active} alt="" className="max-h-[90vh] max-w-full rounded-3xl shadow-glow" />
        </div>
      )}
    </SiteLayout>
  );
}
