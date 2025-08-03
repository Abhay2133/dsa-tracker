/**
 * Settings Page - Default Route
 * 
 * Redirects to the profile settings page by default.
 * 
 * @page
 * @route /settings
 */

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SettingsPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to profile settings by default
    router.replace('/settings/profile');
  }, [router]);

  return null;
}
