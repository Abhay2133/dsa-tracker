/**
 * Sidebar Component
 * 
 * Navigation sidebar for the DSA Tracker application.
 * Features:
 * - Organized navigation sections (Navigation and Account)
 * - Active link highlighting based on current pathname
 * - Icons for all navigation items
 * - Responsive design optimizations
 * 
 * @component
 * @example
 * <Sidebar />
 */

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  BarChart3,
  Book,
  Building2,
  Home,
  List,
  PuzzleIcon as Problem,
  Settings,
  User,
} from 'lucide-react';

// Navigation items configuration for main features
const sidebarNavItems = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: Home,
  },
  {
    title: 'Problems',
    href: '/problems',
    icon: Problem,
  },
  {
    title: 'Lists',
    href: '/lists',
    icon: List,
  },
  {
    title: 'Companies',
    href: '/companies',
    icon: Building2,
  },
  {
    title: 'Analytics',
    href: '/analytics',
    icon: BarChart3,
  },
  {
    title: 'Study Plan',
    href: '/study-plan',
    icon: Book,
  },
];

// Account related navigation items
const accountNavItems = [
  {
    title: 'Profile',
    href: '/profile',
    icon: User,
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: Settings,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="pb-12 w-64">
      <div className="space-y-4 py-4">
        
        {/* Main Navigation Section */}
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Navigation
          </h2>
          <div className="space-y-1">
            {sidebarNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                  pathname === item.href
                    ? 'bg-accent text-accent-foreground'
                    : 'transparent'
                )}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Account Navigation Section */}
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Account
          </h2>
          <div className="space-y-1">
            {accountNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                  pathname === item.href
                    ? 'bg-accent text-accent-foreground'
                    : 'transparent'
                )}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
