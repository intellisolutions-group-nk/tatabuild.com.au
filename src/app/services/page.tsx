"use client";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";
import { services } from "@/data/servicesData";
import ServiceCard from "@/components/ServiceCard";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-secondary">
        <Navbar />

        {/* Services Hero Section */}
        <section className="relative pt-48 pb-32 overflow-hidden min-h-[60vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/home/feature-bg.jpg"
              alt="Our Services"
              fill
              priority
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-transparent to-secondary/80" />
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Capabilities</span>
              <h1 className="text-6xl md:text-8xl font-outfit font-black text-white mb-8 tracking-tight">
                Our <span className="text-primary">Capabilities</span>
              </h1>
              <p className="text-white/95 max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed font-semibold">
                Delivering high-performance construction solutions across Australia with a commitment to precision, safety, and superior craftsmanship.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="pb-32 relative z-10 -mt-10">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <ServiceCard
                  key={i}
                  index={i}
                  title={service.title}
                  description={service.description}
                  Icon={service.icon}
                  image={service.image}
                  slug={service.slug}
                  className={i === services.length - 1 && services.length % 3 === 1 ? "lg:col-start-2" : ""}
                />
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
