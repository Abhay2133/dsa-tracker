/**
 * User Menu Component
 * 
 * Displays authentication-aware user interface in the header.
 * Features:
 * - Shows login/signup buttons for unauthenticated users
 * - Shows user dropdown menu for authenticated users
 * - Responsive design with mobile-specific layouts
 * - Theme toggle integration
 * 
 * @component
 * @example
 * <UserMenu />
 */

'use client';

import Link from 'next/link';
import { LogIn, UserPlus, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

/**
 * Mock user type - replace with actual user type from Firebase
 */
interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

/**
 * Mock authentication hook - replace with actual Firebase auth hook
 */
const useAuth = () => {
  // TODO: Replace with actual Firebase auth state
  // For now, simulate different auth states for development
  // Toggle this value to test different states: true = signed in, false = signed out
  const isAuthenticated = true; // Change this to test different states
  
  const user: User | null = isAuthenticated ? {
    id: '1',
    email: 'john.doe@example.com',
    name: 'John Doe',
    avatar: '',
  } : null;

  const signOut = async () => {
    // TODO: Implement Firebase sign out
    console.log('Signing out...');
  };

  return { user, signOut };
};

/**
 * User Menu Component
 */
export function UserMenu() {
  const { user, signOut } = useAuth();

  if (!user) {
    // Unauthenticated state - show login/signup buttons
    return (
      <div className="flex items-center space-x-2">
        {/* Theme Toggle */}
        <ThemeToggle />
        
        {/* Authentication Buttons */}
        <div className="hidden sm:flex items-center space-x-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">
              <LogIn className="h-4 w-4 mr-2" />
              Sign In
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/signup">
              <UserPlus className="h-4 w-4 mr-2" />
              Sign Up
            </Link>
          </Button>
        </div>
        
        {/* Mobile Authentication Buttons */}
        <div className="sm:hidden flex items-center space-x-1">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/login">
              <LogIn className="h-4 w-4" />
              <span className="sr-only">Sign In</span>
            </Link>
          </Button>
          <Button size="icon" asChild>
            <Link href="/signup">
              <UserPlus className="h-4 w-4" />
              <span className="sr-only">Sign Up</span>
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  // Authenticated state - show user dropdown menu
  return (
    <div className="flex items-center space-x-2">
      {/* Theme Toggle */}
      <ThemeToggle />
      
      {/* User Menu Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon"
            className="h-9 w-9"
          >
            <User className="h-5 w-5" />
            <span className="sr-only">User menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          {/* User Info */}
          <div className="px-2 py-1.5">
            <p className="text-sm font-medium">{user.name}</p>
            <p className="text-xs text-muted-foreground">{user.email}</p>
          </div>
          <DropdownMenuSeparator />
          
          {/* Menu Items */}
          <DropdownMenuItem asChild>
            <Link href="/settings/profile" className="cursor-pointer">
              Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/dashboard" className="cursor-pointer">
              Dashboard
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/settings" className="cursor-pointer">
              Settings
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem 
            className="cursor-pointer text-destructive focus:text-destructive"
            onClick={signOut}
          >
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
