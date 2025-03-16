import React, { useState } from 'react';
import { useSignUp } from '@clerk/clerk-react';
import { Link } from './Link';
import { Header } from './Header';
import { Footer } from './Footer';

export const SignupPage: React.FC = () => {
  const { isLoaded, signUp } = useSignUp();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    organization: '',
    role: '',
    termsAgree: false,
    newsletter: false
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await signUp.create({
        emailAddress: formData.email,
        password: formData.password,
        firstName: formData.fullName.split(' ')[0],
        lastName: formData.fullName.split(' ').slice(1).join(' '),
      });

      // Start the email verification process
      await signUp.prepareEmailAddressVerification();
    } catch (err) {
      console.error('Error during sign up:', err);
      setError('An error occurred during sign up');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#ecf0f1]">
      <Header />
      
      <main className="flex-grow py-16 bg-white">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl text-center mb-10 text-[#2c3e50]">Create Your Account</h2>
          
          <div className="max-w-2xl mx-auto bg-[#ecf0f1] p-8 rounded-lg shadow-lg">
            <div className="bg-[#d1ecf1] text-[#0c5460] p-4 rounded-lg mb-8">
              Join the Public Engagement Portal and start contributing valuable statistical data that can make a real difference in policy decisions.
            </div>
            
            {error && (
              <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block mb-2 font-medium text-[#2c3e50]">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3498db] focus:ring-2 focus:ring-[#3498db] focus:ring-opacity-20"
                  required
                />
              </div>
              
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
              
              <div>
                <label htmlFor="confirmPassword" className="block mb-2 font-medium text-[#2c3e50]">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3498db] focus:ring-2 focus:ring-[#3498db] focus:ring-opacity-20"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="organization" className="block mb-2 font-medium text-[#2c3e50]">
                  Organization (Optional)
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3498db] focus:ring-2 focus:ring-[#3498db] focus:ring-opacity-20"
                />
              </div>
              
              <div>
                <label htmlFor="role" className="block mb-2 font-medium text-[#2c3e50]">
                  Your Role
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3498db] focus:ring-2 focus:ring-[#3498db] focus:ring-opacity-20"
                  required
                >
                  <option value="">Select your role</option>
                  <option value="individual">Individual Citizen</option>
                  <option value="researcher">Researcher</option>
                  <option value="policymaker">Policy Maker</option>
                  <option value="nonprofit">Non-profit Representative</option>
                  <option value="business">Business Representative</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="termsAgree"
                  name="termsAgree"
                  checked={formData.termsAgree}
                  onChange={handleChange}
                  className="rounded text-[#3498db] focus:ring-[#3498db]"
                  required
                />
                <label htmlFor="termsAgree" className="text-sm text-[#2c3e50]">
                  I agree to the <Link href="#" className="text-[#3498db] hover:underline">Terms of Service</Link> and{' '}
                  <Link href="#" className="text-[#3498db] hover:underline">Privacy Policy</Link>
                </label>
              </div>
              
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                  className="rounded text-[#3498db] focus:ring-[#3498db]"
                />
                <label htmlFor="newsletter" className="text-sm text-[#2c3e50]">
                  Send me updates about new surveys and portal improvements
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#3498db] text-white py-3 rounded-lg font-medium hover:bg-[#2980b9] transform hover:translate-y-[-2px] transition-all hover:shadow-lg"
              >
                Create Account
              </button>
              
              <div className="text-center mt-6">
                Already have an account?{' '}
                <Link href="/login" className="text-[#3498db] hover:underline">
                  Login here
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};