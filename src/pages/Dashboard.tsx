import { Link } from 'react-router-dom';
import { Building2, Users, Briefcase } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Government Tile */}
          <Link
            to="/government"
            className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Building2 className="h-8 w-8 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Government</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Engage with government agencies and public sector initiatives
                  </p>
                </div>
              </div>
            </div>
          </Link>

          {/* NGO Tile */}
          <Link
            to="/ngo"
            className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">NGO</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Connect with non-profit organizations and social initiatives
                  </p>
                </div>
              </div>
            </div>
          </Link>

          {/* Private Entity Tile */}
          <Link
            to="/private"
            className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Briefcase className="h-8 w-8 text-purple-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Private Entity</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Collaborate with private sector organizations
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}