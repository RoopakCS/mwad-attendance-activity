import { useState } from 'react';
import '../../styles/DashboardPages.css';

const Settings = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    darkMode: false,
    autoSave: true,
    language: 'en',
  });

  const handleToggle = (setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handleLanguageChange = (e) => {
    setSettings(prev => ({
      ...prev,
      language: e.target.value
    }));
  };

  const handleSave = () => {
    alert('Settings saved successfully!');
  };

  return (
    <div className="dashboard-page">
      <h1>Settings</h1>
      
      <div className="content-card">
        <h3>Notification Preferences</h3>
        <div className="settings-group">
          <div className="setting-item">
            <div className="setting-info">
              <label>Email Notifications</label>
              <p>Receive notifications via email</p>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings.emailNotifications}
                onChange={() => handleToggle('emailNotifications')}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <label>Push Notifications</label>
              <p>Receive push notifications in browser</p>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings.pushNotifications}
                onChange={() => handleToggle('pushNotifications')}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </div>
      </div>

      <div className="content-card">
        <h3>Appearance</h3>
        <div className="settings-group">
          <div className="setting-item">
            <div className="setting-info">
              <label>Dark Mode</label>
              <p>Enable dark theme</p>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings.darkMode}
                onChange={() => handleToggle('darkMode')}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </div>
      </div>

      <div className="content-card">
        <h3>General Settings</h3>
        <div className="settings-group">
          <div className="setting-item">
            <div className="setting-info">
              <label>Auto Save</label>
              <p>Automatically save your work</p>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings.autoSave}
                onChange={() => handleToggle('autoSave')}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="setting-item full-width">
            <div className="setting-info">
              <label htmlFor="language">Language</label>
              <p>Choose your preferred language</p>
            </div>
            <select 
              id="language"
              value={settings.language}
              onChange={handleLanguageChange}
              className="language-select"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </div>
        </div>
      </div>

      <button className="save-settings-btn" onClick={handleSave}>
        Save Settings
      </button>
    </div>
  );
};

export default Settings;
