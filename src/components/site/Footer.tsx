import { Link } from "@tanstack/react-router";
import { GraduationCap, Facebook, Instagram, Youtube, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border bg-mesh">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-brand grid place-items-center shadow-glow">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-display font-extrabold">ML Global</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Testing & Consultancy</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Pakistan's premium destination for IELTS, PTE, LanguageCert and Spoken English preparation.
          </p>
          <div className="flex gap-2">
            {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full glass grid place-items-center hover:bg-gradient-brand hover:text-white transition-all">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Courses</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/ielts" className="hover:text-foreground">IELTS Preparation</Link></li>
            <li><Link to="/pte" className="hover:text-foreground">PTE Academic</Link></li>
            <li><Link to="/languagecert" className="hover:text-foreground">LanguageCert</Link></li>
            <li><Link to="/spoken-english" className="hover:text-foreground">Spoken English</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Institute</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About Us</Link></li>
            <li><Link to="/success-stories" className="hover:text-foreground">Success Stories</Link></li>
            <li><Link to="/gallery" className="hover:text-foreground">Gallery</Link></li>
            <li><Link to="/blogs" className="hover:text-foreground">Blog</Link></li>
            <li><Link to="/verify" className="hover:text-foreground">Verify Certificate</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> Main Boulevard, Lahore, Pakistan</li>
            <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 shrink-0" /> +92 300 1234567</li>
            <li className="flex gap-2"><Mail className="w-4 h-4 mt-0.5 shrink-0" /> info@mlglobal.pk</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} ML Global Testing & Consultancy. All rights reserved.</p>
          <p>Crafted with care in Pakistan.</p>
        </div>
      </div>
    </footer>
  );
}
