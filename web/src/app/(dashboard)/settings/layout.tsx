/**
 * Settings Layout Component
 * 
 * Layout wrapper for all settings pages with navigation tabs.
 * Provides consistent navigation between different settings sections.
 * 
 * @layout
 * @route /settings/*
 */

'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProtectedRoute } from '@/components/auth/protected-route';
import { MainLayout } from '@/components/layout/main-layout';

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  
  // Extract current tab from pathname
  const currentTab = pathname.split('/').pop() || 'profile';
  
  // Tab configuration with titles and descriptions
  const tabConfig = {
    profile: {
      title: 'Profile Settings',
      description: 'Manage your profile information and personal details'
    },
    account: {
      title: 'Account Settings', 
      description: 'Manage your account settings and preferences'
    },
    notifications: {
      title: 'Notification Settings',
      description: 'Configure how you want to receive notifications'
    },
    security: {
      title: 'Security Settings',
      description: 'Manage your account security and privacy'
    }
  };

  const currentConfig = tabConfig[currentTab as keyof typeof tabConfig] || tabConfig.profile;

  const handleTabChange = (value: string) => {
    router.push(`/settings/${value}`);
  };

  return (
    <ProtectedRoute>
      <MainLayout>
        <div className="mx-auto p-5 max-w-6xl py-8 space-y-8">
          
          {/* Dynamic Page Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">{currentConfig.title}</h1>
            <p className="text-muted-foreground">
              {currentConfig.description}
            </p>
          </div>

          {/* Navigation Tabs */}
          <Tabs value={currentTab} onValueChange={handleTabChange} className="space-y-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>

            {/* Page Content */}
            <div className="space-y-6">
              {children}
            </div>
          </Tabs>
        </div>
      </MainLayout>
    </ProtectedRoute>
  );
}
