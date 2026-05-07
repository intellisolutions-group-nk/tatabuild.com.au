"use client";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, User, Briefcase, ChevronRight, Target, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-secondary flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-white mb-4">Project Not Found</h1>
          <Link href="/portfolio" className="text-primary hover:underline">Back to Portfolio</Link>
        </div>
      </div>
    );
  }

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-secondary">
        <Navbar />

        {/* Hero Section - Focused on Storytelling */}
        <section className="relative pt-48 pb-32 overflow-hidden min-h-[60vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover opacity-20 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary/90 to-secondary" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-primary font-bold mb-12 hover:gap-4 transition-all uppercase tracking-widest text-xs"
            >
              <ArrowLeft size={16} />
              Back to Portfolio
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-4 mb-6">
                 <span className="w-12 h-[1px] bg-primary"></span>
                 <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs">Project Case Study</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-outfit font-black text-white mb-8 tracking-tight leading-[1.1]">
                {project.title}
              </h1>
              <p className="text-white/60 text-xl md:text-2xl leading-relaxed font-medium max-w-2xl">
                {project.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case Study Content Block */}
        <section className="pb-32 relative z-20 -mt-10">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16">
              
              {/* Left Column: Narrative Content */}
              <div className="lg:col-span-8 space-y-20">
                
                {/* Section: Overview */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Project Overview
                  </h2>
                  <div className="prose prose-invert prose-xl max-w-none">
                    <p className="text-white/70 leading-relaxed font-medium">
                      {project.details}
                    </p>
                  </div>
                </motion.div>

                {/* Section: Challenge & Strategy (Dynamic context based on category) */}
                <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-white/5">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-primary/10 rounded-2xl">
                        <Target className="text-primary" size={24} />
                      </div>
                      <h3 className="text-2xl font-black text-white">The Challenge</h3>
                    </div>
                    <p className="text-white/50 leading-relaxed">
                      Every high-performance project comes with unique constraints. For {project.title}, the primary objective was to deliver a state-of-the-art {project.category.toLowerCase()} solution while navigating rigorous local compliance standards and site-specific logistical hurdles.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-primary/10 rounded-2xl">
                        <ShieldCheck className="text-primary" size={24} />
                      </div>
                      <h3 className="text-2xl font-black text-white">Execution</h3>
                    </div>
                    <p className="text-white/50 leading-relaxed">
                      Our execution strategy focused on phased trade coordination and precision engineering. By leveraging advanced BIM modeling and real-time project tracking, we ensured that every architectural detail was translated perfectly from design to physical structure.
                    </p>
                  </motion.div>
                </div>

                {/* Section: Modern Image Grid (Smaller, Balanced) */}
                <div className="pt-20">
                  <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-10">Gallery Showcase</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {project.gallery.map((img, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={`relative aspect-[4/3] rounded-3xl overflow-hidden group border border-white/5 shadow-xl ${
                          i === 0 ? "md:col-span-2 md:row-span-2 aspect-auto" : ""
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`${project.title} detail ${i + 1}`}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors duration-500" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Section: Final Outcome */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/5 p-12 rounded-[3rem] border border-white/10"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-primary rounded-2xl">
                      <Zap className="text-secondary" size={24} />
                    </div>
                    <h3 className="text-3xl font-black text-white">The Outcome</h3>
                  </div>
                  <p className="text-white/70 text-xl leading-relaxed mb-8 italic font-medium">
                    "The completion of {project.title} marks a significant milestone in our portfolio, demonstrating our capacity to deliver complex {project.category.toLowerCase()} projects with uncompromising quality and architectural integrity."
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10">
                    <div>
                      <p className="text-primary font-black text-3xl mb-1">100%</p>
                      <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Compliant</p>
                    </div>
                    <div>
                      <p className="text-primary font-black text-3xl mb-1">{project.year}</p>
                      <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Delivered</p>
                    </div>
                    <div>
                      <p className="text-primary font-black text-3xl mb-1">On-Time</p>
                      <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Schedule</p>
                    </div>
                    <div>
                      <p className="text-primary font-black text-3xl mb-1">Premium</p>
                      <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Finishes</p>
                    </div>
                  </div>
                </motion.div>

              </div>

              {/* Right Column: Project Data Sidebar */}
              <div className="lg:col-span-4">
                <div className="sticky top-32 space-y-8">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-xl"
                  >
                    <h3 className="text-xs font-bold text-white uppercase tracking-[0.3em] mb-10 pb-6 border-b border-white/5">Project Intel</h3>
                    
                    <div className="space-y-8">
                      <div className="flex items-start gap-5">
                        <div className="p-3 bg-white/5 rounded-xl">
                          <User className="text-primary" size={20} />
                        </div>
                        <div>
                          <p className="text-white/30 text-[10px] uppercase font-black tracking-widest mb-1">Client Partner</p>
                          <p className="text-white font-bold">{project.client}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-5">
                        <div className="p-3 bg-white/5 rounded-xl">
                          <MapPin className="text-primary" size={20} />
                        </div>
                        <div>
                          <p className="text-white/30 text-[10px] uppercase font-black tracking-widest mb-1">Location</p>
                          <p className="text-white font-bold">{project.location}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-5">
                        <div className="p-3 bg-white/5 rounded-xl">
                          <Calendar className="text-primary" size={20} />
                        </div>
                        <div>
                          <p className="text-white/30 text-[10px] uppercase font-black tracking-widest mb-1">Completion</p>
                          <p className="text-white font-bold">{project.year}</p>
                        </div>
                      </div>

                      <div className="pt-8 mt-8 border-t border-white/5">
                        <p className="text-white/30 text-[10px] uppercase font-black tracking-widest mb-6">Expertise Applied</p>
                        <div className="space-y-4">
                          {project.scope.map((item, i) => (
                            <div key={i} className="flex items-center gap-3 group">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                              <span className="text-white/70 text-sm font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="mt-12 flex items-center justify-between w-full bg-primary text-secondary px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all group"
                    >
                      Enquire Now
                      <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                  
                  {/* Category Tag */}
                  <div className="px-10">
                    <p className="text-white/20 text-[10px] uppercase font-black tracking-[0.5em] mb-4">Categorization</p>
                    <span className="inline-block border border-white/10 px-6 py-2 rounded-full text-white/40 text-xs font-bold uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
