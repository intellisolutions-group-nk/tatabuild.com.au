"use client";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Tag } from "lucide-react";

export default function PortfolioPage() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-secondary">
        <Navbar />

        {/* Portfolio Hero Section */}
        <section className="relative pt-48 pb-32 overflow-hidden min-h-[60vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/projects/portfolio-hero.jpg"
              alt="Our Portfolio"
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
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Legacy</span>
              <h1 className="text-5xl md:text-7xl font-outfit font-black text-white mb-8">
                Portfolio & <span className="text-primary">Projects</span>
              </h1>
              <p className="text-white/95 max-w-3xl mx-auto text-xl font-semibold">
                A showcase of our commitment to excellence across residential and commercial construction in Australia.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Grid Section */}
        <section className="pb-32 relative z-10 -mt-10">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                <Link key={project.slug} href={`/portfolio/${project.slug}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="group relative rounded-[2rem] overflow-hidden shadow-2xl h-[500px] cursor-pointer"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-10 w-full">
                      <span className="bg-primary text-secondary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block shadow-xl">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-outfit font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-white/60 flex items-center gap-2 font-medium">
                        <MapPin size={16} className="text-primary" />
                        {project.location}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
