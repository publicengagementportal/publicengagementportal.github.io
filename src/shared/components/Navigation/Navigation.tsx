import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useUser, UserButton } from "@clerk/clerk-react";
import { useVisibilityStore } from "../../../features/shared/store/visibilityStore";

export function Navigation() {
  const location = useLocation();
  const { user } = useUser();
  const { isPublicDataEnabled, error, initialize, setPublicDataEnabled } = useVisibilityStore();

  const isAdmin = user?.publicMetadata?.role === 'admin';
  const isOrganization = user?.publicMetadata?.role === 'organization';
  const isPublic = !isAdmin && !isOrganization;

  useEffect(() => {
    initialize();
  }, [initialize]);

  const togglePublicVisibility = async () => {
    try {
      const role = isAdmin ? 'admin' : isOrganization ? 'organization' : 'public';
      await setPublicDataEnabled(!isPublicDataEnabled, role);
    } catch (err) {
      // Error is handled by the store
    }
  };

  if (!user) return null;

  const navItems = [
    { path: "/data-collection", label: "Data Collection" },
    { path: "/dashboard", label: "Dashboard" },
    { path: "/profile", label: "Profile" },
  ];

  return (
    <>
      <nav className="bg-white shadow fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 relative">
          <div className="flex h-16 justify-between items-center">
            {/* Logo/Home Link */}
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-indigo-600">
                Public Engagement Portal
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center">
              {/* Main Navigation */}
              <div className="flex items-center space-x-4 mr-6">
                {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === item.path
                      ? "bg-indigo-100 text-indigo-700"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
                ))}
              </div>

              {/* Public Data Toggle & User Menu */}
              <div className="flex items-center space-x-4 border-l pl-6">
                {/* Data Visibility Toggle with role-based tooltip */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={togglePublicVisibility}
                    className={`
                      group
                      relative inline-flex h-8 w-14 items-center rounded-full
                      transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                      ${isPublicDataEnabled 
                        ? 'bg-green-600 hover:bg-green-700'
                        : 'bg-gray-200 hover:bg-gray-300'
                      }
                      hover:bg-opacity-80
                    `}
                    title={`Click to make data ${isPublicDataEnabled ? 'private' : 'public'}`}
                  >
                    <span
                      className={`
                        ${isPublicDataEnabled ? 'translate-x-7' : 'translate-x-1'}
                        inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform
                      `}
                    />
                  </button>
                  <span className={`text-sm font-medium ${isPublicDataEnabled ? 'text-green-600' : 'text-gray-500'}`}>
                    {isPublicDataEnabled ? 'Public' : 'Private'}
                  </span>
                </div>
                <UserButton afterSignOutUrl="/" />
              </div>
            </div>
          </div>
          
          {/* Error Message */}
          {error && (
            <div className="absolute top-full left-0 right-0 mt-1">
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mx-4 text-sm">
                {error}
              </div>
            </div>
          )}
        </div>
      </nav>
      <div className="h-16" /> {/* Spacer for fixed navbar */}
    </>
  );
}
