import { useState, useEffect } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import { db } from "../../../infrastructure/firebase";
import type { DashboardStats } from "../domain/types";

interface Submission {
  id: string;
  userId: string;
  data: {
    dropdown: string;
    textInput: string;
  };
  files: string[];
  timestamp: any;
}

export default function DashboardPage() {
  const { userId } = useAuth();
  const { user } = useUser();
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isPublicVisible, setIsPublicVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState<DashboardStats>({
    totalSubmissions: 0,
    submissionsByOption: {},
  });

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        setIsLoading(true);
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
          const option = submission.data.dropdown;
          acc[option] = (acc[option] || 0) + 1;
          return acc;
        }, {} as Record<string, number>);

        setStats({
          totalSubmissions: submissionsData.length,
          latestSubmission: submissionsData[0]?.timestamp?.toDate(),
          submissionsByOption,
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch submissions");
      } finally {
        setIsLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  const togglePublicVisibility = () => {
    setIsPublicVisible(!isPublicVisible);
    // In a real app, you would also update this setting in the database
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        {user?.publicMetadata?.role === 'admin' && (
          <button
            onClick={togglePublicVisibility}
            className={`
              px-4 py-2 rounded-md text-sm font-medium
              ${isPublicVisible 
                ? 'bg-green-600 hover:bg-green-700 text-white'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }
            `}
          >
            {isPublicVisible ? 'Public Data Visible' : 'Public Data Hidden'}
          </button>
        )}
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

        {/* Submissions by Option Card */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Submissions by Option</h2>
          <div className="space-y-2">
            {Object.entries(stats.submissionsByOption).map(([option, count]) => (
              <div key={option} className="flex justify-between items-center">
                <span className="text-gray-600">{option}</span>
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
                  Option
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Information
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
                    {submission.data.dropdown}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {submission.data.textInput}
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
