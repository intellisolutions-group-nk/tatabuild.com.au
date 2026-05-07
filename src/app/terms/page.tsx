"use client";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import Image from "next/image";

export default function TermsPage() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-secondary">
        <Navbar />

        <section className="relative pt-48 pb-20 overflow-hidden min-h-[60vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/home/terms-bg.jpg"
              alt="Terms Background"
              fill
              priority
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-transparent to-secondary/80" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <FileText className="text-primary" size={32} />
                </div>
                <h1 className="text-4xl md:text-6xl font-outfit font-black text-white">
                  Terms of <span className="text-primary">Service</span>
                </h1>
              </div>

              <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 prose prose-invert max-w-none">
                <p className="text-white/60 text-lg leading-relaxed mb-8">
                  These terms and conditions govern your use of the Tata Build Pty Ltd website and our construction services.
                </p>

                <h2 className="text-2xl font-outfit font-bold text-white mt-12 mb-6">Website Usage</h2>
                <p className="text-white/50 text-lg mb-8">
                  By accessing our website, you agree to comply with these terms of service. All content including text and project photography is the property of Tata Build Pty Ltd.
                </p>

                <h2 className="text-2xl font-outfit font-bold text-white mt-12 mb-6">Construction Contracts</h2>
                <p className="text-white/50 text-lg mb-8">
                  All construction projects and services provided by Tata Build Pty Ltd are governed by a separate formal construction contract agreed upon with the client prior to commencement of any work.
                </p>

                <h2 className="text-2xl font-outfit font-bold text-white mt-12 mb-6">Quotes and Proposals</h2>
                <p className="text-white/50 text-lg mb-8">
                  Quotes and proposals provided by Tata Build Pty Ltd are valid for the period stated and are subject to formal contract execution before work commences.
                </p>

                <h2 className="text-2xl font-outfit font-bold text-white mt-12 mb-6">Liability</h2>
                <p className="text-white/50 text-lg mb-8">
                  Our liability in connection with construction services is governed by the terms of the applicable construction contract and relevant Australian consumer and building legislation.
                </p>

                <h2 className="text-2xl font-outfit font-bold text-white mt-12 mb-6">Governing Law</h2>
                <p className="text-white/50 text-lg mb-8">
                  These terms are governed by the laws of Australia and the applicable state or territory in which the construction project is located.
                </p>

                <div className="mt-16 p-8 bg-primary/5 rounded-2xl border border-primary/20">
                  <p className="text-white/80 font-medium italic m-0">
                    The terms of service outline the rules for using our website and the framework for engaging Tata Build Pty Ltd for construction services.
                  </p>
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
