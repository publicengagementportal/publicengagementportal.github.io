import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const PollutionForum = () => {
  const [posts, setPosts] = useState<{ id: string; parish?: string; city?: string; pollutionType?: string; severity?: string; comments?: string; timestamp?: string; createdAt?: Date }[]>([]);
  const [statsFilter, setStatsFilter] = useState({ category: 'Parish', value: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsRef = collection(db, 'pollutionForumPosts');
        const q = query(postsRef, orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const postsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setPosts(postsData);
      } catch (error) {
        console.error('Error fetching posts:', error);
        alert('Failed to load posts. Please refresh the page.');
      }
    };
    fetchPosts();
  }, []);

  const handlePostSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      parish: HTMLSelectElement;
      city: HTMLInputElement;
      pollutionType: HTMLSelectElement;
      severity: HTMLSelectElement;
      comments: HTMLTextAreaElement;
    };

    try {
      const newPost = {
        parish: formElements.parish.value,
        city: formElements.city.value,
        pollutionType: formElements.pollutionType.value,
        severity: formElements.severity.value,
        comments: formElements.comments.value,
        timestamp: new Date().toISOString(),
        createdAt: new Date(),
      };

      const docRef = await addDoc(collection(db, 'pollutionForumPosts'), newPost);
      setPosts((prevPosts) => [{...newPost, id: docRef.id}, ...prevPosts]);
      form.reset();
      alert('Post submitted successfully!');
    } catch (error) {
      console.error('Error submitting post:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      alert(`Failed to submit post. Please try again. Error: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  const filteredStats = posts.filter((post) =>
    statsFilter.value ? post[statsFilter.category.toLowerCase() as keyof typeof post] === statsFilter.value : true
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left: Posts Section */}
      <div className="w-2/3 p-6">
        <h1 className="text-3xl font-bold mb-4">Pollution Forum</h1>
        <p className="mb-4">Welcome to the Pollution discussion forum. Share your concerns and observations about pollution here.</p>
        <button
          onClick={() => navigate('/government')}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded mb-6 transition duration-200"
        >
          Back to Government Page
        </button>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Submit a Post</h2>
          <form onSubmit={handlePostSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Parish:</label>
              <select 
                name="parish" 
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Parish</option>
                <option value="Kingston">Kingston</option>
                <option value="St. Andrew">St. Andrew</option>
                <option value="St. Thomas">St. Thomas</option>
                <option value="St. Catherine">St. Catherine</option>
                <option value="St. Ann">St. Ann</option>
                <option value="Trelawny">Trelawny</option>
                <option value="Hanover">Hanover</option>
                <option value="St. James">St. James</option>
                <option value="Westmoreland">Westmoreland</option>
                <option value="Clarendon">Clarendon</option>
                <option value="Manchester">Manchester</option>
                <option value="St. Elizabeth">St. Elizabeth</option>
                <option value="Portland">Portland</option>
                <option value="St. Mary">St. Mary</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">City:</label>
              <input 
                type="text" 
                name="city" 
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Type of Pollution:</label>
              <select 
                name="pollutionType" 
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Type</option>
                <option value="Air">Air Pollution</option>
                <option value="Water">Water Pollution</option>
                <option value="Noise">Noise Pollution</option>
                <option value="Waste">Waste/Garbage</option>
                <option value="Soil">Soil Contamination</option>
                <option value="Light">Light Pollution</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Severity of Pollution:</label>
              <select 
                name="severity" 
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Severity</option>
                <option value="Critical">Critical</option>
                <option value="Severe">Severe</option>
                <option value="Moderate">Moderate</option>
                <option value="Minor">Minor</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Comments:</label>
              <textarea 
                name="comments" 
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[100px]"
                placeholder="Describe the pollution issue in detail..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition duration-200 disabled:bg-blue-300 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit Post'}
            </button>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Recent Reports</h2>
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="border border-gray-200 rounded-lg p-4">
                <p className="font-medium">Parish: {post.parish}</p>
                <p>City: {post.city}</p>
                <p>Type: {post.pollutionType}</p>
                <p>Severity: {post.severity}</p>
                <p className="mt-2">Comments: {post.comments}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Statistics Section */}
      <div className="w-1/3 p-6 bg-gray-100">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Statistics</h2>
          <div className="space-y-4 mb-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Filter By:</label>
              <select
                value={statsFilter.category}
                onChange={(e) => setStatsFilter({ ...statsFilter, category: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Parish">Parish</option>
                <option value="City">City</option>
                <option value="PollutionType">Pollution Type</option>
                <option value="Severity">Severity</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Filter Value:</label>
              <input
                type="text"
                placeholder={`Filter by ${statsFilter.category}`}
                value={statsFilter.value}
                onChange={(e) => setStatsFilter({ ...statsFilter, value: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="space-y-4">
            {filteredStats.map((post, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <p className="font-medium">Parish: {post.parish}</p>
                <p>City: {post.city}</p>
                <p>Type: {post.pollutionType}</p>
                <p>Severity: {post.severity}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PollutionForum;