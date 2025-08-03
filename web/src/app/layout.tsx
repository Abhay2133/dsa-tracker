/**
 * Root Layout Component
 * 
 * The root layout for the entire DSA Tracker application.
 * This component wraps all pages and provides global functionality.
 * 
 * Features:
 * - Font loading and configuration (Geist Sans and Mono)
 * - Theme provider for dark/light mode support
 * - Toast notifications setup
 * - Global metadata and SEO configuration
 * 
 * @layout
 * @route Root layout for all pages
 */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

// Font configuration for Geist Sans
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Font configuration for Geist Mono (code/monospace)
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO and metadata configuration
export const metadata: Metadata = {
  title: "DSA Tracker - Track Your Problem Solving Progress",
  description: "A comprehensive web application for tracking Data Structures and Algorithms problem-solving progress.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Theme Provider - Enables dark/light/system theme support */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Main Application Content */}
          {children}
          
          {/* Global Toast Notifications */}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
