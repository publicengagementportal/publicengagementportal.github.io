import React from 'react';

export const InfoSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#ecf0f1]">
      <div className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h2 className="text-3xl mb-6 text-[#2c3e50]">About the Public Engagement Portal</h2>
            <div className="space-y-4">
              <p>The Public Engagement Portal (PEP) is an innovative platform designed to bridge the gap between citizens and stakeholders. Our mission is to empower the public to provide valuable statistical data directly to decision-makers, researchers, and policy developers.</p>
              <p>Through PEP, we're revolutionizing the way public opinion and data are collected and utilized. Our secure and user-friendly platform ensures that your voice is heard and your data makes a real impact on issues that matter to you and your community.</p>
              <p>By participating in our surveys and data collection initiatives, you're contributing to a more transparent, responsive, and data-driven decision-making process. Join us in creating positive change through the power of collaborative data sharing.</p>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
              alt="Data visualization example"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};