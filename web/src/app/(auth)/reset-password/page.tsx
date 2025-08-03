/**
 * Password Reset Page Component
 * 
 * Password reset request form for users who forgot their password.
 * Features:
 * - Email input for password reset request
 * - Form validation with error handling
 * - Success state with instructions
 * - Loading states and feedback
 * - Links back to login page
 * 
 * @page
 * @route /reset-password
 */

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ResetPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  /**
   * Handle form submission
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email.trim()) {
      setError('Email is required');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // TODO: Implement Firebase password reset
      console.log('Password reset request for:', email);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSuccess(true);
      
    } catch (error) {
      console.error('Password reset error:', error);
      setError('Failed to send reset email. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Handle resend email
   */
  const handleResend = async () => {
    setError('');
    setIsLoading(true);
    
    try {
      // TODO: Implement resend functionality
      console.log('Resending password reset email to:', email);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
    } catch (error) {
      console.error('Resend error:', error);
      setError('Failed to resend email. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Reset form to initial state
   */
  const handleBackToForm = () => {
    setIsSuccess(false);
    setEmail('');
    setError('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        
        {/* Back to Login Link */}
        <div>
          <Link
            href="/login"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to login
          </Link>
        </div>

        {!isSuccess ? (
          <>
            {/* Page Header */}
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight">Reset password</h1>
              <p className="text-muted-foreground mt-2">
                Enter your email address and we&apos;ll send you a link to reset your password
              </p>
            </div>

            {/* Reset Form Card */}
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl text-center">Forgot password?</CardTitle>
                <CardDescription className="text-center">
                  No worries, we&apos;ll help you reset it
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                
                {/* Error Message */}
                {error && (
                  <div className="bg-destructive/15 border border-destructive/20 rounded-md p-3">
                    <p className="text-sm text-destructive">{error}</p>
                  </div>
                )}

                {/* Reset Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={isLoading}
                      className="w-full"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isLoading || !email.trim()}
                  >
                    {isLoading ? 'Sending reset link...' : 'Send reset link'}
                  </Button>
                </form>

                {/* Additional Help */}
                <div className="text-center text-sm text-muted-foreground">
                  <p>
                    Remember your password?{' '}
                    <Link
                      href="/login"
                      className="text-primary hover:underline font-medium"
                    >
                      Sign in
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </>
        ) : (
          <>
            {/* Success State */}
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight">Check your email</h1>
              <p className="text-muted-foreground mt-2">
                We&apos;ve sent a password reset link to
              </p>
              <p className="text-foreground font-medium mt-1">{email}</p>
            </div>

            {/* Success Card */}
            <Card>
              <CardContent className="pt-6 space-y-4">
                
                {/* Instructions */}
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    Click the link in the email to reset your password. If you don&apos;t see the email, check your spam folder.
                  </p>
                  <p>
                    The link will expire in 1 hour for security reasons.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <Button
                    onClick={handleResend}
                    variant="outline"
                    className="w-full"
                    disabled={isLoading}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    {isLoading ? 'Resending...' : 'Resend email'}
                  </Button>
                  
                  <Button
                    onClick={handleBackToForm}
                    variant="ghost"
                    className="w-full"
                  >
                    Try different email
                  </Button>
                </div>

                {/* Error Message in Success State */}
                {error && (
                  <div className="bg-destructive/15 border border-destructive/20 rounded-md p-3">
                    <p className="text-sm text-destructive">{error}</p>
                  </div>
                )}

                {/* Back to Login */}
                <div className="text-center text-sm text-muted-foreground pt-4 border-t">
                  <Link
                    href="/login"
                    className="text-primary hover:underline font-medium"
                  >
                    Back to login
                  </Link>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}
