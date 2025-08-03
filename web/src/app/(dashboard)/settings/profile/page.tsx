/**
 * Profile Settings Page
 * 
 * Profile information editing page with avatar upload and form management.
 * 
 * @page
 * @route /settings/profile
 */

'use client';

import { useState } from 'react';
import { Camera, User, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function ProfileSettingsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Software engineer passionate about data structures and algorithms. Currently working through LeetCode problems and building projects.',
    avatar: '',
    location: 'San Francisco, CA',
    website: 'https://johndoe.dev',
  });

  const [originalProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Software engineer passionate about data structures and algorithms. Currently working through LeetCode problems and building projects.',
    avatar: '',
    location: 'San Francisco, CA',
    website: 'https://johndoe.dev',
  });

  const [stats] = useState({
    problemsSolved: 247,
    currentStreak: 12,
    longestStreak: 45,
    totalSessions: 89,
    averageSessionTime: '45 min',
    joinedDate: 'January 2024',
  });

  /**
   * Check if profile data has changes
   */
  const hasChanges = () => {
    return JSON.stringify(profileData) !== JSON.stringify(originalProfileData);
  };

  /**
   * Handle profile form changes
   */
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  /**
   * Save profile changes
   */
  const handleSaveProfile = async () => {
    setIsLoading(true);
    
    try {
      // TODO: Implement profile update API
      console.log('Saving profile:', profileData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // TODO: Update originalProfileData with new saved data
      
    } catch (error) {
      console.error('Profile save error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Handle avatar upload
   */
  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // TODO: Implement avatar upload
      console.log('Avatar upload:', file);
    }
  };

  return (
    <>
      {/* Profile Information Card */}
      <Card>
        <CardHeader>
          <div>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Profile Information
            </CardTitle>
            <CardDescription>
              Update your profile details and public information
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Avatar Section */}
          <div className="flex items-center space-x-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={profileData.avatar} />
              <AvatarFallback className="text-lg">
                {profileData.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <Button variant="outline" size="sm" asChild>
                <label htmlFor="avatar-upload" className="cursor-pointer">
                  <Camera className="h-4 w-4 mr-2" />
                  Change Avatar
                </label>
              </Button>
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleAvatarUpload}
              />
            </div>
          </div>

          {/* Profile Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                value={profileData.name}
                onChange={handleProfileChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={profileData.email}
                onChange={handleProfileChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                name="location"
                value={profileData.location}
                onChange={handleProfileChange}
                placeholder="City, Country"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                name="website"
                type="url"
                value={profileData.website}
                onChange={handleProfileChange}
                placeholder="https://your-website.com"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                name="bio"
                value={profileData.bio}
                onChange={handleProfileChange}
                placeholder="Tell us about yourself..."
                className="resize-none"
                rows={4}
              />
            </div>
          </div>

          {/* Action Button */}
          <div className="flex justify-end pt-4">
            <Button
              onClick={handleSaveProfile}
              disabled={isLoading || !hasChanges()}
            >
              {isLoading ? (
                "Saving..."
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Statistics Card */}
      <Card>
        <CardHeader>
          <CardTitle>Your Progress</CardTitle>
          <CardDescription>
            Your coding journey statistics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-primary">{stats.problemsSolved}</div>
              <div className="text-sm text-muted-foreground">Problems Solved</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-green-600">{stats.currentStreak}</div>
              <div className="text-sm text-muted-foreground">Current Streak</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-orange-600">{stats.longestStreak}</div>
              <div className="text-sm text-muted-foreground">Longest Streak</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold">{stats.totalSessions}</div>
              <div className="text-sm text-muted-foreground">Total Sessions</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold">{stats.averageSessionTime}</div>
              <div className="text-sm text-muted-foreground">Avg Session</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold">{stats.joinedDate}</div>
              <div className="text-sm text-muted-foreground">Member Since</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
