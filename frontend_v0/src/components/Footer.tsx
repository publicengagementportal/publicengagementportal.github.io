import React from 'react';
import { Link } from './Link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2c3e50] text-white py-10">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Public Engagement Portal</h3>
            <p>Connecting citizens with stakeholders through data</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-white transition-colors">Home</Link>
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact Us</Link>
              <Link href="/privacy" className="block text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="block text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <a href="mailto:info@pep.org" className="block text-gray-400 hover:text-white transition-colors">info@pep.org</a>
              <a href="tel:+123456789" className="block text-gray-400 hover:text-white transition-colors">+1 (234) 567-89</a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white border-opacity-10 text-center">
          <p>&copy; 2025 Public Engagement Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};