import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/site/Counter";
import { Award, Users, Target, Heart, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — ML Global Testing & Consultancy" }, { name: "description", content: "Learn about ML Global, Pakistan's premium IELTS, PTE and English language institute." }] }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageHero eyebrow="About Us" title="Empowering global journeys since 2009" subtitle="A premium institute dedicated to unlocking world-class opportunities for Pakistani students." />
      <section className="mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <motion.img initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900" alt="Campus" className="rounded-3xl shadow-glow" loading="lazy" />
        <div>
          <h2 className="font-display text-4xl font-extrabold">Our <span className="text-gradient">story</span></h2>
          <p className="mt-4 text-muted-foreground">ML Global Testing & Consultancy was born from a simple mission: to make world-class language training accessible, personal and results-driven for every Pakistani student. Today, we're the trusted partner for over 10,000 alumni across 40+ countries.</p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[{ n: 10000, s: "+", l: "Alumni" }, { n: 40, s: "+", l: "Countries" }, { n: 98, s: "%", l: "Success" }].map((k) => (
              <div key={k.l} className="rounded-2xl glass p-4 text-center">
                <div className="text-2xl font-extrabold text-gradient"><Counter to={k.n} suffix={k.s} /></div>
                <div className="text-xs text-muted-foreground mt-1">{k.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-4 gap-5">
        {[
          { i: Target, t: "Our Mission", d: "Turn ambition into achievement through world-class coaching." },
          { i: Heart, t: "Our Values", d: "Integrity, empathy and relentless student focus." },
          { i: Award, t: "Excellence", d: "Certified faculty and examiner-approved methods." },
          { i: Users, t: "Community", d: "A supportive alumni network spanning 40+ countries." },
        ].map((v) => (
          <div key={v.t} className="rounded-3xl glass p-6 shadow-soft">
            <div className="w-12 h-12 rounded-2xl bg-gradient-brand grid place-items-center shadow-glow mb-4"><v.i className="w-5 h-5 text-white" /></div>
            <h3 className="font-bold">{v.t}</h3>
            <p className="text-sm text-muted-foreground mt-2">{v.d}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="font-display text-4xl font-extrabold text-center">Why students <span className="text-gradient">choose us</span></h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {["Certified expert faculty", "AI-powered mock testing", "Small personalized batches", "Guaranteed band coaching", "Free trial classes", "Career & visa support", "Global partnerships", "Flexible schedules", "Modern digital classrooms"].map((f) => (
            <div key={f} className="flex items-center gap-3 rounded-2xl glass p-4"><CheckCircle2 className="w-5 h-5 text-brand shrink-0" /> <span className="text-sm font-medium">{f}</span></div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/admissions"><Button size="lg" className="bg-gradient-brand text-white rounded-full px-8 shadow-glow">Start Your Journey</Button></Link>
        </div>
      </section>
    </SiteLayout>
  );
}
