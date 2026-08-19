import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Layout & Route Protection
import DashboardLayout from './components/layout/DashboardLayout';
import ProtectedRoute from './routes/ProtectedRoute';

// Public Pages
import LandingPage from './pages/public/LandingPage';
import Login from './pages/public/Login';
import Register from './pages/public/Register';
import Unauthorized from './pages/public/Unauthorized';
import NotFound from './pages/public/NotFound';

// Student Portal Pages
import StudentDashboard from './pages/student/StudentDashboard';
import MockInterview from './pages/student/MockInterview';
import ResumeBuilder from './pages/student/ResumeBuilder';
import PremiumUpgrade from './pages/student/PremiumUpgrade';
import Jobs from './pages/student/Jobs';
import MyApplications from './pages/student/MyApplications';

// Recruiter Portal Pages
import RecruiterDashboard from './pages/recruiter/RecruiterDashboard';
import PostJob from './pages/recruiter/PostJob';
import Applicants from './pages/recruiter/Applicants';
import ManageJobs from './pages/recruiter/ManageJobs';

// Admin / Placement Cell Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageCompanies from './pages/admin/ManageCompanies';
import StudentDirectory from './pages/admin/StudentDirectory';
import PlacementReports from './pages/admin/PlacementReports';

function App() {
  return (
    <BrowserRouter>
      {/* Global Toast Notification Provider */}
      <Toaster 
        position="top-right" 
        toastOptions={{
          style: {
            background: '#0f172a',
            color: '#f8fafc',
            border: '1px solid #334155',
            fontSize: '13px',
            borderRadius: '12px'
          },
          success: {
            iconTheme: {
              primary: '#6366f1',
              secondary: '#ffffff',
            },
          },
        }}
      />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Protected Multi-Role Dashboard Shell */}
        <Route element={<DashboardLayout />}>
          
          {/* Student Routes */}
          <Route element={<ProtectedRoute allowedRoles={['student']} />}>
            <Route path="/student/dashboard" element={<StudentDashboard />} />
            <Route path="/student/interview" element={<MockInterview />} />
            <Route path="/student/resume-builder" element={<ResumeBuilder />} />
            <Route path="/student/jobs" element={<Jobs />} />
            <Route path="/student/applications" element={<MyApplications />} />
            <Route path="/student/premium" element={<PremiumUpgrade />} />
          </Route>

          {/* Recruiter / Hiring Partner Routes */}
          <Route element={<ProtectedRoute allowedRoles={['recruiter']} />}>
            <Route path="/recruiter/dashboard" element={<RecruiterDashboard />} />
            <Route path="/recruiter/post-job" element={<PostJob />} />
            <Route path="/recruiter/applicants" element={<Applicants />} />
            <Route path="/recruiter/drives" element={<ManageJobs />} />
          </Route>

          {/* Placement Cell / University Admin Routes */}
          <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/companies" element={<ManageCompanies />} />
            <Route path="/admin/students" element={<StudentDirectory />} />
            <Route path="/admin/reports" element={<PlacementReports />} />
          </Route>

        </Route>

        {/* Catch-all 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;