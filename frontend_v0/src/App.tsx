import React from 'react';
import { ClerkProvider } from '@clerk/clerk-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { InfoSection } from './components/InfoSection';
import { Footer } from './components/Footer';
import { SignupPage } from './components/SignupPage';
import { LoginPage } from './components/LoginPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';

// Get the Clerk publishable key from environment variables
const clerkPubKey = 'pk_test_bmV4dC13YXJ0aG9nLTc4LmNsZXJrLmFjY291bnRzLmRldiQ';

function App() {
  // This is a simple way to handle routing - you might want to use a proper router in production
  const path = window.location.pathname;

  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      {path === '/signup' ? (
        <SignupPage />
      ) : path === '/login' ? (
        <LoginPage />
      ) : path === '/about' ? (
        <AboutPage />
      ) : path === '/contact' ? (
        <ContactPage />
      ) : (
        <div className="min-h-screen flex flex-col">
          <Header />
          <main>
            <Hero />
            <Features />
            <InfoSection />
          </main>
          <Footer />
        </div>
      )}
    </ClerkProvider>
  );
}

export default App;