"use client";
import Link from "next/link";
import Image from "next/image";
import { HardHat, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { services } from "@/data/servicesData";

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo/logo.png"
                alt="Tata Build Logo"
                width={160}
                height={70}
                priority
                className="w-[150px] h-auto object-contain"
              />
            </Link>
            <p className="text-white/50 leading-relaxed text-sm">
              Established in 2023, Tata Build Pty Ltd is a leading Australian construction company delivering quality residential and commercial outcomes.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog & Insights</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
              <ul className="space-y-4 text-white/40 text-sm">
                {services.slice(0, 5).map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`} className="hover:text-primary transition-colors flex items-center gap-2 group/link relative">
                      <ArrowRight size={12} className="absolute -left-5 opacity-0 group-hover/link:opacity-100 group-hover/link:-translate-x-1 transition-all shrink-0" />
                      <span className="transition-transform whitespace-nowrap">{service.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              {services.length > 5 && (
                <ul className="space-y-4 text-white/40 text-sm">
                  {services.slice(5).map((service) => (
                    <li key={service.slug}>
                      <Link href={`/services/${service.slug}`} className="hover:text-primary transition-colors flex items-center gap-2 group/link relative">
                        <ArrowRight size={12} className="absolute -left-5 opacity-0 group-hover/link:opacity-100 group-hover/link:-translate-x-1 transition-all shrink-0" />
                        <span className="transition-transform whitespace-nowrap">{service.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Horizontal Contact & Support Bar */}
        <div className="pt-10 pb-8 border-t border-white/5 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 text-white/40 text-sm">
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-primary shrink-0" />
              <span>tatabuild26@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-primary shrink-0" />
              <span>0410868133</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-primary shrink-0" />
              <span>Unit 5, 9 Station Street W, Parramatta NSW-2150</span>
            </div>
          </div>
          
          <ul className="flex flex-wrap gap-6 text-white/40 text-sm">
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-sm">
            &copy; 2026 Tata Build Pty Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            {/* Social media links can be added here if needed */}
          </div>
        </div>
      </div>
    </footer>
  );
}

