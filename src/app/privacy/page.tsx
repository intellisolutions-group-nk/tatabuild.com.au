"use client";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function PrivacyPage() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-secondary">
        <Navbar />

        <section className="relative pt-48 pb-20 overflow-hidden min-h-[60vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/home/privacy-bg.jpg"
              alt="Privacy Background"
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
                  <ShieldCheck className="text-primary" size={32} />
                </div>
                <h1 className="text-4xl md:text-6xl font-outfit font-black text-white">
                  Privacy <span className="text-primary">Policy</span>
                </h1>
              </div>

              <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 prose prose-invert max-w-none">
                <p className="text-white/60 text-lg leading-relaxed mb-8">
                  Tata Build Pty Ltd is committed to protecting your privacy and ensuring the security of your personal information in accordance with Australian privacy legislation.
                </p>

                <h2 className="text-2xl font-outfit font-bold text-white mt-12 mb-6">Data Collection</h2>
                <p className="text-white/50 text-lg mb-8">
                  We collect personal information through our website (tatabuild.com) and direct client engagement to provide you with construction services and communication.
                </p>

                <h2 className="text-2xl font-outfit font-bold text-white mt-12 mb-6">Data Usage</h2>
                <p className="text-white/50 text-lg mb-8">
                  Information collected is used for project enquiries, quotes, client communication, service delivery, and internal record-keeping.
                </p>

                <h2 className="text-2xl font-outfit font-bold text-white mt-12 mb-6">Data Security</h2>
                <p className="text-white/50 text-lg mb-8">
                  We implement appropriate security measures to protect your personal information from unauthorised access, disclosure, or misuse.
                </p>

                <h2 className="text-2xl font-outfit font-bold text-white mt-12 mb-6">Third-Party Disclosure</h2>
                <p className="text-white/50 text-lg mb-8">
                  We do not sell your personal information to third parties. We may share information with subcontractors and suppliers only where necessary for the delivery of your construction project.
                </p>

                <h2 className="text-2xl font-outfit font-bold text-white mt-12 mb-6">Australian Privacy Act</h2>
                <p className="text-white/50 text-lg mb-8">
                  Our privacy practices comply with the Australian Privacy Act 1988 and the Australian Privacy Principles (APPs).
                </p>

                <div className="mt-16 p-8 bg-primary/5 rounded-2xl border border-primary/20">
                  <p className="text-white/80 font-medium italic m-0">
                    At Tata Build Pty Ltd, we respect your privacy and are committed to handling your personal information responsibly and in accordance with Australian law.
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
