import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import ScrollManager from "@/components/ScrollManager";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const metadata: Metadata = {
  title: "Tata Build Pty Ltd | Excellence in Australian Construction",
  description: "Tata Build Pty Ltd delivers high-quality residential and commercial construction services across Australia with a commitment to craftsmanship, safety, and client satisfaction.",
  keywords: "Construction Australia, Residential Builder, Commercial Construction, Renovations, Project Management, Tata Build",
  icons: {
    icon: "/logo/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.variable, outfit.variable, "font-inter antialiased")}>
        <ScrollManager>
          {children}
        </ScrollManager>
      </body>
    </html>
  );
}
