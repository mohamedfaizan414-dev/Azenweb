import { motion } from "framer-motion";
import { company } from "../../data/content";

function WhatsAppIcon({ size = 20, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  );
}

export default function WhatsAppButton() {
  return (
    <motion.aside
      aria-label="Contact options"
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.4 }}
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 select-none"
    >
      <motion.a
        href={company.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Azenweb on WhatsApp"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="group flex items-center gap-2.5 rounded-full border border-white/20 bg-black/85 px-4 py-2.5 sm:px-5 sm:py-3 text-white shadow-[0_12px_40px_rgba(0,0,0,0.9)] backdrop-blur-2xl transition-all duration-300 hover:border-white hover:bg-black hover:shadow-[0_16px_50px_rgba(255,255,255,0.15)]"
      >
        {/* Pulsing online status indicator */}
 
        {/* WhatsApp Icon */}
        <WhatsAppIcon size={18} className="text-white transition-transform group-hover:scale-110" />

        {/* Text */}
  
      </motion.a>
    </motion.aside>
  );
}
