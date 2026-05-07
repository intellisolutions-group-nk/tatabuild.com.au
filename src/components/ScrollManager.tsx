"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import ScrollToTop from "@/components/ScrollToTop";

export default function ScrollManager({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Reset scroll to top on every route change
    window.scrollTo(0, 0);
    
    // Force scroll to top on page reload/hard refresh
    if (typeof window !== "undefined" && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, [pathname]);

  return (
    <>
      {children}
      <ScrollToTop />
    </>
  );
}
