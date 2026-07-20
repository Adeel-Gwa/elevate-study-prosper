import { Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Headphones, BookOpen, PenTool, Mic } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export function CoursePage({
  title, tag, desc, modules, features, cta = "Enroll Now",
}: {
  title: string; tag: string; desc: string;
  modules: { icon: LucideIcon; name: string; d: string }[];
  features: string[]; cta?: string;
}) {
  return (
    <SiteLayout>
      <PageHero eyebrow={tag} title={title} subtitle={desc}>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/admissions"><Button size="lg" className="bg-gradient-brand text-white rounded-full px-7 shadow-glow">{cta} <ArrowRight className="w-4 h-4 ml-1" /></Button></Link>
          <Link to="/contact"><Button size="lg" variant="outline" className="rounded-full px-7 glass">Book Free Demo</Button></Link>
        </div>
      </PageHero>
      <section className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {modules.map((m) => (
          <div key={m.name} className="rounded-3xl glass p-6 shadow-soft hover:shadow-glow transition-all">
            <div className="w-12 h-12 rounded-2xl bg-gradient-brand grid place-items-center shadow-glow mb-4"><m.icon className="w-5 h-5 text-white" /></div>
            <h3 className="font-bold">{m.name}</h3>
            <p className="text-sm text-muted-foreground mt-2">{m.d}</p>
          </div>
        ))}
      </section>
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="rounded-3xl glass p-8 md:p-12 shadow-soft">
          <h2 className="font-display text-3xl font-extrabold">What&apos;s <span className="text-gradient">included</span></h2>
          <div className="mt-6 grid sm:grid-cols-2 gap-3">
            {features.map((f) => (
              <div key={f} className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-brand mt-0.5 shrink-0" /><span className="text-sm">{f}</span></div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export const fourSkills = [
  { icon: Headphones, name: "Listening", d: "Sharpen accents, note-taking and multi-speaker comprehension." },
  { icon: BookOpen, name: "Reading", d: "Skimming, scanning and inference strategies with timed drills." },
  { icon: PenTool, name: "Writing", d: "Task response, coherence and lexical range with examiner rubrics." },
  { icon: Mic, name: "Speaking", d: "Fluency, pronunciation and confidence in mock interviews." },
];
