/**
 * Protected Route Component
 * 
 * Higher-order component that wraps pages requiring authentication.
 * Features:
 * - Authentication state checking
 * - Automatic redirect to login for unauthenticated users
 * - Loading states while checking authentication
 * - Support for different redirect URLs
 * - Role-based access control (optional)
 * 
 * @component
 * @example
 * // Wrap a page component
 * export default function DashboardPage() {
 *   return (
 *     <ProtectedRoute>
 *       <div>Dashboard content</div>
 *     </ProtectedRoute>
 *   );
 * }
 * 
 * // With custom redirect
 * <ProtectedRoute redirectTo="/onboarding" requiredRole="admin">
 *   <AdminPanel />
 * </ProtectedRoute>
 */

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';

/**
 * Mock user type - replace with actual user type from Firebase
 */
interface User {
  id: string;
  email: string;
  name: string;
  role?: string;
  emailVerified: boolean;
}

/**
 * Protected Route Props
 */
interface ProtectedRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
  requiredRole?: string;
  requireEmailVerification?: boolean;
  loadingComponent?: React.ReactNode;
}

/**
 * Mock authentication hook - replace with actual Firebase auth hook
 */
const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with actual Firebase auth state listener
    const checkAuthState = async () => {
      try {
        // Simulate auth check
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock authenticated user - replace with actual auth logic
        const mockUser: User = {
          id: '1',
          email: 'user@example.com',
          name: 'John Doe',
          role: 'user',
          emailVerified: true,
        };
        
        // Simulate different auth states
        const isAuthenticated = true;
        setUser(isAuthenticated ? mockUser : null);
        
      } catch (error) {
        console.error('Auth check error:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuthState();
  }, []);

  return { user, loading };
};

/**
 * Default loading component
 */
function DefaultLoadingComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardContent className="pt-6">
          <div className="space-y-4">
            {/* Loading Spinner */}
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
            
            {/* Loading Text */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Checking authentication...
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/**
 * Protected Route Component
 */
export function ProtectedRoute({
  children,
  redirectTo = '/login',
  requiredRole,
  requireEmailVerification = false,
  loadingComponent,
}: ProtectedRouteProps) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      // User is not authenticated, redirect to login
      setRedirecting(true);
      router.push(redirectTo);
    }
  }, [user, loading, router, redirectTo]);

  useEffect(() => {
    if (user && requiredRole && user.role !== requiredRole) {
      // User doesn't have required role
      setRedirecting(true);
      router.push('/unauthorized');
    }
  }, [user, requiredRole, router]);

  useEffect(() => {
    if (user && requireEmailVerification && !user.emailVerified) {
      // User's email is not verified
      setRedirecting(true);
      router.push('/verify-email');
    }
  }, [user, requireEmailVerification, router]);

  // Show loading state while checking authentication
  if (loading) {
    return loadingComponent || <DefaultLoadingComponent />;
  }

  // Show loading state while redirecting
  if (redirecting) {
    return loadingComponent || <DefaultLoadingComponent />;
  }

  // User is not authenticated
  if (!user) {
    return null; // Will redirect in useEffect
  }

  // User doesn't have required role
  if (requiredRole && user.role !== requiredRole) {
    return null; // Will redirect in useEffect
  }

  // User's email is not verified
  if (requireEmailVerification && !user.emailVerified) {
    return null; // Will redirect in useEffect
  }

  // User is authenticated and authorized, render children
  return <>{children}</>;
}

/**
 * HOC version of ProtectedRoute for easier wrapping
 */
export function withProtectedRoute<P extends object>(
  Component: React.ComponentType<P>,
  options?: Omit<ProtectedRouteProps, 'children'>
) {
  return function ProtectedComponent(props: P) {
    return (
      <ProtectedRoute {...options}>
        <Component {...props} />
      </ProtectedRoute>
    );
  };
}

/**
 * Hook to get current user in protected components
 */
export function useCurrentUser() {
  const { user, loading } = useAuth();
  return { user, loading };
}
