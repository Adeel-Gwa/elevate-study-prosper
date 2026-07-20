import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/ielts", label: "IELTS" },
  { to: "/pte", label: "PTE" },
  { to: "/spoken-english", label: "Spoken English" },
  { to: "/languagecert", label: "LanguageCert" },
  { to: "/gallery", label: "Gallery" },
  { to: "/success-stories", label: "Success Stories" },
  { to: "/blogs", label: "Blogs" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? "glass shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-brand grid place-items-center shadow-glow group-hover:scale-105 transition-transform">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-extrabold text-sm">ML Global</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Testing & Consultancy</div>
          </div>
        </Link>

        <div className="hidden xl:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-lg hover:bg-muted transition-colors"
              activeProps={{ className: "text-foreground bg-muted" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link to="/admissions" className="hidden sm:block">
            <Button className="bg-gradient-brand text-white border-0 shadow-glow hover:opacity-90 rounded-full px-5">
              Apply Now
            </Button>
          </Link>
          <button
            className="xl:hidden p-2 rounded-lg hover:bg-muted"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="xl:hidden glass border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-4 grid gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/admissions" onClick={() => setOpen(false)}>
              <Button className="w-full mt-2 bg-gradient-brand text-white border-0 rounded-full">Apply Now</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
