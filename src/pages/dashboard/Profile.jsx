import { useAuth } from '../../context/AuthContext';
import '../../styles/DashboardPages.css';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard-page">
      <h1>Profile</h1>
      <div className="content-card">
        <div className="profile-header">
          <div className="profile-avatar">
            {user?.username?.charAt(0).toUpperCase()}
          </div>
          <div className="profile-info">
            <h2>{user?.username}</h2>
            <p className="user-email">{user?.username}@example.com</p>
          </div>
        </div>

        <div className="profile-details">
          <div className="detail-row">
            <span className="detail-label">Username:</span>
            <span className="detail-value">{user?.username}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Email:</span>
            <span className="detail-value">{user?.username}@example.com</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Account Type:</span>
            <span className="detail-value">Standard User</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Logged In At:</span>
            <span className="detail-value">
              {user?.loggedInAt ? new Date(user.loggedInAt).toLocaleString() : 'N/A'}
            </span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Status:</span>
            <span className="detail-value status-active">Active</span>
          </div>
        </div>

        <button className="edit-profile-btn">Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile;
