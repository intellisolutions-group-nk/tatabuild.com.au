"use client";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";

const contactDetails = [
  {
    title: "Our Location",
    detail: "Unit 5, 9 Station Street W, Parramatta NSW-2150",
    icon: MapPin,
    description: "Visit our headquarters to discuss your upcoming project in person.",
    action: "Get Directions",
    link: "https://www.google.com/maps/search/?api=1&query=Unit+5,+9+Station+Street+W,+Parramatta+NSW-2150"
  },
  {
    title: "Call Us",
    detail: "0410868133",
    icon: Phone,
    description: "Speak directly with our project consultants for a professional assessment.",
    action: "Call Now",
    link: "tel:0410868133"
  },
  {
    title: "Email Us",
    detail: "tatabuild26@gmail.com",
    icon: Mail,
    description: "Send us your plans or general inquiries for a detailed response.",
    action: "Send Email",
    link: "mailto:tatabuild26@gmail.com"
  }
];

export default function ContactPage() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-secondary">
        <Navbar />

        {/* Header */}
        <section className="relative pt-48 pb-32 overflow-hidden min-h-[50vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/home/contact-bg.jpg"
              alt="Contact Background"
              fill
              priority
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-transparent to-secondary/80" />
          </div>

          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
              <h1 className="text-5xl md:text-7xl font-outfit font-black text-white mb-8">
                Connect with <span className="text-primary">Tata Build</span>
              </h1>
              <p className="text-white/95 max-w-2xl mx-auto text-xl font-semibold">
                Experience excellence in construction. Contact our team today for professional advice and obligation-free assessments.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Cards Section */}
        <section className="pb-32 -mt-10 relative z-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {contactDetails.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white/5 border border-white/10 p-10 rounded-3xl hover:border-primary/30 transition-all duration-500 backdrop-blur-xl flex flex-col items-center text-center h-full"
                >
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary transition-all duration-500">
                    <item.icon size={32} className="text-primary group-hover:text-secondary transition-colors" />
                  </div>
                  
                  <h3 className="text-white text-2xl font-bold mb-4 font-outfit">{item.title}</h3>
                  <p className="text-white/40 mb-6 flex-grow">{item.description}</p>
                  
                  <div className="text-white font-bold text-lg mb-8 group-hover:text-primary transition-colors">
                    {item.detail}
                  </div>

                  <a 
                    href={item.link}
                    target={item.link.startsWith('http') ? "_blank" : undefined}
                    rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm group/btn"
                  >
                    {item.action}
                    <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
