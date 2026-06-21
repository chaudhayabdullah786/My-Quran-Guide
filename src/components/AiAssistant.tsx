import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function AiAssistant({ userRole }: { userRole?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white w-[calc(100vw-2rem)] sm:w-[360px] md:w-[400px] h-[550px] max-h-[calc(100vh-6rem)] rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden mb-4 origin-bottom-right"
          >
            <div className="bg-[#14442E] py-3.5 px-5 text-white flex items-center justify-between shadow-sm shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="font-serif font-bold text-sm tracking-tight">Support Assistant</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-1.5 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close Chat"
              >
                <X size={18} />
              </button>
            </div>
            
            <div className="flex-1 w-full bg-white relative">
              <iframe
                src="https://www.chatbase.co/chatbot-iframe/M9qLpAbfVKWhceR_0BaXS"
                width="100%"
                style={{ height: '100%' }}
                frameBorder="0"
                title="Support Chat"
              ></iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl flex flex-col items-center justify-center text-white transition-all relative z-[101] ${isOpen ? 'bg-slate-800' : 'bg-[#14442E]'}`}
      >
        {isOpen ? <X size={28} /> : (
          <>
            <MessageSquare size={26} />
            <span className="text-[7px] sm:text-[8px] font-bold uppercase tracking-tight mt-0.5 opacity-80">Support</span>
          </>
        )}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#C9982A] border-2 border-white rounded-full flex items-center justify-center text-[10px] font-bold text-ink shadow-sm">
            1
          </div>
        )}
      </motion.button>
    </div>
  );
}
