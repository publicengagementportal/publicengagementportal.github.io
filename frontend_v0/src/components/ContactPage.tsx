import React, { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { MapPin, Phone, Mail, Clock, MessageSquare, Building } from 'lucide-react';

const ContactInfo: React.FC<{ icon: React.ReactNode; title: string; content: React.ReactNode }> = ({ icon, title, content }) => (
  <div className="flex items-start space-x-4">
    <div className="text-[#3498db] mt-1">{icon}</div>
    <div>
      <h3 className="font-semibold text-[#2c3e50] mb-1">{title}</h3>
      <div className="text-gray-600">{content}</div>
    </div>
  </div>
);

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    organization: '',
    role: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 text-white bg-[#2c3e50] bg-opacity-80 bg-blend-overlay" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80")'
        }}>
          <div className="container mx-auto px-5 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Have questions or feedback? We're here to help and would love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-[#2c3e50] mb-8">Contact Information</h2>
                
                <ContactInfo
                  icon={<Building size={24} />}
                  title="Main Office"
                  content={
                    <div>
                      Public Engagement Portal<br />
                      Innovation Center, Suite 500<br />
                      123 Data Drive<br />
                      San Francisco, CA 94105
                    </div>
                  }
                />
                
                <ContactInfo
                  icon={<Phone size={24} />}
                  title="Phone"
                  content={
                    <a href="tel:+1-234-567-8900" className="hover:text-[#3498db]">
                      +1 (234) 567-8900
                    </a>
                  }
                />
                
                <ContactInfo
                  icon={<Mail size={24} />}
                  title="Email"
                  content={
                    <a href="mailto:contact@pep.org" className="hover:text-[#3498db]">
                      contact@pep.org
                    </a>
                  }
                />
                
                <ContactInfo
                  icon={<Clock size={24} />}
                  title="Hours of Operation"
                  content={
                    <div>
                      Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                      Saturday: 10:00 AM - 4:00 PM PST<br />
                      Sunday: Closed
                    </div>
                  }
                />
                
                <ContactInfo
                  icon={<MessageSquare size={24} />}
                  title="Support"
                  content={
                    <div>
                      For technical support:<br />
                      <a href="mailto:support@pep.org" className="hover:text-[#3498db]">
                        support@pep.org
                      </a>
                    </div>
                  }
                />
                
                <ContactInfo
                  icon={<MapPin size={24} />}
                  title="Regional Offices"
                  content={
                    <div>
                      New York | London | Singapore | Sydney
                    </div>
                  }
                />
              </div>

              {/* Contact Form */}
              <div className="bg-[#ecf0f1] p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-[#2c3e50] mb-6">Send Us a Message</h2>
                
                {submitted ? (
                  <div className="bg-green-100 text-green-700 p-4 rounded-lg">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium text-[#2c3e50]">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
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

                    <div>
                      <label htmlFor="subject" className="block mb-2 font-medium text-[#2c3e50]">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3498db] focus:ring-2 focus:ring-[#3498db] focus:ring-opacity-20"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block mb-2 font-medium text-[#2c3e50]">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3498db] focus:ring-2 focus:ring-[#3498db] focus:ring-opacity-20"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#3498db] text-white py-3 rounded-lg font-medium hover:bg-[#2980b9] transform hover:translate-y-[-2px] transition-all hover:shadow-lg"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-[#ecf0f1]">
          <div className="container mx-auto px-5">
            <h2 className="text-3xl text-center mb-12 text-[#2c3e50]">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#2c3e50] mb-2">How quickly can I expect a response?</h3>
                <p className="text-gray-600">We strive to respond to all inquiries within 24-48 business hours.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#2c3e50] mb-2">What type of support do you offer?</h3>
                <p className="text-gray-600">We provide technical support, general inquiries assistance, and dedicated account management for enterprise clients.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#2c3e50] mb-2">Do you offer emergency support?</h3>
                <p className="text-gray-600">Yes, enterprise clients have access to 24/7 emergency support through our dedicated hotline.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};