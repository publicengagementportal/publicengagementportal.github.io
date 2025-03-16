# Public Engagement Portal

A community-driven platform built with React, TypeScript, and DDD architecture.

## Features

- Landing page with modern UI
- Authentication with Clerk
- Protected routes
- Tailwind CSS for styling

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Create a Clerk account and get your API keys:
- Go to [Clerk Dashboard](https://dashboard.clerk.dev)
- Create a new application
- Copy your Publishable Key and Secret Key

3. Set up environment variables:
- Create a `.env` file in the root directory
- Add your Clerk keys:
```
VITE_CLERK_PUBLISHABLE_KEY=your_publishable_key_here
VITE_CLERK_SECRET_KEY=your_secret_key_here
```

4. Start the development server:
```bash
npm run dev
```

## Project Structure

Following Domain-Driven Design (DDD) architecture:

```
src/
├── features/           # Feature-based modules
│   ├── auth/          # Authentication feature
│   └── landingPage/   # Landing page feature
├── middleware/        # Auth middleware
├── shared/           # Shared components
└── app/              # App configuration
```

## Tech Stack

- React + TypeScript
- Clerk Authentication
- Tailwind CSS
- React Router DOM
- Zustand for state management
