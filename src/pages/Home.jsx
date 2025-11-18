import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Home.css';

const Home = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome!</h1>
        <p className="subtitle">
          A modern Single Page Application with protected routing and nested navigation
        </p>
        
        {isAuthenticated ? (
          <div className="welcome-card">
            <h2>Hello, {user?.username}!</h2>
            <p>You are logged in and can access the dashboard.</p>
            <Link to="/dashboard" className="cta-button">
              Go to Dashboard
            </Link>
          </div>
        ) : (
          <div className="welcome-card">
            <h2>Get Started</h2>
            <p>Login to access your personalized dashboard with profile, settings, and notifications.</p>
            <Link to="/login" className="cta-button">
              Login Now
            </Link>
          </div>
        )}

        <div className="features">
          <div className="feature-card">
            <h3>Protected Routes</h3>
            <p>Secure dashboard pages accessible only to authenticated users</p>
          </div>
          <div className="feature-card">
            <h3>Nested Routing</h3>
            <p>Organized dashboard with Profile, Settings, and Notifications</p>
          </div>
          <div className="feature-card">
            <h3>React Router</h3>
            <p>Fast navigation with React Router v6</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
