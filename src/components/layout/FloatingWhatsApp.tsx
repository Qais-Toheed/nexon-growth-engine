import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

const WHATSAPP_PRIMARY = "923094278123";

export function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-24 right-5 z-40 md:bottom-8 md:right-6 flex flex-col items-end gap-2">
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.92 }}
            transition={{ duration: 0.18 }}
            className="glass-bright rounded-2xl px-4 py-3 text-sm whitespace-nowrap shadow-card"
            style={{ border: "1px solid hsl(var(--glass-border-bright))" }}
          >
            <p className="font-bold text-foreground text-sm">Chat on WhatsApp</p>
            <p className="text-xs text-muted-foreground mt-0.5">Typically replies within minutes</p>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.a
        href={`https://wa.me/${WHATSAPP_PRIMARY}?text=${encodeURIComponent("Hi Nexon Growth! I'm interested in your services and would like to discuss a project.")}`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.93 }}
        className="w-[52px] h-[52px] rounded-full flex items-center justify-center shadow-lg"
        style={{ background: "linear-gradient(135deg, #1DA851, #25D366)" }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </motion.a>
    </div>
  );
}
