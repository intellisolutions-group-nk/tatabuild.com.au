"use client";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";
import { blogs } from "@/data/blogs";
import BlogCard from "@/components/BlogCard";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BlogPage() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-secondary">
        <Navbar />

        {/* Blog Hero Section */}
        <section className="relative pt-48 pb-32 overflow-hidden min-h-[60vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/blog/blog-residential-guide.png"
              alt="Tata Build Journal"
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
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Journal</span>
              <h1 className="text-6xl md:text-8xl font-outfit font-black text-white mb-8 tracking-tight">
                Our <span className="text-primary">Journal</span>
              </h1>
              <p className="text-white/95 text-xl md:text-2xl leading-relaxed font-semibold max-w-2xl mx-auto">
                Deep dives into construction excellence, project management strategies, and the future of Australian building standards.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Listing Section */}
        <section className="pb-32 relative z-10 -mt-10">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, i) => (
                <BlogCard key={blog.slug} blog={blog} index={i} />
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
