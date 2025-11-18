import { Navigate } from 'react-router-dom';

const DashboardHome = () => {
  return <Navigate to="/dashboard/profile" replace />;
};

export default DashboardHome;
