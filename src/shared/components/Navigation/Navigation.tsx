import { Link, useLocation } from "react-router-dom";
import { useUser, UserButton } from "@clerk/clerk-react";

export function Navigation() {
  const location = useLocation();
  const { user } = useUser();

  if (!user) return null;

  const navItems = [
    { path: "/data-collection", label: "Data Collection" },
    { path: "/dashboard", label: "Dashboard" },
    { path: "/profile", label: "Profile" },
  ];

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex h-16 justify-between items-center">
          {/* Logo/Home Link */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-indigo-600">
              Public Engagement Portal
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
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

            {/* User Menu Button */}
            <div className="ml-4">
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
