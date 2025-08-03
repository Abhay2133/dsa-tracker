/**
 * Footer Component
 * 
 * Application footer for the DSA Tracker.
 * Features:
 * - Brand identity with logo
 * - Credit and source code links
 * - Social media links
 * - Responsive design for mobile and desktop
 * 
 * @component
 * @example
 * <Footer />
 */

import Link from 'next/link';
import { Code, Github, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        
        {/* Brand and Credits Section */}
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          {/* Logo */}
          <Code className="h-6 w-6" />
          
          {/* Credits and Links */}
          <p className="text-center text-sm leading-loose md:text-left">
            Built by{' '}
            <Link
              href="#"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              DSA Tracker Team
            </Link>
            . The source code is available on{' '}
            <Link
              href="#"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </Link>
            .
          </p>
        </div>
        
        {/* Social Links Section */}
        <div className="flex items-center space-x-4">
          {/* GitHub Link */}
          <Link href="#" target="_blank" rel="noreferrer">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          
          {/* Twitter Link */}
          <Link href="#" target="_blank" rel="noreferrer">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
