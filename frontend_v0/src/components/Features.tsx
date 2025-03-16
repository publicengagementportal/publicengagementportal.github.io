import React from 'react';
import { BarChart3, Search, TrendingUp } from 'lucide-react';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-[#ecf0f1] rounded-lg p-8 text-center transition-all hover:translate-y-[-5px] hover:shadow-lg">
    <div className="text-[#3498db] mb-5 flex justify-center">{icon}</div>
    <h3 className="text-xl font-bold mb-4 text-[#2c3e50]">{title}</h3>
    <p>{description}</p>
  </div>
);

export const Features: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl text-center mb-10 text-[#2c3e50]">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<BarChart3 size={40} />}
            title="Data Collection"
            description="Contribute your valuable insights through user-friendly surveys and data collection tools"
          />
          <FeatureCard
            icon={<Search size={40} />}
            title="Analysis"
            description="Advanced analytics transform raw data into meaningful statistical insights"
          />
          <FeatureCard
            icon={<TrendingUp size={40} />}
            title="Impact"
            description="Your data directly influences stakeholder decisions and policy development"
          />
        </div>
      </div>
    </section>
  );
};