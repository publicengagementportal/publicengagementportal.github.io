import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Users, LineChart, Target, Award, Globe2, Shield } from 'lucide-react';

const StatCard: React.FC<{ icon: React.ReactNode; title: string; value: string }> = ({ icon, title, value }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
    <div className="text-[#3498db] mb-4 flex justify-center">{icon}</div>
    <div className="text-3xl font-bold text-[#2c3e50] mb-2">{value}</div>
    <div className="text-gray-600">{title}</div>
  </div>
);

const TeamMember: React.FC<{ name: string; role: string; image: string }> = ({ name, role, image }) => (
  <div className="text-center">
    <img
      src={image}
      alt={name}
      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
    />
    <h3 className="text-xl font-semibold text-[#2c3e50]">{name}</h3>
    <p className="text-gray-600">{role}</p>
  </div>
);

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 text-white bg-[#2c3e50] bg-opacity-90 bg-blend-overlay" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80")'
        }}>
          <div className="container mx-auto px-5 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Empowering communities through data-driven engagement and fostering meaningful collaboration between citizens and stakeholders.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-[#ecf0f1]">
          <div className="container mx-auto px-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StatCard
                icon={<Users size={40} />}
                value="50,000+"
                title="Active Users"
              />
              <StatCard
                icon={<LineChart size={40} />}
                value="1M+"
                title="Data Points Collected"
              />
              <StatCard
                icon={<Target size={40} />}
                value="500+"
                title="Policy Impacts"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-5">
            <h2 className="text-3xl text-center mb-12 text-[#2c3e50]">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-[#3498db] mb-4 flex justify-center">
                  <Shield size={40} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2c3e50]">Trust & Security</h3>
                <p className="text-gray-600">
                  We prioritize the protection of user data and maintain the highest standards of security in all our operations.
                </p>
              </div>
              <div className="text-center">
                <div className="text-[#3498db] mb-4 flex justify-center">
                  <Globe2 size={40} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2c3e50]">Global Impact</h3>
                <p className="text-gray-600">
                  Our platform connects communities worldwide, enabling collaborative solutions to shared challenges.
                </p>
              </div>
              <div className="text-center">
                <div className="text-[#3498db] mb-4 flex justify-center">
                  <Award size={40} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2c3e50]">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in our platform, services, and the impact we create for our users.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-[#ecf0f1]">
          <div className="container mx-auto px-5">
            <h2 className="text-3xl text-center mb-12 text-[#2c3e50]">Our Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <TeamMember
                name="Sarah Johnson"
                role="Chief Executive Officer"
                image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
              />
              <TeamMember
                name="Michael Chen"
                role="Chief Technology Officer"
                image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
              />
              <TeamMember
                name="Emily Rodriguez"
                role="Head of Data Science"
                image="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80"
              />
              <TeamMember
                name="David Kim"
                role="Head of Community"
                image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-5">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl mb-6 text-[#2c3e50]">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our platform or want to learn more about how we can help your community?
                We'd love to hear from you.
              </p>
              <a
                href="mailto:contact@pep.org"
                className="inline-block px-8 py-3 bg-[#3498db] text-white rounded-lg hover:bg-[#2980b9] transform hover:translate-y-[-2px] transition-all hover:shadow-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};