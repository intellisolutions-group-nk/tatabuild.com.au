"use client";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  index: number;
  slug: string;
  image?: string;
}

export default function ServiceCard({ title, description, Icon, index, slug }: ServiceCardProps) {
  return (
    <Link href={`/services/${slug}`} className="block h-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -10 }}
        className="group relative bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 h-full cursor-pointer"
      >
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <Icon size={80} className="text-primary" />
        </div>

        <div className="bg-primary/20 p-4 rounded-xl inline-block mb-6 group-hover:bg-primary transition-colors">
          <Icon className="text-primary group-hover:text-secondary w-8 h-8 transition-colors" />
        </div>

        <h3 className="text-2xl font-outfit font-bold text-white mb-4 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-white/60 leading-relaxed">
          {description}
        </p>

        <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
          <span className="text-primary font-bold text-sm uppercase tracking-widest">Learn More</span>
          <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:text-secondary transition-all">
            <Icon size={14} />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
