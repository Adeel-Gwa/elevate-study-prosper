import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Upload, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/admissions")({
  head: () => ({ meta: [{ title: "Admissions — ML Global" }, { name: "description", content: "Apply now for IELTS, PTE, LanguageCert and Spoken English programs." }] }),
  component: Admissions,
});

function Admissions() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Apply Now" title="Start your admission journey" subtitle="Complete the form below and our team will contact you within 24 hours." />
      <section className="mx-auto max-w-6xl px-6 py-12 grid lg:grid-cols-[1fr_1.4fr] gap-10">
        <div className="space-y-4">
          {["Free consultation call", "Personalized course roadmap", "Scholarship guidance", "Fee & schedule flexibility", "Money-back guarantee"].map((f) => (
            <div key={f} className="flex items-center gap-3 rounded-2xl glass p-4"><CheckCircle2 className="w-5 h-5 text-brand" /> <span className="text-sm font-medium">{f}</span></div>
          ))}
        </div>
        <form className="rounded-3xl glass p-8 shadow-soft space-y-5" onSubmit={(e) => e.preventDefault()}>
          <h3 className="font-display text-2xl font-extrabold">Online Admission Form</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div><Label className="text-xs">Full name</Label><Input required maxLength={100} /></div>
            <div><Label className="text-xs">Father&apos;s name</Label><Input required maxLength={100} /></div>
            <div><Label className="text-xs">CNIC / Passport</Label><Input required maxLength={30} /></div>
            <div><Label className="text-xs">Phone</Label><Input required maxLength={20} /></div>
            <div className="sm:col-span-2"><Label className="text-xs">Email</Label><Input type="email" required maxLength={200} /></div>
            <div><Label className="text-xs">Course</Label><Input placeholder="IELTS / PTE / ..." maxLength={100} /></div>
            <div><Label className="text-xs">Preferred batch</Label><Input placeholder="Morning / Evening" maxLength={50} /></div>
          </div>
          <div>
            <Label className="text-xs">Notes</Label>
            <Textarea rows={4} maxLength={1000} placeholder="Tell us about your goals..." />
          </div>
          <div>
            <Label className="text-xs">Upload documents (CNIC, previous certificates)</Label>
            <label className="mt-2 flex items-center justify-center gap-2 w-full border-2 border-dashed border-border rounded-2xl p-6 cursor-pointer hover:bg-muted transition-colors">
              <Upload className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Click to upload (PDF, JPG, PNG)</span>
              <input type="file" className="hidden" multiple accept=".pdf,image/*" />
            </label>
          </div>
          <Button type="submit" className="w-full bg-gradient-brand text-white border-0 rounded-full py-6 shadow-glow">Submit Application <ArrowRight className="w-4 h-4 ml-1" /></Button>
        </form>
      </section>
    </SiteLayout>
  );
}
