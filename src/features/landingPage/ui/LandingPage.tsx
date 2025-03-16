import { useAuth, SignInButton } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function LandingPage() {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && userId) {
      // If user is logged in, redirect to dashboard
      navigate("/dashboard");
    }
  }, [isLoaded, userId, navigate]);

  // Don't render anything while checking auth status
  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  // If user is not logged in, show landing page
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Public Engagement Portal
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
            Empowering communities through data-driven insights
          </p>
          <div className="mt-8">
            <SignInButton mode="modal">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                Get Started
              </button>
            </SignInButton>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900">Data Collection</h3>
              <p className="mt-2 text-gray-500">
                Submit and manage data with our easy-to-use forms
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900">Visualization</h3>
              <p className="mt-2 text-gray-500">
                View insights and trends through interactive dashboards
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900">Collaboration</h3>
              <p className="mt-2 text-gray-500">
                Work together with organizations and community members
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
