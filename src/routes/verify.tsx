import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Download, Printer, QrCode, Search, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/verify")({
  head: () => ({ meta: [{ title: "Verify Certificate — ML Global" }, { name: "description", content: "Instantly verify ML Global certificates by ID, QR, name, CNIC or passport." }] }),
  component: Verify,
});

type Cert = {
  id: string; name: string; father: string; course: string; score: string;
  duration: string; issued: string; expiry: string; photo: string;
};

const demo: Cert = {
  id: "MLG-2025-00812",
  name: "Ayesha Khan",
  father: "Muhammad Khan",
  course: "IELTS Academic Preparation",
  score: "IELTS Band 8.5",
  duration: "8 Weeks",
  issued: "October 12, 2025",
  expiry: "Lifetime",
  photo: "https://i.pravatar.cc/300?img=47",
};

function Verify() {
  const [q, setQ] = useState("");
  const [result, setResult] = useState<Cert | null>(null);
  const [searched, setSearched] = useState(false);

  const search = () => {
    setSearched(true);
    setResult(q.trim() ? demo : null);
  };

  return (
    <SiteLayout>
      <PageHero eyebrow="Certificate Verification" title="Verify your certificate" subtitle="Enter Certificate ID, QR value, student name, CNIC or passport number." />
      <section className="mx-auto max-w-4xl px-6 -mt-8">
        <div className="rounded-3xl glass p-6 md:p-8 shadow-glow flex flex-col md:flex-row gap-3">
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="e.g. MLG-2025-00812" className="flex-1 py-6" maxLength={100} />
          <Button onClick={search} className="bg-gradient-brand text-white rounded-full px-8 py-6 shadow-glow"><Search className="w-4 h-4 mr-1" /> Verify</Button>
        </div>
        <p className="text-xs text-muted-foreground text-center mt-3">Demo: enter any value to see a sample certificate.</p>
      </section>

      {searched && result && (
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-5xl px-6 py-12">
          <div className="rounded-3xl overflow-hidden shadow-glow glass">
            <div className="bg-gradient-brand text-white p-5 flex items-center justify-between">
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5" /> <span className="font-semibold">Verified authentic</span></div>
              <span className="text-xs opacity-90">ID: {result.id}</span>
            </div>
            <div className="p-8 grid md:grid-cols-[auto_1fr_auto] gap-8 items-start">
              <img src={result.photo} alt={result.name} className="w-32 h-32 rounded-2xl object-cover shadow-soft" />
              <div className="space-y-2">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Student</div>
                <h3 className="font-display text-3xl font-extrabold">{result.name}</h3>
                <div className="text-sm text-muted-foreground">Father&apos;s name: {result.father}</div>
                <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
                  <Info label="Course" value={result.course} />
                  <Info label="Score" value={result.score} />
                  <Info label="Duration" value={result.duration} />
                  <Info label="Issued" value={result.issued} />
                  <Info label="Expiry" value={result.expiry} />
                  <Info label="Status" value={<span className="inline-flex items-center gap-1 text-green-600 font-semibold"><CheckCircle2 className="w-4 h-4" /> Active</span>} />
                </div>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 rounded-2xl bg-white border border-border grid place-items-center shadow-soft">
                  <QrCode className="w-24 h-24 text-foreground" />
                </div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-2">Scan to verify</div>
              </div>
            </div>
            <div className="border-t border-border p-5 flex flex-wrap gap-3 justify-end">
              <Button variant="outline" className="rounded-full"><Printer className="w-4 h-4 mr-1" /> Print</Button>
              <Button className="bg-gradient-brand text-white rounded-full"><Download className="w-4 h-4 mr-1" /> Download PDF</Button>
            </div>
          </div>
        </motion.section>
      )}
      {searched && !result && (
        <section className="mx-auto max-w-2xl px-6 py-12 text-center">
          <p className="text-muted-foreground">No certificate found. Please check the ID and try again.</p>
        </section>
      )}
    </SiteLayout>
  );
}

function Info({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="rounded-2xl glass p-3">
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="font-semibold text-sm mt-0.5">{value}</div>
    </div>
  );
}
