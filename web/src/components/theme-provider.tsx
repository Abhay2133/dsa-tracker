/**
 * Theme Provider Component
 * 
 * Wrapper around next-themes to provide dark/light/system theme support.
 * This component should be used at the root level to enable theme functionality
 * throughout the application.
 * 
 * Features:
 * - System theme detection
 * - Manual theme switching
 * - Persistent theme selection
 * 
 * @component
 * @example
 * <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
 *   <App />
 * </ThemeProvider>
 */

'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
