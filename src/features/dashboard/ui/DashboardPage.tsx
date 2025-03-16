import { useState, useEffect } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { useVisibilityStore } from "../../../features/shared/store/visibilityStore";
import { db } from "../../../infrastructure/firebase";
import type { DashboardStats } from "../domain/types";

interface Submission {
  id: string;
  userId: string;
  data: {
    agency: {
      type: string;
      name: string;
    };
    asset: {
      type: string;
      details: string;
    };
    description: string;
    location?: string;
  };
  files: string[];
  timestamp: any;
}

interface PublicSettings {
  isPublicDataEnabled: boolean;
}

export default function DashboardPage() {
  const { userId } = useAuth();
  const { user } = useUser();
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const { isPublicDataEnabled, initialize } = useVisibilityStore();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState<DashboardStats>({
    totalSubmissions: 0,
    submissionsByOption: {},
  });

  const isAdmin = user?.publicMetadata?.role === 'admin';
  const isOrganization = user?.publicMetadata?.role === 'organization';
  const isPublic = !isAdmin && !isOrganization;

  useEffect(() => {
    initialize(); // Initialize visibility state
  }, [initialize]);

  // Fetch submissions
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Fetch submissions
        const submissionsRef = collection(db, "submissions");
        const q = query(
          submissionsRef,
          orderBy("timestamp", "desc")
        );

        const querySnapshot = await getDocs(q);
        const submissionsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Submission[];

        setSubmissions(submissionsData);
        
        // Calculate stats
        const submissionsByOption = submissionsData.reduce((acc, submission) => {
          const option = submission.data.asset.type;
          acc[option] = (acc[option] || 0) + 1;
          return acc;
        }, {} as Record<string, number>);

        setStats({
          totalSubmissions: submissionsData.length,
          latestSubmission: submissionsData[0]?.timestamp?.toDate(),
          submissionsByOption,
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch data");
      } finally {
        setIsLoading(false);
      }
    };

    // Only fetch if data is public or user is admin/org
    if (isPublicDataEnabled || !isPublic) {
      fetchData();
    } else {
      setIsLoading(false);
    }
  }, [isPublic, isPublicDataEnabled]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  // Show message for public users when data is private
  if (isPublic && !isPublicDataEnabled) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-yellow-800 mb-2">Data is Currently Private</h2>
          <p className="text-yellow-600">Check back later when administrators make the data publicly available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className={`text-sm font-medium ${isPublicDataEnabled ? 'text-green-600' : 'text-gray-500'}`}>
          {isPublicDataEnabled ? 'Data is Public' : 'Data is Private'}
        </div>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Data Summary Card */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Data Summary</h2>
          <div className="space-y-4">
            <div>
              <p className="text-gray-600">Total Submissions</p>
              <p className="text-2xl font-bold">{stats.totalSubmissions}</p>
            </div>
            <div>
              <p className="text-gray-600">Latest Submission</p>
              <p className="text-lg">
                {stats.latestSubmission?.toLocaleDateString() || 'No submissions yet'}
              </p>
            </div>
          </div>
        </div>

        {/* Submissions by Asset Type */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Submissions by Asset Type</h2>
          <div className="space-y-2">
            {Object.entries(stats.submissionsByOption).map(([option, count]) => (
              <div key={option} className="flex justify-between items-center">
                <span className="text-gray-600 capitalize">{option}</span>
                <span className="font-semibold">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Submissions Table */}
      <div className="mt-8 bg-white rounded-lg shadow overflow-hidden">
        <h2 className="text-xl font-semibold p-6 border-b">Recent Submissions</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Agency
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Asset
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Files
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {submissions.map((submission) => (
                <tr key={submission.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {submission.timestamp?.toDate().toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {submission.data.agency.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {submission.data.asset.type}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {submission.data.description}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {submission.data.location || 'N/A'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {submission.files.length} file(s)
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
