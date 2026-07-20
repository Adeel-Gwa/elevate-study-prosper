import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — ML Global" }, { name: "description", content: "Get in touch with ML Global Testing & Consultancy." }] }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Say Hello" title="We're here to help" subtitle="Reach out — our advisors will get back within a few hours." />
      <section className="mx-auto max-w-7xl px-6 py-12 grid lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          {[
            { i: Phone, t: "Phone", v: "+92 300 1234567" },
            { i: Mail, t: "Email", v: "info@mlglobal.pk" },
            { i: MapPin, t: "Address", v: "Main Boulevard, Lahore, Pakistan" },
          ].map((c) => (
            <div key={c.t} className="rounded-3xl glass p-6 shadow-soft flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-brand grid place-items-center shadow-glow"><c.i className="w-6 h-6 text-white" /></div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">{c.t}</div>
                <div className="font-semibold">{c.v}</div>
              </div>
            </div>
          ))}
          <div className="rounded-3xl overflow-hidden shadow-soft aspect-video">
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13611.5!2d74.35!3d31.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2sLahore!5e0!3m2!1sen!2s!4v1" className="w-full h-full border-0" loading="lazy" />
          </div>
        </div>
        <form className="rounded-3xl glass p-8 shadow-soft space-y-4" onSubmit={(e) => e.preventDefault()}>
          <h3 className="font-display text-2xl font-extrabold">Send us a message</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Input placeholder="Full name" required maxLength={100} />
            <Input placeholder="Phone" required maxLength={20} />
          </div>
          <Input type="email" placeholder="Email address" required maxLength={200} />
          <Input placeholder="Subject" maxLength={100} />
          <Textarea placeholder="Your message" rows={5} maxLength={1000} />
          <Button type="submit" className="w-full bg-gradient-brand text-white border-0 rounded-full py-6 shadow-glow">Send message <ArrowRight className="w-4 h-4 ml-1" /></Button>
        </form>
      </section>
    </SiteLayout>
  );
}
