import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Play, Sparkles, ArrowRight, Award, Users, Trophy, Star,
  BookOpen, Mic, GraduationCap, Globe2, CheckCircle2, Quote, Calendar, MapPin, Phone, Mail
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Counter } from "@/components/site/Counter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import heroImg from "@/assets/hero-student.jpg";

export const Route = createFileRoute("/")({ component: Home });

const courses = [
  { icon: BookOpen, title: "IELTS Preparation", desc: "Academic & General Training with band 7+ guarantee coaching.", href: "/ielts", tint: "from-blue-500/15 to-cyan-500/15" },
  { icon: GraduationCap, title: "PTE Academic", desc: "AI-powered mock tests and score-boosting strategies.", href: "/pte", tint: "from-purple-500/15 to-pink-500/15" },
  { icon: Globe2, title: "LanguageCert", desc: "UKVI approved SELT for study, work and settlement.", href: "/languagecert", tint: "from-teal-500/15 to-emerald-500/15" },
  { icon: Mic, title: "Spoken English", desc: "Confident fluency, accent training and public speaking.", href: "/spoken-english", tint: "from-amber-500/15 to-orange-500/15" },
];

const skills = [
  { label: "Listening", value: 92, color: "from-blue-500 to-cyan-400" },
  { label: "Reading", value: 88, color: "from-purple-500 to-pink-400" },
  { label: "Writing", value: 85, color: "from-teal-500 to-emerald-400" },
  { label: "Speaking", value: 90, color: "from-amber-500 to-orange-400" },
];

const testimonials = [
  { name: "Ayesha K.", score: "IELTS 8.0", text: "The instructors are simply world-class. My band jumped from 6.0 to 8.0 in 8 weeks.", img: "https://i.pravatar.cc/120?img=47" },
  { name: "Hamza R.", score: "PTE 85", text: "The mock test platform mirrors the real PTE perfectly. Cleared for Australian PR.", img: "https://i.pravatar.cc/120?img=13" },
  { name: "Zainab M.", score: "IELTS 7.5", text: "Confidence, structure, and results. ML Global changed my whole trajectory.", img: "https://i.pravatar.cc/120?img=32" },
];

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-mesh">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 -left-10 w-96 h-96 rounded-full bg-brand/15 blur-3xl animate-blob" />
          <div className="absolute top-40 right-0 w-96 h-96 rounded-full bg-purple/15 blur-3xl animate-blob" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-teal/15 blur-3xl animate-blob" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-14 pb-24 lg:pt-20 lg:pb-32 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5 text-brand" />
              #1 Rated Language Institute in Pakistan
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05]">
              Speak. Score. <span className="text-gradient">Succeed.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Premium coaching for IELTS, PTE, LanguageCert and Spoken English —
              taught by certified experts who&apos;ve helped 10,000+ students earn their target scores and dream visas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/admissions">
                <Button size="lg" className="bg-gradient-brand text-white border-0 rounded-full px-7 shadow-glow hover:opacity-90">
                  Enroll Now <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <a href="#video">
                <Button size="lg" variant="outline" className="rounded-full px-7 border-border glass">
                  <Play className="w-4 h-4 mr-1" /> Watch Intro
                </Button>
              </a>
            </div>

            <div className="mt-10 flex items-center gap-8">
              {[
                { n: 10000, s: "+", l: "Students" },
                { n: 98, s: "%", l: "Success" },
                { n: 15, s: "+", l: "Years" },
              ].map((k) => (
                <div key={k.l}>
                  <div className="text-3xl font-extrabold text-gradient">
                    <Counter to={k.n} suffix={k.s} />
                  </div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{k.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto rounded-[2.5rem] overflow-hidden shadow-glow">
              <img src={heroImg} alt="ML Global student" className="w-full h-full object-cover" width={1280} height={1280} />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>

            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity }}
              className="absolute -left-4 top-16 glass rounded-2xl p-4 shadow-soft w-52"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-brand grid place-items-center">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Latest Score</div>
                  <div className="font-bold">IELTS 8.5 Band</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }} transition={{ duration: 5, repeat: Infinity }}
              className="absolute -right-2 bottom-20 glass rounded-2xl p-4 shadow-soft w-56"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[47, 13, 32, 5].map((i) => (
                    <img key={i} src={`https://i.pravatar.cc/40?img=${i}`} className="w-8 h-8 rounded-full border-2 border-white" alt="" />
                  ))}
                </div>
                <div>
                  <div className="font-bold text-sm">10,000+ Alumni</div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> 4.9 rating
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, delay: 1 }}
              className="absolute right-6 -top-2 glass rounded-2xl p-3 shadow-soft"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <div className="text-xs font-medium">Live Classes Now</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PROMO VIDEO */}
      <section id="video" className="mx-auto max-w-7xl px-6 -mt-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-glow aspect-video bg-gradient-brand"
        >
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
            title="ML Global Testing promotional video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>
      </section>

      {/* ENGLISH SKILLS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading eyebrow="Four Skills, One Mastery" title="Master every English skill" subtitle="A holistic curriculum engineered around the exact competencies examiners measure." />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-3xl glass p-6 shadow-soft"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-semibold">{s.label}</div>
                <div className="text-xs text-muted-foreground">{s.value}%</div>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }} whileInView={{ width: `${s.value}%` }} viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                  className={`h-full rounded-full bg-gradient-to-r ${s.color}`}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Structured drills, examiner-style feedback and weekly progress reviews.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden aspect-[3/4] shadow-soft">
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600" alt="" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="space-y-4 pt-10">
                <div className="rounded-3xl overflow-hidden aspect-square shadow-soft">
                  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600" alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="rounded-3xl overflow-hidden aspect-square shadow-soft">
                  <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600" alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-2 glass rounded-3xl p-6 shadow-glow max-w-xs">
              <div className="flex items-center gap-3">
                <Award className="w-10 h-10 text-brand" />
                <div>
                  <div className="text-2xl font-extrabold text-gradient"><Counter to={15} suffix="+" /></div>
                  <div className="text-xs text-muted-foreground">Years of Excellence</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="text-xs uppercase tracking-widest text-brand font-semibold mb-3">About ML Global</div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold leading-tight">
              A premium institute built for <span className="text-gradient">real results.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Founded to bridge Pakistani talent with global opportunities, ML Global Testing & Consultancy blends
              elite curriculum design, examiner-trained faculty and a nurturing student experience. Every course is
              engineered for measurable outcomes — the score you need, on the timeline you need it.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {["Certified Faculty", "AI Mock Tests", "Small Batches", "Guaranteed Results", "Free Consultation", "Career Support"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-brand" /> {f}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link to="/about"><Button variant="outline" className="rounded-full">Learn more <ArrowRight className="w-4 h-4 ml-1" /></Button></Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COURSES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading eyebrow="Course Overview" title="Programs designed to transform" subtitle="Whether it's a band 8, PR points or global confidence — pick your path." />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative rounded-3xl p-6 glass shadow-soft hover:shadow-glow hover:-translate-y-1 transition-all"
            >
              <div className={`absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br ${c.tint} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="w-12 h-12 rounded-2xl bg-gradient-brand grid place-items-center shadow-glow mb-5">
                <c.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display font-bold text-lg">{c.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{c.desc}</p>
              <Link to={c.href} className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand">
                Explore <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading eyebrow="Student Voices" title="Stories that inspire" subtitle="Real students, real bands, real journeys." />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl glass p-7 shadow-soft"
            >
              <Quote className="w-8 h-8 text-brand/40" />
              <p className="mt-4 text-foreground/90 leading-relaxed">{t.text}</p>
              <div className="mt-6 flex items-center gap-3">
                <img src={t.img} alt={t.name} className="w-11 h-11 rounded-full" loading="lazy" />
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-brand font-semibold">{t.score}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STATISTICS */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2.5rem] bg-gradient-brand text-white p-10 md:p-16 shadow-glow overflow-hidden relative">
          <div className="absolute inset-0 opacity-20 bg-mesh" />
          <div className="relative grid md:grid-cols-4 gap-8 text-center">
            {[
              { n: 10000, s: "+", l: "Happy Students", icon: Users },
              { n: 98, s: "%", l: "Success Rate", icon: Trophy },
              { n: 50, s: "+", l: "Expert Trainers", icon: GraduationCap },
              { n: 15, s: "+", l: "Years Experience", icon: Award },
            ].map((k) => (
              <div key={k.l}>
                <k.icon className="w-8 h-8 mx-auto mb-3 opacity-90" />
                <div className="text-4xl md:text-5xl font-extrabold"><Counter to={k.n} suffix={k.s} /></div>
                <div className="text-sm opacity-90 mt-1">{k.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-xs uppercase tracking-widest text-brand font-semibold mb-3">Get in touch</div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold">Let's start your <span className="text-gradient">journey</span></h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              Book a free consultation with our advisors. We'll help you pick the right course, batch, and roadmap.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { i: Phone, t: "Call us", v: "+92 300 1234567" },
                { i: Mail, t: "Email", v: "info@mlglobal.pk" },
                { i: MapPin, t: "Visit", v: "Main Boulevard, Lahore" },
                { i: Calendar, t: "Hours", v: "Mon–Sat, 9am–9pm" },
              ].map((c) => (
                <div key={c.t} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl glass grid place-items-center">
                    <c.i className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{c.t}</div>
                    <div className="font-semibold">{c.v}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <form className="rounded-3xl glass p-8 shadow-soft space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Full name" required maxLength={100} />
              <Input placeholder="Phone" required maxLength={20} />
            </div>
            <Input type="email" placeholder="Email address" required maxLength={200} />
            <Input placeholder="Interested course (IELTS, PTE...)" maxLength={100} />
            <Textarea placeholder="Your message" rows={5} maxLength={1000} />
            <Button type="submit" className="w-full bg-gradient-brand text-white border-0 rounded-full py-6 shadow-glow">
              Send Inquiry <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </form>
        </div>
      </section>

      {/* PROMO BANNER */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-brand text-white p-10 md:p-14 shadow-glow">
          <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -left-16 -bottom-16 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid md:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <div className="text-sm uppercase tracking-widest opacity-90">Limited Time</div>
              <h3 className="mt-2 font-display text-3xl md:text-4xl font-extrabold">Save 25% on all IELTS & PTE bootcamps this month.</h3>
              <p className="mt-3 opacity-90 max-w-xl">Join the highest-rated language institute in Pakistan and secure your future score today.</p>
            </div>
            <Link to="/admissions">
              <Button size="lg" className="bg-white text-brand hover:bg-white/90 rounded-full px-8 shadow-xl">
                Claim Offer <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <div className="text-xs uppercase tracking-widest text-brand font-semibold mb-3">{eyebrow}</div>
      <h2 className="font-display text-4xl md:text-5xl font-extrabold leading-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
