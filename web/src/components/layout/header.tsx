/**
 * Header Component
 *
 * Main navigation header for the DSA Tracker application.
 * Features:
 * - Responsive design with mobile hamburger menu
 * - Dark/light theme toggle
 * - User dropdown menu with profile and settings
 * - Primary navigation links (Dashboard, Problems, Lists, Companies)
 *
 * @component
 * @example
 * <Header />
 */

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Code, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { UserMenu } from '@/components/layout/user-menu';
import { ThemeToggle } from '@/components/theme-toggle';

/**
 * Navigation Links Data
 * Centralized navigation configuration for reuse across desktop and mobile layouts
 */
const navigationLinks = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/problems', label: 'Problems' },
  { href: '/lists', label: 'Lists' },
  { href: '/companies', label: 'Companies' },
];

/**
 * Navigation Links Component
 * Renders navigation links with consistent styling and behavior
 *
 * @param {Object} props - Component props
 * @param {string} props.className - Additional CSS classes for the nav container
 * @param {string} props.linkClassName - Additional CSS classes for individual links
 * @param {Function} props.onLinkClick - Optional callback when a link is clicked (useful for mobile menu closing)
 */
interface NavigationLinksProps {
  className?: string;
  linkClassName?: string;
  onLinkClick?: () => void;
}

function NavigationLinks({
  className = '',
  linkClassName = '',
  onLinkClick,
}: NavigationLinksProps) {
  return (
    <nav className={className}>
      {navigationLinks.map((link) => (
        <Link
          key={link.href}
          className={`transition-colors hover:text-foreground/80 text-foreground/60 ${linkClassName}`}
          href={link.href}
          onClick={onLinkClick}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

/**
 * Mobile Sidebar Component
 * Renders a slide-out navigation panel for mobile devices
 *
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Whether the sidebar is open
 * @param {Function} props.onClose - Callback to close the sidebar
 */
interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  return (
    <>
      {/* Overlay - Semi-transparent background */}
      {isOpen && <div className="fixed inset-0 z-[60] bg-black/50 md:hidden" onClick={onClose} />}

      {/* Sidebar Panel */}
      <div
        className={`fixed left-0 top-0 z-[60] h-full w-64 bg-background border-r transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <Link className="flex items-center space-x-2" href="/" onClick={onClose}>
            <Code className="h-6 w-6" />
            <span className="font-bold">DSA Tracker</span>
          </Link>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
            <X className="h-4 w-4" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>

        {/* Sidebar Navigation */}
        <div className="p-4">
          <NavigationLinks
            className="flex flex-col space-y-2"
            linkClassName="block px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground"
            onLinkClick={onClose}
          />
        </div>

        {/* Sidebar Footer - Theme Toggle and Auth */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center justify-between p-3 border-t">
            <span className="text-sm text-muted-foreground">Theme</span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={isMobileMenuOpen} onClose={handleMenuClose} />

      {/* Main Header Container - Sticky positioning with backdrop blur */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:px-16">
        <div className="container flex h-14 items-center">
          {/* Desktop Navigation Section */}
          <div className="mr-4 hidden md:flex">
            {/* Logo and Brand */}
            <Link className="mr-6 flex items-center space-x-2 gap-3" href="/">
              <Code className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block whitespace-nowrap">
                DSA Tracker
              </span>
            </Link>

            {/* Primary Navigation Links */}
            <NavigationLinks className="flex items-center space-x-6 text-sm font-medium" />
          </div>

          {/* Mobile Menu Button - Hidden on desktop */}
          <Button
            variant="ghost"
            className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            onClick={handleMenuToggle}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>

          {/* Right Section - Mobile Logo and User Controls */}
          <div className="flex items-center justify-between w-full">
            {/* Mobile Logo - Hidden on desktop */}
            <div className="flex-1 md:hidden whitespace-nowrap">
              <Link className="flex items-center space-x-2" href="/">
                <Code className="h-6 w-6" />
                <span className="font-bold">DSA Tracker</span>
              </Link>
            </div>
            <div className="flex-1" />
            {/* User Controls Section */}
            <UserMenu />
          </div>
        </div>
      </header>
    </>
  );
}
