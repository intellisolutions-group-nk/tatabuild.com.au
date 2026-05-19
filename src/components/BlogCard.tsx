"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { User, ArrowRight } from "lucide-react";
import { Blog } from "@/data/blogs";

interface BlogCardProps {
  blog: Blog;
  index: number;
}

export default function BlogCard({ blog, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-all duration-500 hover:border-primary/30 flex flex-col h-full"
    >
      <Link href={`/blog/${blog.slug}`} className="relative h-64 overflow-hidden block">
        {blog.image ? (
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <span className="text-primary/40 font-black text-2xl uppercase tracking-widest">Tata Build Blog</span>
          </div>
        )}
        <div className="absolute top-6 left-6">
          <span className="bg-primary text-secondary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
            {blog.category}
          </span>
        </div>
      </Link>

      <div className="p-8 flex flex-col flex-1">
        <Link href={`/blog/${blog.slug}`}>
          <h3 className="text-2xl font-outfit font-bold text-white mb-4 group-hover:text-primary transition-colors line-clamp-2">
            {blog.title}
          </h3>
        </Link>
        <p className="text-white/50 mb-8 line-clamp-3 leading-relaxed">
          {blog.description}
        </p>

        <div className="mt-auto">
          <Link
            href={`/blog/${blog.slug}`}
            className="inline-flex items-center gap-3 text-primary font-bold group/btn hover:gap-5 transition-all"
          >
            Read Article
            <ArrowRight size={20} className="transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
