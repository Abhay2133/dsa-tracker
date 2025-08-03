# DSA Tracker - Data Structures & Algorithms Problem Tracking App

## 🎯 Project Overview

A comprehensive web application for tracking Data Structures and Algorithms (DSA) problem-solving progress. Users can monitor solved problems, select from curated problem lists, create custom problems using AI, and view company-specific problem sets.

## 🏗️ Tech Stack

- **Frontend**: Next.js 14+ (React 18+, TypeScript)
- **Backend**: Firebase (Firestore, Authentication, Functions)
- **Deployment**: Vercel (Frontend)
- **Styling**: Tailwind CSS
- **AI Integration**: OpenAI/Claude API for problem generation

## 📋 Core Features

### 1. User Management
- Firebase Authentication (Google, GitHub, Email/Password)
- User profiles with progress statistics
- Personalized dashboards

### 2. Problem Tracking
- Mark problems as solved/unsolved
- Track solving attempts and dates
- Add personal notes and solutions
- Difficulty-based categorization (Easy, Medium, Hard)
- Topic-based filtering (Arrays, Trees, Graphs, etc.)

### 3. Problem Lists
- **Curated Lists**: Predefined sets (LeetCode Top 150, Blind 75, etc.)
- **Custom Lists**: User-created problem collections
- **AI-Generated Lists**: Custom problem sets based on user preferences
- Import/Export functionality

### 4. Company Insights
- Problems categorized by companies that ask them
- Company-specific preparation tracks
- Recent interview problem trends
- Frequency analysis of problems per company

### 5. AI-Powered Features
- Generate custom problems based on topics/difficulty
- Suggest next problems based on learning path
- Auto-categorize imported problems
- Generate hints and solution approaches

### 6. Progress Analytics
- Visual progress charts and heatmaps
- Streak tracking and statistics
- Topic-wise mastery levels
- Time-based progress reports

## 🗂️ Project Structure

```
dsa-tracker/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # Authentication pages
│   │   ├── dashboard/         # Main dashboard
│   │   ├── problems/          # Problem listing and details
│   │   ├── lists/             # Problem lists management
│   │   ├── companies/         # Company-specific views
│   │   └── api/               # API routes
│   ├── components/            # Reusable UI components
│   │   ├── ui/               # Base UI components
│   │   ├── forms/            # Form components
│   │   ├── charts/           # Analytics components
│   │   └── layout/           # Layout components
│   ├── lib/                  # Utility functions and configs
│   │   ├── firebase/         # Firebase configuration
│   │   ├── ai/               # AI service integrations
│   │   └── utils/            # Helper functions
│   ├── hooks/                # Custom React hooks
│   ├── types/                # TypeScript type definitions
│   └── styles/               # Global styles and Tailwind config
├── public/                   # Static assets
├── firebase/                 # Firebase functions and rules
└── docs/                     # Documentation
```

## 🔥 Firebase Collections Structure

### Users Collection
```typescript
{
  uid: string,
  email: string,
  displayName: string,
  createdAt: timestamp,
  stats: {
    totalSolved: number,
    easyCount: number,
    mediumCount: number,
    hardCount: number,
    currentStreak: number,
    maxStreak: number
  }
}
```

### Problems Collection
```typescript
{
  id: string,
  title: string,
  description: string,
  difficulty: 'Easy' | 'Medium' | 'Hard',
  topics: string[],
  companies: string[],
  leetcodeId?: number,
  source: 'leetcode' | 'custom' | 'ai-generated',
  createdAt: timestamp
}
```

### UserProgress Collection
```typescript
{
  userId: string,
  problemId: string,
  status: 'solved' | 'attempted' | 'todo',
  solvedAt?: timestamp,
  attempts: number,
  notes?: string,
  solutionCode?: string,
  timeComplexity?: string,
  spaceComplexity?: string
}
```

### ProblemLists Collection
```typescript
{
  id: string,
  name: string,
  description: string,
  createdBy: string,
  isPublic: boolean,
  problems: string[], // problem IDs
  category: 'curated' | 'custom' | 'ai-generated',
  tags: string[]
}
```

## 🔧 Key Components & Pages

### Authentication
- `/login` - Login page with multiple auth options
- `/signup` - User registration
- `/profile` - User profile management

### Dashboard
- `/dashboard` - Main dashboard with overview stats
- `/dashboard/progress` - Detailed progress analytics
- `/dashboard/streak` - Streak tracking and calendar view

### Problems
- `/problems` - All problems with filtering/search
- `/problems/[id]` - Individual problem details
- `/problems/solve/[id]` - Problem solving interface

### Lists
- `/lists` - All available problem lists
- `/lists/[id]` - Specific list view
- `/lists/create` - Create new custom list
- `/lists/generate` - AI-powered list generation

### Companies
- `/companies` - Company directory
- `/companies/[company]` - Company-specific problems
- `/companies/trends` - Interview trends and insights

## 🤖 AI Integration Points

1. **Problem Generation**: Create custom problems based on user input
2. **List Curation**: Generate themed problem lists
3. **Hint Generation**: Provide progressive hints for problems
4. **Solution Analysis**: Analyze user solutions for optimization
5. **Learning Path**: Suggest next problems based on progress

## 🎨 UI/UX Features

- **Dark/Light Mode**: Theme switching
- **Responsive Design**: Mobile-first approach
- **Progressive Web App**: Offline capability
- **Real-time Updates**: Live progress syncing
- **Keyboard Shortcuts**: Power user features

## 🔐 Security & Privacy

- Firebase Security Rules for data protection
- User data encryption and privacy compliance
- Secure API key management
- Rate limiting for AI API calls

## 📊 Analytics & Monitoring

- User engagement tracking
- Problem solving patterns
- Performance metrics
- Error monitoring and logging

## 🚀 Development Workflow

1. **Local Development**: Next.js dev server with Firebase emulators
2. **Staging**: Preview deployments on Vercel
3. **Production**: Automatic deployments from main branch
4. **Testing**: Unit tests, integration tests, E2E tests

## 📚 External Integrations

- **LeetCode API**: Import problems and user stats
- **GitHub**: Solution code storage and sharing
- **OpenAI/Claude**: AI-powered features
- **Company APIs**: Real-time interview data

## 🎯 User Journey

1. **Onboarding**: Account creation and initial preferences
2. **Problem Discovery**: Browse/search problems and lists
3. **Practice**: Solve problems with tracking
4. **Analysis**: Review progress and identify gaps
5. **Preparation**: Company-specific practice sessions

## 🔄 Data Flow

1. User actions trigger Next.js API routes
2. API routes interact with Firebase services
3. Real-time updates via Firebase listeners
4. AI services called for enhanced features
5. Progress synced across devices

---

## Quick Start Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start Firebase emulators
npm run firebase:emulators

# Deploy to production
npm run deploy
```

## Environment Variables

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
FIREBASE_ADMIN_SDK_KEY=
OPENAI_API_KEY=
CLAUDE_API_KEY=
```

---

**Note for AI Assistants**: This project follows modern Next.js patterns with TypeScript, uses Firebase for backend services, and integrates AI for enhanced user experience. The codebase prioritizes type safety, performance, and user experience.
# dsa-tracker
