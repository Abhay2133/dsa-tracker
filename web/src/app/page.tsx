/**
 * Home Page - Landing Page for DSA Tracker
 * 
 * Main landing page that introduces users to the DSA Tracker application.
 * Features hero section, feature highlights, and community stats.
 * 
 * Features:
 * - Hero section with call-to-action buttons
 * - Feature grid showcasing main capabilities
 * - Community statistics
 * - Responsive design for all screen sizes
 * 
 * @page
 * @route /
 */

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MainLayout } from '@/components/layout/main-layout';
import { BarChart3, Book, Building2, Code, Users, Zap } from 'lucide-react';

// Feature data for the features grid section
const features = [
  {
    title: 'Problem Tracking',
    description: 'Track your solved problems with detailed progress analytics',
    icon: BarChart3,
  },
  {
    title: 'Curated Lists',
    description: 'Access handpicked problem sets like LeetCode Top 150 and Blind 75',
    icon: Book,
  },
  {
    title: 'Company Focus',
    description: 'Practice problems specific to your target companies',
    icon: Building2,
  },
  {
    title: 'AI-Powered',
    description: 'Generate custom problems and get hints using AI',
    icon: Zap,
  },
  {
    title: 'Study Groups',
    description: 'Collaborate with other developers in study groups',
    icon: Users,
  },
  {
    title: 'Code Solutions',
    description: 'Store and review your solutions with complexity analysis',
    icon: Code,
  },
];

export default function Home() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Track Your <span className="text-primary">DSA Journey</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A comprehensive platform to track your Data Structures and Algorithms progress, 
            practice with curated problem sets, and prepare for technical interviews.
          </p>
          
          {/* Call-to-Action Buttons */}
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/dashboard">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/problems">Browse Problems</Link>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature) => (
            <Card key={feature.title} className="h-full">
              <CardHeader>
                {/* Feature Icon */}
                <feature.icon className="h-10 w-10 text-primary mb-2" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Stats Section */}
        <div className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join the Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Curated Problems Stat */}
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Curated Problems</div>
            </div>
            
            {/* Company Lists Stat */}
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Company Lists</div>
            </div>
            
            {/* Active Users Stat */}
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10k+</div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
