/**
 * Account Settings Page
 * 
 * Account information and subscription management.
 * 
 * @page
 * @route /settings/account
 */

'use client';

import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

export default function AccountSettingsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mail className="h-5 w-5" />
          Account Information
        </CardTitle>
        <CardDescription>
          Manage your account settings and preferences
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Email Verification</p>
            <p className="text-sm text-muted-foreground">Your email is verified</p>
          </div>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Verified
          </Badge>
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Account Type</p>
            <p className="text-sm text-muted-foreground">Free account with basic features</p>
          </div>
          <Button variant="outline" size="sm">
            Upgrade to Pro
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
