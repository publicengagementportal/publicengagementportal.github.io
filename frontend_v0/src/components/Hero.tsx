import React from 'react';
import { Link } from './Link';

export const Hero: React.FC = () => {
  return (
    <section className="py-20 text-center text-white bg-[#2c3e50] bg-opacity-80 bg-blend-overlay" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80")'
    }}>
      <div className="container mx-auto px-5">
        <h1 className="text-4xl mb-5 font-bold">Public Engagement Portal</h1>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Empowering citizens to contribute statistical data directly to stakeholders and decision-makers
        </p>
        <Link href="/get-started" className="inline-block px-6 py-3 text-lg rounded bg-[#e74c3c] hover:bg-[#c0392b] transform hover:translate-y-[-2px] transition-all hover:shadow-lg">
          Get Started
        </Link>
      </div>
    </section>
  );
};