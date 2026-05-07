"use client";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";
import { blogs } from "@/data/blogs";
import { motion } from "framer-motion";
import { User, ArrowLeft, Clock, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import FAQSection from "@/components/FAQSection";

export default function BlogPost() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-secondary flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-white mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-primary hover:underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-secondary">
        <Navbar />

        {/* Article Header */}
        <section className="relative pt-48 pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              priority
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary/60 to-secondary z-1" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary font-bold mb-12 hover:gap-4 transition-all uppercase tracking-widest text-sm"
            >
              <ArrowLeft size={20} />
              Back to Journal
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-primary text-secondary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                  {blog.category}
                </span>
                <div className="flex items-center gap-2 text-white/40 text-sm">
                  <Clock size={16} />
                  <span>5 min read</span>
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-outfit font-black text-white mb-10 leading-[1.1]">
                {blog.title}
              </h1>

              <div className="flex flex-wrap items-center gap-8 py-8 border-y border-white/10 text-white/60">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black">
                    {blog.author[0]}
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold">{blog.author}</p>
                    <p className="text-xs">Senior Project Manager</p>
                  </div>
                </div>
                <button className="ml-auto p-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-white">
                  <Share2 size={20} />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {blog.image && (
                <div className="relative aspect-video rounded-[2.5rem] overflow-hidden mb-16 shadow-2xl">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="prose prose-invert prose-xl max-w-none">
                {blog.content.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-white/70 leading-relaxed mb-8">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Specific FAQs */}
        {blog.faqs && blog.faqs.length > 0 && (
          <FAQSection
            title="Article FAQs"
            subtitle={`Common questions related to ${blog.title}`}
            faqs={blog.faqs}
          />
        )}

        <section className="pb-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-12 rounded-[3rem] bg-primary relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                <div className="relative z-10 text-center">
                  <h3 className="text-4xl font-outfit font-black text-secondary mb-6 italic">
                    Ready to start your journey?
                  </h3>
                  <p className="text-secondary/80 text-xl mb-10 max-w-2xl mx-auto font-medium">
                    Our team of specialists is here to discuss your vision and provide expert guidance for your next major project.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block bg-secondary text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform"
                  >
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
