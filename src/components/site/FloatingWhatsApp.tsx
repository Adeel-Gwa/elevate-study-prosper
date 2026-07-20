import { useState } from "react";
import { MessageCircle, X, Phone, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const templates = [
  "I want to enroll in IELTS.",
  "Tell me about PTE fees & timings.",
  "Book a free demo class.",
  "Need help with visa consultation.",
];

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const phone = "923001234567";

  const send = (msg: string) => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-3 w-80 rounded-3xl glass shadow-glow overflow-hidden"
          >
            <div className="bg-gradient-brand text-white p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">ML Global Support</div>
                  <div className="text-xs opacity-90">Typically replies within minutes</div>
                </div>
                <button onClick={() => setOpen(false)}><X className="w-4 h-4" /></button>
              </div>
            </div>
            <div className="p-4 space-y-2">
              <p className="text-xs text-muted-foreground mb-2">Quick inquiries:</p>
              {templates.map((t) => (
                <button
                  key={t}
                  onClick={() => send(t)}
                  className="w-full text-left text-sm px-3 py-2 rounded-xl bg-muted hover:bg-accent transition-colors"
                >
                  {t}
                </button>
              ))}
              <div className="flex gap-2 pt-2">
                <a href={`tel:+${phone}`} className="flex-1 text-center text-xs font-medium py-2 rounded-full border border-border hover:bg-muted flex items-center justify-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" /> Call
                </a>
                <button onClick={() => send("Hi, I'd like to know more.")} className="flex-1 text-center text-xs font-medium py-2 rounded-full bg-gradient-brand text-white flex items-center justify-center gap-1.5">
                  <Send className="w-3.5 h-3.5" /> Chat
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen((v) => !v)}
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-glow"
        aria-label="WhatsApp chat"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      </motion.button>
    </div>
  );
}
