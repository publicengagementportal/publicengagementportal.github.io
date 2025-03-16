import { ArrowRight, Users, MessageSquare, Globe } from 'lucide-react';
import { AuthButton } from '../../auth/ui/AuthButton';

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Globe className="w-8 h-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-800">Public Engagement Portal</span>
        </div>
        <AuthButton />
      </nav>

      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Connect. Engage. Impact.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community-driven platform where ideas transform into action. 
            Engage in meaningful discussions and shape the future together.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full inline-flex items-center space-x-2 transform transition hover:scale-105">
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <Users className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Hubs</h3>
            <p className="text-gray-600">Connect with like-minded individuals in specialized community hubs.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <MessageSquare className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Active Discussions</h3>
            <p className="text-gray-600">Engage in meaningful conversations across various channels.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <Globe className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
            <p className="text-gray-600">Make a difference in your community and beyond.</p>
          </div>
        </div>
      </main>
    </div>
  );
};