import { Outlet, NavLink } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="dashboard-sidebar">
        <h2>Dashboard</h2>
        <nav className="dashboard-nav">
          <NavLink 
            to="/dashboard/profile" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Profile
          </NavLink>
          <NavLink 
            to="/dashboard/settings" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Settings
          </NavLink>
          <NavLink 
            to="/dashboard/notifications" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Notifications
          </NavLink>
        </nav>
      </aside>
      
      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
