import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TripProvider } from './context/TripContext';
import { AuthProvider } from './context/AuthContext';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import TripWizard from './pages/TripWizard';
import Confirmation from './pages/Confirmation';
import Dashboard from './pages/Dashboard';
import Packages from './pages/Packages';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MyTrips from './pages/MyTrips';

import HelpCenter from './pages/HelpCenter';
import Privacy from './pages/Privacy';
import Cancellation from './pages/Cancellation';
import Terms from './pages/Terms';

import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <TripProvider>
          <div className="min-h-screen bg-dark-bg flex flex-col">

            <Navbar />

            <div className="flex-grow">
              <Routes>

                {/* 🔐 PROTECTED ROUTES */}
                <Route path="/" element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                } />

                <Route path="/plan" element={
                  <ProtectedRoute>
                    <TripWizard />
                  </ProtectedRoute>
                } />

                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } />

                <Route path="/my-trips" element={
                  <ProtectedRoute>
                    <MyTrips />
                  </ProtectedRoute>
                } />

                <Route path="/confirmation" element={
                  <ProtectedRoute>
                    <Confirmation />
                  </ProtectedRoute>
                } />

                <Route path="/packages" element={
                  <ProtectedRoute>
                    <Packages />
                  </ProtectedRoute>
                } />

                {/* 🔓 PUBLIC ROUTES */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                {/* Footer Pages */}
                <Route path="/help" element={<HelpCenter />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/cancellation" element={<Cancellation />} />
                <Route path="/terms" element={<Terms />} />

              </Routes>
            </div>

            <Footer />

          </div>
        </TripProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;