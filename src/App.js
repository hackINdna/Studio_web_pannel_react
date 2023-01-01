import React from 'react'
// import './App.css';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/dashboardPage';
import InboxPage from './components/inboxPage';
import JobPage from './components/jobsPage';
import JobAppliedPage from './components/jobsAppliedPage';
import JobAcceptedPage from './components/jobsAcceptedPage';
import JobShortPage from './components/jobsShortlistedPage';
import PostJobPage from './components/postJobPage';
import PromotePage from './components/promotePage';
import ConnectionPage from './components/connectionPage';
import InvitePage from './components/invitePage';
import ProfilePage from './components/profilePage';
import InterviewPage from './components/interviewPage';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/inbox" element={<InboxPage />} />
          <Route path="/job" element={<JobPage />} />
          <Route path="/job-applied" element={<JobAppliedPage />} />
          <Route path="/job-accepted" element={<JobAcceptedPage />} />
          <Route path="/job-short" element={<JobShortPage />} />
          <Route path="/post-job" element={<PostJobPage />} />
          <Route path="/job-description" element={<PromotePage />} />
          <Route path="/connection" element={<ConnectionPage />} />
          <Route path="/invite" element={<InvitePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/interview" element={<InterviewPage />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
