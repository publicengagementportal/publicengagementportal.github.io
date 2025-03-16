import React from 'react';
import { Link } from './Link';

export const Header: React.FC = () => {
  return (
    <header className="bg-[#2c3e50] text-white py-5 shadow-md">
      <div className="container mx-auto px-5">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold">PEP</div>
          <div className="flex items-center">
            <Link href="/" className="mr-5 hover:text-[#3498db] transition-colors">Home</Link>
            <Link href="/about" className="mr-5 hover:text-[#3498db] transition-colors">About</Link>
            <Link href="/contact" className="mr-5 hover:text-[#3498db] transition-colors">Contact Us</Link>
            <div className="flex">
              <Link href="/login" className="px-4 py-2 rounded border border-white hover:translate-y-[-2px] transition-all hover:shadow-lg ml-2.5">
                Login
              </Link>
              <Link href="/signup" className="px-4 py-2 rounded bg-[#3498db] hover:translate-y-[-2px] transition-all hover:shadow-lg ml-2.5">
                Sign Up
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};