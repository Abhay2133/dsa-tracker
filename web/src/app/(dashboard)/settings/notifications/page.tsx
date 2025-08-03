/**
 * Notification Settings Page
 * 
 * Configure notification preferences and settings.
 * 
 * @page
 * @route /settings/notifications
 */

'use client';

import { useState } from 'react';
import { Bell } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';

export default function NotificationSettingsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    problemReminders: true,
    streakReminders: true,
    weeklyProgress: false,
    newFeatures: true,
  });

  /**
   * Handle notification setting changes
   */
  const handleNotificationChange = (setting: string, value: boolean) => {
    setNotifications(prev => ({
      ...prev,
      [setting]: value
    }));
    
    // Auto-save notification changes
    handleSaveNotifications(setting, value);
  };

  /**
   * Save notification preferences
   */
  const handleSaveNotifications = async (setting: string, value: boolean) => {
    setIsLoading(true);
    
    try {
      // TODO: Implement notification preferences API
      console.log('Saving notification setting:', { setting, value });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
    } catch (error) {
      console.error('Notification save error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notification Preferences
            </CardTitle>
            <CardDescription>
              Configure how you want to receive notifications
            </CardDescription>
          </div>
          {isLoading && <Badge variant={'secondary'}>
            Saving...
          </Badge>}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {Object.entries(notifications).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between">
            <div>
              <p className="font-medium">
                {key === 'emailNotifications' && 'Email Notifications'}
                {key === 'problemReminders' && 'Daily Problem Reminders'}
                {key === 'streakReminders' && 'Streak Reminders'}
                {key === 'weeklyProgress' && 'Weekly Progress Reports'}
                {key === 'newFeatures' && 'New Feature Updates'}
              </p>
              <p className="text-sm text-muted-foreground">
                {key === 'emailNotifications' && 'Receive notifications via email'}
                {key === 'problemReminders' && 'Daily reminders to solve problems'}
                {key === 'streakReminders' && 'Reminders to maintain your streak'}
                {key === 'weeklyProgress' && 'Weekly summary of your progress'}
                {key === 'newFeatures' && 'Updates about new features and improvements'}
              </p>
            </div>
            <Switch
              checked={value}
              onCheckedChange={(checked: boolean) => handleNotificationChange(key, checked)}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
