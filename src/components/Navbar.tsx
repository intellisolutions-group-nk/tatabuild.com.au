"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, HardHat, ChevronDown, ArrowUpRight } from "lucide-react";
import { services } from "@/data/servicesData";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Journal", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showAllServices, setShowAllServices] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset showAllServices when dropdown closes
  useEffect(() => {
    if (!isDropdownOpen) {
      const timer = setTimeout(() => setShowAllServices(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isDropdownOpen]);

  const displayedServices = showAllServices ? services : services.slice(0, 5);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-secondary/90 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          {/* <div className="bg-primary p-2 rounded-lg group-hover:rotate-12 transition-transform">
            <HardHat className="text-secondary w-6 h-6" />
          </div> */}
          <Image
            src="/logo/Logo.png"
            alt="logo"
            width={140}
            height={60}
            priority
            className="w-[140px] h-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative group"
              onMouseEnter={() => link.hasDropdown && setIsDropdownOpen(true)}
              onMouseLeave={() => link.hasDropdown && setIsDropdownOpen(false)}
            >
              <Link
                href={link.href}
                className="text-white/80 hover:text-primary font-medium transition-colors flex items-center gap-1 py-2"
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />}
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />

              {/* Dropdown Menu */}
              {link.hasDropdown && (
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-secondary border border-white/10 rounded-2xl shadow-2xl overflow-hidden py-4 z-[60]"
                    >
                      <div className="flex flex-col">
                        {displayedServices.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="px-6 py-3 text-sm text-white/70 hover:text-primary hover:bg-white/5 transition-all flex items-center justify-between group/item"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            {service.title}
                            <ArrowUpRight size={14} className="opacity-0 group-hover/item:opacity-100 transition-opacity" />
                          </Link>
                        ))}

                        {!showAllServices && services.length > 5 && (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setShowAllServices(true);
                            }}
                            className="mt-2 mx-4 mb-2 py-3 px-4 bg-primary/10 border border-primary/20 rounded-xl text-primary font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-secondary transition-all flex items-center justify-center gap-2"
                          >
                            Show More Services
                            <ChevronDown size={14} />
                          </button>
                        )}

                        {showAllServices && (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setShowAllServices(false);
                            }}
                            className="mt-2 mx-4 mb-2 py-2 px-4 text-white/30 hover:text-primary text-[10px] uppercase tracking-widest transition-all"
                          >
                            Show Less
                          </button>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-secondary shadow-2xl md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xl text-white hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="btn-primary text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Inquire Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
