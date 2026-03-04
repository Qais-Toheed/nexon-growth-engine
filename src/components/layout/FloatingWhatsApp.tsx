import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-24 right-5 z-40 md:bottom-8 md:right-6 flex flex-col items-end gap-2">
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="glass border border-border rounded-xl px-4 py-3 text-sm whitespace-nowrap shadow-card"
          >
            <p className="font-semibold text-foreground">Chat on WhatsApp</p>
            <p className="text-xs text-muted-foreground">Typically replies within minutes</p>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-13 h-13 w-[52px] h-[52px] rounded-full bg-green-500 hover:bg-green-400 flex items-center justify-center shadow-lg transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </motion.a>
    </div>
  );
}
