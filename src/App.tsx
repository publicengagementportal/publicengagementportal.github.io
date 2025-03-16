import { ClerkProvider } from '@clerk/clerk-react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import GovernmentPage from './GovernmentPage';
import RoadsForum from './forums/RoadsForum';
import StoplightsForum from './forums/StoplightsForum';
import StreetlightsForum from './forums/StreetlightsForum';
import ATMsForum from './forums/ATMsForum';
import PollutionForum from './forums/PollutionForum';

const CLERK_PUBLISHABLE_KEY = 'pk_test_bmV4dC13YXJ0aG9nLTc4LmNsZXJrLmFjY291bnRzLmRldiQ';

function App() {
  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/government" element={<GovernmentPage />} />
            <Route path="/roads-forum" element={<RoadsForum />} />
            <Route path="/stoplights-forum" element={<StoplightsForum />} />
            <Route path="/streetlights-forum" element={<StreetlightsForum />} />
            <Route path="/atms-forum" element={<ATMsForum />} />
            <Route path="/pollution-forum" element={<PollutionForum />} />
          </Routes>
        </div>
      </Router>
    </ClerkProvider>
  );
}

export default App;