"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { services } from "@/data/servicesData";
import { blogs } from "@/data/blogs";
import { projects } from "@/data/projects";
import BlogCard from "@/components/BlogCard";
import { MapPin, Tag, Newspaper } from "lucide-react";





export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-secondary">
        <Navbar />
        <Hero />

        {/* About Section Snippet */}
        <section className="section-padding bg-accent/5 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
                <h2 className="text-4xl md:text-5xl font-outfit font-black text-white mb-8">
                  A Legacy of <span className="text-primary">Craftsmanship</span> and Trust
                </h2>
                <p className="text-white/60 text-lg mb-8 leading-relaxed">
                  Tata Build Pty Ltd is a professional construction company based in Australia. Established in 2023, we deliver quality residential and commercial construction services with a commitment to craftsmanship, safety, and client satisfaction.
                </p>
                <div className="grid grid-cols-2 gap-8 mb-10">
                  <div>
                    <h4 className="text-3xl font-outfit font-bold text-primary mb-2">2023</h4>
                    <p className="text-white/40 text-sm uppercase tracking-wider">Established</p>
                  </div>
                  <div>
                    <h4 className="text-3xl font-outfit font-bold text-primary mb-2">100%</h4>
                    <p className="text-white/40 text-sm uppercase tracking-wider">Safety Focus</p>
                  </div>
                </div>
                <Link href="/about">
                  <button className="btn-outline">Learn More About Us</button>
                </Link>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/5">
                  <Image
                    src="/images/home/feature-bg.jpg"
                    alt="Construction Site"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-2xl -z-0 animate-pulse" />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section-padding bg-secondary/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">The Tata Build Advantage</span>
              <h2 className="text-4xl md:text-6xl font-outfit font-black text-white mb-6">
                Why Choose <span className="text-primary">Tata Build</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Quality Craftsmanship", desc: "Every build reflects our dedication to superior workmanship, using quality materials and proven methods." },
                { title: "On Time, On Budget", desc: "Rigorous project management ensures your project is delivered to schedule and within the agreed budget." },
                { title: "Safety First", desc: "A non-negotiable commitment to workplace health and safety across every site, protecting everyone." },
              ].map((item, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all group">
                  <h3 className="text-xl font-outfit font-bold text-white mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="section-padding bg-secondary overflow-hidden relative">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 p-12 rounded-[3rem] relative overflow-hidden group"
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all" />
                <h3 className="text-3xl font-outfit font-black text-white mb-6 uppercase tracking-widest">Our <span className="text-primary">Mission</span></h3>
                <p className="text-white/60 text-xl leading-relaxed italic">
                  "At Tata Build Pty Ltd, our mission is to deliver exceptional construction outcomes for our clients through skilled craftsmanship, reliable project management, and an unwavering commitment to quality and safety. We build not just structures, but lasting relationships founded on trust and excellence."
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-primary p-12 rounded-[3rem] relative overflow-hidden group"
              >
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/20 rounded-full blur-3xl group-hover:bg-white/30 transition-all" />
                <h3 className="text-3xl font-outfit font-black text-secondary mb-6 uppercase tracking-widest">Our <span className="text-white">Vision</span></h3>
                <p className="text-secondary/80 text-xl leading-relaxed font-bold">
                  "Our vision is to be a trusted and leading construction company in Australia, recognised for the quality of our builds, the professionalism of our team, and the satisfaction of every client we serve."
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-secondary" id="services">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Comprehensive Solutions</span>
              <h2 className="text-4xl md:text-6xl font-outfit font-black text-white mb-6">
                Our Construction <span className="text-primary">Services</span>
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto text-lg">
                Our construction services include residential construction, commercial construction, renovations and extensions, and more.
              </p>
            </div>

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
            <div className="text-center mt-12">
              {/* <Link href="/services">
                <button className="btn-primary">View All Services</button>
              </Link> */}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-secondary/30 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">The Tata Build Way</span>
              <h2 className="text-4xl md:text-6xl font-outfit font-black text-white mb-6">
                Our Construction <span className="text-primary">Process</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-12" />
              {[
                { step: "01", title: "Consultation", desc: "Initial meeting to understand your vision, site requirements, and budget expectations." },
                { step: "02", title: "Planning & Permits", desc: "Detailed quoting, contract execution, and managing all required Australian building approvals." },
                { step: "03", title: "Construction", desc: "Skilled execution of your build with regular progress updates and rigorous safety management." },
                { step: "04", title: "Handover", desc: "Final quality inspections and handover of your completed project to the highest standards." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative z-10 bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-primary/50 transition-all group"
                >
                  <span className="text-6xl font-outfit font-black text-primary/20 group-hover:text-primary transition-colors block mb-4">
                    {item.step}
                  </span>
                  <h3 className="text-2xl font-outfit font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-white/40 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Projects Section */}
        <section className="section-padding bg-secondary">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Portfolio</span>
                <h2 className="text-4xl md:text-6xl font-outfit font-black text-white mb-6">
                  Featured <span className="text-primary">Projects</span>
                </h2>
                <p className="text-white/50 text-lg">
                  Explore our latest residential and commercial builds across Australia, showcasing our dedication to quality.
                </p>
              </div>
              <Link href="/portfolio" className="group flex items-center gap-3 text-primary font-bold text-lg mb-4">
                View All Projects
                <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:text-secondary transition-all">
                  <Tag size={20} />
                </div>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {projects.slice(0, 3).map((project, i) => (
                <Link key={project.slug} href={`/portfolio/${project.slug}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
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
                      <span className="bg-primary text-secondary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-outfit font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-white/60 flex items-center gap-2">
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

        {/* Blog Section */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-primary/5 -z-10" />
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Journal</span>
                <h2 className="text-4xl md:text-5xl font-outfit font-black text-white mb-6">
                  Latest from <span className="text-primary">Industry</span> Insights
                </h2>
                <p className="text-white/50 text-lg">
                  Stay updated with the latest trends, guides, and news from the Australian construction landscape.
                </p>
              </div>
              <Link href="/blog" className="group flex items-center gap-3 text-primary font-bold text-lg mb-4">
                View All Articles
                <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:text-secondary transition-all">
                  <Newspaper size={20} />
                </div>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.slice(0, 3).map((blog, i) => (
                <BlogCard key={blog.slug} blog={blog} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-outfit font-black text-secondary mb-8">
              Ready to Start Your Project?
            </h2>
            <p className="text-secondary/80 text-xl mb-12 max-w-2xl mx-auto font-medium">
              Get in touch today for an obligation-free consultation. Let&apos;s build something exceptional together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/contact">
                <button className="bg-secondary text-white py-4 px-10 rounded-full font-black text-lg hover:bg-secondary/90 transition-all shadow-xl">
                  Contact Us Now
                </button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
