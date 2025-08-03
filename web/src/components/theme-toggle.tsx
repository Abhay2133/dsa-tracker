/**
 * Theme Toggle Component
 * 
 * Interactive theme switcher that allows users to toggle between light, dark, and system themes.
 * Features animated icons and a dropdown menu for theme selection.
 * 
 * Features:
 * - Animated sun/moon icons
 * - Dropdown with light, dark, and system options
 * - Accessible design with screen reader support
 * - Smooth transitions between themes
 * 
 * @component
 * @example
 * <ThemeToggle />
 */

'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      {/* Theme Toggle Button with Animated Icons */}
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {/* Sun icon - visible in light mode, hidden in dark mode */}
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          {/* Moon icon - hidden in light mode, visible in dark mode */}
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      
      {/* Theme Selection Dropdown */}
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
