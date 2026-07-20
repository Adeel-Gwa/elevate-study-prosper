import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

export function TopBar() {
  return (
    <div className="hidden md:block bg-gradient-brand text-white text-xs">
      <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between gap-4">
        <div className="flex items-center gap-5">
          <a href="tel:+923001234567" className="flex items-center gap-1.5 hover:opacity-80">
            <Phone className="w-3.5 h-3.5" /> +92 300 1234567
          </a>
          <a href="mailto:info@mlglobal.pk" className="flex items-center gap-1.5 hover:opacity-80">
            <Mail className="w-3.5 h-3.5" /> info@mlglobal.pk
          </a>
          <span className="hidden lg:flex items-center gap-1.5 opacity-90">
            <MapPin className="w-3.5 h-3.5" /> Main Boulevard, Lahore, Pakistan
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" aria-label="Facebook" className="hover:opacity-80"><Facebook className="w-3.5 h-3.5" /></a>
          <a href="#" aria-label="Instagram" className="hover:opacity-80"><Instagram className="w-3.5 h-3.5" /></a>
          <a href="#" aria-label="YouTube" className="hover:opacity-80"><Youtube className="w-3.5 h-3.5" /></a>
          <a href="#" aria-label="LinkedIn" className="hover:opacity-80"><Linkedin className="w-3.5 h-3.5" /></a>
        </div>
      </div>
    </div>
  );
}
