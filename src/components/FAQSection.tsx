"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-xl font-bold transition-colors ${isOpen ? "text-primary" : "text-white group-hover:text-primary/80"}`}>
          {question}
        </span>
        <div className={`shrink-0 ml-4 p-2 rounded-full transition-all ${isOpen ? "bg-primary text-secondary rotate-180" : "bg-white/5 text-primary"}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-white/60 leading-relaxed text-lg">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: { question: string; answer: string }[];
  className?: string;
}

export default function FAQSection({ 
  title = "Frequently Asked Questions", 
  subtitle,
  faqs,
  className = ""
}: FAQSectionProps) {
  return (
    <section className={`section-padding bg-secondary/30 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Help Center</span>
          <h2 className="text-4xl md:text-6xl font-outfit font-black text-white mb-6">
            {title}
          </h2>
          {subtitle && (
            <p className="text-white/60 max-w-2xl mx-auto text-xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 rounded-3xl p-8 border border-white/10 shadow-2xl">
            {faqs.map((item, idx) => (
              <FAQItem key={idx} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
