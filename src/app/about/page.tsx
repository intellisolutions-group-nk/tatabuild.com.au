"use client";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Users, Shield, Clock, Handshake, CheckCircle2, Award, Ruler, HardHat, Leaf, HeartHandshake, ArrowRight } from "lucide-react";
import Link from "next/link";

import Image from "next/image";

const values = [
  {
    title: "Quality Without Compromise",
    description: "We hold ourselves to the highest standards of construction quality, using the right materials, methods, and tradespeople on every project.",
    Icon: Shield,
  },
  {
    title: "Safety Above All",
    description: "Workplace health and safety is non-negotiable. We maintain strict safety standards across every site to protect our team and clients.",
    Icon: Clock,
  },
  {
    title: "Reliability and Honesty",
    description: "We do what we say. Transparent communication, honest timelines, and accountability are central to how we operate.",
    Icon: Handshake,
  },
  {
    title: "Client Partnership",
    description: "We listen to our clients, keep them informed throughout the build, and ensure the finished result reflects their vision.",
    Icon: Users,
  },
];

export default function AboutPage() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-secondary">
        <Navbar />

        {/* Header */}
        <section className="relative pt-48 pb-32 overflow-hidden min-h-[60vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/home/story-hero.jpg"
              alt="About Tata Build Background"
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
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">About Our Company</span>
              <h1 className="text-5xl md:text-7xl font-outfit font-black text-white mb-8">
                Building with <span className="text-primary">Integrity</span>
              </h1>
              <div className="space-y-6">
                <p className="text-white/95 max-w-3xl mx-auto text-xl leading-relaxed font-semibold">
                  Tata Build Pty Ltd is a professional construction company based in Australia. Founded in 2023, we bring together experienced builders and project managers committed to excellence across both residential and commercial sectors.
                </p>
                <p className="text-white/95 max-w-3xl mx-auto text-xl leading-relaxed font-semibold">
                  Our new digital platform allows clients to seamlessly explore our full portfolio of completed projects, discover our diverse range of construction services, and easily engage with our team to bring their architectural visions to life. We believe in building strong foundations—both in our structures and in our client relationships.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl -z-10" />
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-accent/5">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:border-primary/30 transition-all">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-3xl font-outfit font-black text-white mb-4">Our Mission</h3>
                <p className="text-white/60 text-lg leading-relaxed">
                  To deliver exceptional construction services that exceed client expectations through innovative solutions, superior craftsmanship, and a commitment to safety and integrity in every project we undertake.
                </p>
              </div>
              <div className="bg-primary p-10 rounded-3xl shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                    <Handshake className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-outfit font-black text-secondary mb-4">Our Vision</h3>
                  <p className="text-secondary/80 text-lg leading-relaxed font-medium">
                    To be Australia's most trusted and respected construction partner, recognized for our collaborative approach, sustainable practices, and the lasting legacy of the structures we build.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/home/our-story.jpg"
                    alt="About Tata Build"
                    width={800}
                    height={600}
                    className="w-full h-auto opacity-80"
                  />
                </div>
                <div className="absolute -top-10 -left-10 bg-primary p-8 rounded-2xl hidden md:block shadow-2xl">
                  <span className="text-secondary text-5xl font-black block">2023</span>
                  <span className="text-secondary/70 font-bold uppercase tracking-widest text-xs">Established</span>
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-outfit font-black text-white mb-6">Our Journey</h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-1 bg-primary shrink-0" />
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">2023: Foundation</h4>
                      <p className="text-white/60">Tata Build Pty Ltd was founded with a vision to deliver quality construction services across Australia, building a reputation for craftsmanship and reliability.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-1 bg-primary shrink-0" />
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Expansion & Growth</h4>
                      <p className="text-white/60">Expanded our capabilities to cover a full range of residential and commercial construction services, from new builds and major renovations to structural repairs.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-1 bg-primary shrink-0" />
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Today</h4>
                      <p className="text-white/60">A trusted Australian construction company delivering projects on time, within budget, and to the highest standards for all our clients.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Capabilities */}
        <section className="section-padding bg-accent/5">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-outfit font-black text-white mb-8">Our <span className="text-primary">Team</span> Capabilities</h2>
                <p className="text-white/60 text-lg mb-10 leading-relaxed">
                  Our team covers the full scope of construction trades and management, ensuring every aspect of your build is handled by specialists.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Licensed Builders & Site Supervisors",
                    "Structural & Civil Construction",
                    "Project Management Specialists",
                    "Interior Fitout & Finishing",
                    "Concrete & Formwork Experts",
                    "Site Preparation & Earthworks",
                    "Design & Planning Advisory",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-white/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-center">
                    <h3 className="text-4xl font-black text-primary mb-2">10+</h3>
                    <p className="text-white/40 text-xs uppercase font-bold">Services</p>
                  </div>
                  <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-center">
                    <h3 className="text-4xl font-black text-primary mb-2">100%</h3>
                    <p className="text-white/40 text-xs uppercase font-bold">Safety</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-center">
                    <h3 className="text-4xl font-black text-primary mb-2">2023</h3>
                    <p className="text-white/40 text-xs uppercase font-bold">Launch</p>
                  </div>
                  <div className="bg-primary p-8 rounded-2xl text-center">
                    <h3 className="text-4xl font-black text-secondary mb-2">AU</h3>
                    <p className="text-secondary/70 text-xs uppercase font-bold">Market</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-outfit font-black text-white mb-6">Our Core Values</h2>
              <p className="text-white/50 max-w-2xl mx-auto text-lg">
                The principles that guide every brick we lay and every project we manage.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, i) => (
                <div key={i} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all group">
                  <value.Icon className="text-primary w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{value.title}</h3>
                  <p className="text-white/50 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-accent/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">The Tata Build Difference</span>
              <h2 className="text-4xl md:text-6xl font-outfit font-black text-white mb-6">
                Why Choose <span className="text-primary">Us</span>
              </h2>
              <p className="text-white/50 max-w-3xl mx-auto text-xl leading-relaxed">
                When you partner with Tata Build, you get more than a builder — you get a dedicated team that treats your project as their own.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  Icon: Ruler,
                  title: "Precision Engineering",
                  description: "Every measurement, every joint, every finish is executed with meticulous attention to detail. We never cut corners — precision is our standard.",
                },
                {
                  Icon: HardHat,
                  title: "Experienced Tradespeople",
                  description: "Our team comprises seasoned professionals with decades of combined experience across residential, commercial, and industrial construction.",
                },
                {
                  Icon: Clock,
                  title: "On-Time, On-Budget",
                  description: "We respect your time and investment. Our project management methodology ensures deadlines are met and budgets are strictly adhered to.",
                },
                {
                  Icon: Leaf,
                  title: "Sustainable Practices",
                  description: "We integrate environmentally responsible methods and materials wherever possible, building for today while protecting tomorrow.",
                },
                {
                  Icon: HeartHandshake,
                  title: "End-to-End Support",
                  description: "From initial consultation and design advisory through to final handover and aftercare, we are with you at every stage of the journey.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-primary/30 transition-all group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <item.Icon className="text-primary w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-white/50 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="section-padding">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">How We Work</span>
              <h2 className="text-4xl md:text-5xl font-outfit font-black text-white mb-6">Our Process</h2>
              <p className="text-white/50 max-w-2xl mx-auto text-lg">
                A streamlined approach that takes your project from concept to completion with clarity at every step.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Consultation", desc: "We listen to your goals, assess the site, and understand your budget and timeline requirements." },
                { step: "02", title: "Planning & Design", desc: "Our team develops detailed plans, secures permits, and finalizes material selections with you." },
                { step: "03", title: "Construction", desc: "Skilled tradespeople execute the build with daily oversight, quality checks, and regular progress updates." },
                { step: "04", title: "Handover", desc: "A thorough final inspection, defect-free handover, and ongoing aftercare support for your peace of mind." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="text-center group"
                >
                  <div className="text-7xl font-outfit font-black text-primary/20 group-hover:text-primary/40 transition-colors mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-white/50 leading-relaxed text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-12 md:p-20 rounded-[3rem] bg-primary relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:scale-150 transition-transform duration-1000" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-outfit font-black text-secondary mb-6">
                  Ready to Build Something Extraordinary?
                </h2>
                <p className="text-secondary/80 text-xl mb-10 font-medium leading-relaxed">
                  Whether you have a detailed plan or just an idea, our team is ready to bring your vision to life with precision, quality, and care.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform"
                  >
                    Connect with Us <ArrowRight size={20} />
                  </Link>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-secondary text-secondary px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-secondary hover:text-white transition-all"
                  >
                    View Our Work
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
