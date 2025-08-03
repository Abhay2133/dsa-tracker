/**
 * Layout Components
 * 
 * Reusable layout components for different page types in the DSA Tracker application.
 * 
 * MainLayout: Standard layout with header and footer
 * DashboardLayout: Layout with header, sidebar, and footer for dashboard pages
 * 
 * @component
 * @example
 * <MainLayout>
 *   <YourPageContent />
 * </MainLayout>
 * 
 * <DashboardLayout>
 *   <YourDashboardContent />
 * </DashboardLayout>
 */

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

/**
 * MainLayout - Standard page layout with header and footer
 * Used for: Landing pages, auth pages, static content
 */
export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Header Navigation */}
      <Header />
      
      {/* Main Content Area */}
      <main className="flex-1">{children}</main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

interface DashboardLayoutProps {
  children: React.ReactNode;
}

/**
 * DashboardLayout - Layout with sidebar for authenticated dashboard pages
 * Used for: Dashboard, problems, lists, analytics, etc.
 */
export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Header Navigation */}
      <Header />
      
      {/* Main Content with Sidebar */}
      <div className="flex-1 flex">
        {/* Sidebar - Hidden on mobile, visible on large screens */}
        <aside className="hidden lg:flex w-64 flex-col border-r bg-background">
          {/* Note: Sidebar component will be imported here when needed for dashboard pages */}
        </aside>
        
        {/* Page Content Area */}
        <main className="flex-1 p-6">{children}</main>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
