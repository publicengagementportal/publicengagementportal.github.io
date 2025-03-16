import React, { useState } from 'react';
import { useSignIn } from '@clerk/clerk-react';
import { Link } from './Link';
import { Header } from './Header';
import { Footer } from './Footer';

export const LoginPage: React.FC = () => {
  const { isLoaded, signIn } = useSignIn();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;

    try {
      await signIn.create({
        identifier: formData.email,
        password: formData.password,
      });
    } catch (err) {
      console.error('Error during sign in:', err);
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#ecf0f1]">
      <Header />
      
      <main className="flex-grow flex items-center bg-white py-20">
        <div className="container mx-auto px-5">
          <div className="max-w-md mx-auto bg-[#ecf0f1] p-10 rounded-lg shadow-lg">
            <h2 className="text-3xl text-center mb-10 text-[#2c3e50]">Welcome Back</h2>
            
            {error && (
              <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block mb-2 font-medium text-[#2c3e50]">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3498db] focus:ring-2 focus:ring-[#3498db] focus:ring-opacity-20"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block mb-2 font-medium text-[#2c3e50]">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3498db] focus:ring-2 focus:ring-[#3498db] focus:ring-opacity-20"
                  required
                />
              </div>
              
              <div className="text-right">
                <Link href="/forgot-password" className="text-sm text-[#3498db] hover:underline">
                  Forgot Password?
                </Link>
              </div>
              
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="rounded text-[#3498db] focus:ring-[#3498db]"
                />
                <label htmlFor="rememberMe" className="text-sm text-[#2c3e50]">
                  Remember me on this device
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#3498db] text-white py-3 rounded-lg font-medium hover:bg-[#2980b9] transform hover:translate-y-[-2px] transition-all hover:shadow-lg"
              >
                Login
              </button>
              
              <div className="text-center">
                Don't have an account?{' '}
                <Link href="/signup" className="text-[#3498db] hover:underline">
                  Sign up here
                </Link>
              </div>
              
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-[#ecf0f1] text-gray-500">OR</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transform hover:translate-y-[-2px] transition-all hover:shadow-lg"
                >
                  <span className="text-sm font-medium">Google</span>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transform hover:translate-y-[-2px] transition-all hover:shadow-lg"
                >
                  <span className="text-sm font-medium">Microsoft</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};