"use client";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import FAQSection from "@/components/FAQSection";

export default function ClientContent({ service }: { service: any }) {
  if (!service) {
    return (
      <div className="min-h-screen bg-secondary flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-white mb-4">Service Not Found</h1>
          <Link href="/services" className="text-primary hover:underline">Back to Services</Link>
        </div>
      </div>
    );
  }

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-secondary">
        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-48 pb-32 overflow-hidden flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src={service.image}
              alt={service.title}
              fill
              priority
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-transparent to-secondary/80" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-bold mb-12 hover:gap-4 transition-all uppercase tracking-widest text-sm"
            >
              <ArrowLeft size={20} />
              Back to Services
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className="text-6xl md:text-8xl font-outfit font-black text-white mb-8 tracking-tight">
                {service.title.split(' ')[0]} <span className="text-primary">{service.title.split(' ').slice(1).join(' ')}</span>
              </h1>
              <p className="text-white/95 text-xl md:text-2xl leading-relaxed font-semibold">
                {service.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Overview & Features */}
        <section className="section-padding relative z-20 -mt-10">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-outfit font-black text-white mb-8">Service <span className="text-primary">Overview</span></h2>
                <div className="prose prose-invert prose-lg max-w-none">
                  <p className="text-white/70 leading-relaxed text-xl mb-8">
                    {service.details}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 p-12 rounded-[3rem] backdrop-blur-xl"
              >
                <h3 className="text-3xl font-outfit font-black text-white mb-10">Key Capabilities</h3>
                <div className="space-y-6">
                  {service.features.map((feature: string, i: number) => (
                    <div key={i} className="flex items-center gap-4 text-white/80">
                      <CheckCircle2 className="text-primary shrink-0" size={24} />
                      <span className="text-lg font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-accent/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-outfit font-black text-white mb-6">Our <span className="text-primary">Process</span></h2>
              <p className="text-white/50 text-xl max-w-2xl mx-auto">A methodical approach to ensure every project is delivered to the highest standard.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.process.map((step: any, i: number) => (
                <div key={i} className="bg-white/5 p-10 rounded-3xl border border-white/10 relative group hover:border-primary/50 transition-all">
                  <span className="text-6xl font-black text-primary/10 absolute top-6 right-8 group-hover:text-primary/20 transition-colors">0{i + 1}</span>
                  <h4 className="text-xl font-bold text-white mb-4 relative z-10">{step.title}</h4>
                  <p className="text-white/50 relative z-10 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        {service.faqs && (
          <FAQSection 
            title="Service FAQs"
            subtitle={`Common questions about ${service.title}`}
            faqs={service.faqs}
          />
        )}

        <Footer />
      </main>
    </SmoothScroll>
  );
}