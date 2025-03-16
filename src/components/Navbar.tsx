import { useClerk, useUser } from '@clerk/clerk-react';
import { Link, useNavigate } from 'react-router-dom';
import { Building2, Home, Info, Mail, LogOut } from 'lucide-react';

export default function Navbar() {
  const { user, isSignedIn } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">PEP</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
              >
                <Home className="h-4 w-4 mr-1" />
                Home
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                <Info className="h-4 w-4 mr-1" />
                About
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                <Mail className="h-4 w-4 mr-1" />
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            {isSignedIn ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/dashboard"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleSignOut}
                  className="inline-flex items-center text-gray-500 hover:text-gray-900"
                >
                  <LogOut className="h-4 w-4 mr-1" />
                  Sign out
                </button>
                <span className="text-sm text-gray-700">
                  Welcome, {user.firstName || user.username}
                </span>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-gray-500 hover:text-gray-900"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}