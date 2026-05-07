"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-secondary">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home/hero-bg.jpg"
          alt="Tata Build Construction Site"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-primary/20 text-primary border border-primary/30 font-bold text-sm mb-6 uppercase tracking-widest">
              Established 2023
            </span>
            <h1 className="text-5xl md:text-7xl font-outfit font-black text-white leading-tight mb-6">
              Building Your <span className="text-primary">Vision</span>,<br />
              Delivering <span className="text-primary">Excellence</span>
            </h1>
            <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-xl">
              Tata Build Pty Ltd is Australia's trusted partner for high-quality residential and commercial construction. We build with integrity, safety, and superior craftsmanship
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services" className="btn-primary flex items-center justify-center gap-2">
                Our Services <ArrowRight size={20} />
              </Link>
              <Link href="/portfolio" className="btn-outline flex items-center justify-center gap-2">
                View Portfolio
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-6">
              {[
                "Australian Standards",
                "On-Time Delivery",
                "Licensed & Insured",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-white/60 text-sm">
                  <CheckCircle2 size={16} className="text-primary" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-primary/5 blur-[120px] rounded-full" />
    </section>
  );
}
