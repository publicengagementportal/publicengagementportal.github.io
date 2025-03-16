import { Routes, Route } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import { LandingPage } from './features/landingPage/ui/LandingPage';
import { ProtectedRoute } from './middleware/auth';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

export default function App() {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />

        {/* Protected routes - Add your protected routes here */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            {/* Your protected component here */}
            <div>Protected Dashboard</div>
          </ProtectedRoute>
        } />
      </Routes>
    </ClerkProvider>
  );
}
