import { useState } from 'react';
import '../../styles/DashboardPages.css';

const Notifications = () => {
  const [notifications] = useState([
    {
      id: 1,
      type: 'info',
      title: 'Welcome!',
      message: 'Welcome to your dashboard. Explore the features available.',
      time: '2 minutes ago',
      read: false,
    },
    {
      id: 2,
      type: 'success',
      title: 'Profile Updated',
      message: 'Your profile information has been successfully updated.',
      time: '1 hour ago',
      read: false,
    },
    {
      id: 3,
      type: 'warning',
      title: 'Security Alert',
      message: 'New login detected from a different device.',
      time: '3 hours ago',
      read: true,
    },
    {
      id: 4,
      type: 'info',
      title: 'New Feature Available',
      message: 'Check out the new settings page with advanced options.',
      time: '1 day ago',
      read: true,
    },
    {
      id: 5,
      type: 'success',
      title: 'Password Changed',
      message: 'Your password was successfully changed.',
      time: '2 days ago',
      read: true,
    },
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const getNotificationIcon = (type) => {
    switch(type) {
      case 'success': return '✓';
      case 'warning': return '!';
      case 'error': return '✕';
      default: return 'i';
    }
  };

  return (
    <div className="dashboard-page">
      <div className="page-header">
        <h1>Notifications</h1>
        {unreadCount > 0 && (
          <span className="notification-badge">{unreadCount} unread</span>
        )}
      </div>

      <div className="notifications-container">
        {notifications.map((notification) => (
          <div 
            key={notification.id} 
            className={`notification-card ${notification.type} ${notification.read ? 'read' : 'unread'}`}
          >
            <div className="notification-icon">
              {getNotificationIcon(notification.type)}
            </div>
            <div className="notification-content">
              <div className="notification-header">
                <h3>{notification.title}</h3>
                <span className="notification-time">{notification.time}</span>
              </div>
              <p>{notification.message}</p>
            </div>
            {!notification.read && <div className="unread-indicator"></div>}
          </div>
        ))}
      </div>

      {notifications.length === 0 && (
        <div className="empty-state">
          <p>No notifications yet</p>
        </div>
      )}
    </div>
  );
};

export default Notifications;
