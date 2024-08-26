import React, { useState } from 'react';

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    siteName: '',
    email: '',
    theme: 'light',
    notifications: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSave = () => {
    console.log('Settings saved:', settings);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-0">
      <div 
        className="w-full bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507214617719-4a3daf41b9ac?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, minHeight: '50vh' }}
      >
        <div className="w-full h-[50vh] bg-gray-300 bg-opacity-45 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 text-center">Settings</h2>
          <p className="text-xl text-slate-600 text-center">Adjust your application settings below.</p>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center py-8">
        <div className="mx-auto max-w-xl px-4 py-8 text-center bg-white rounded-lg shadow-md">
         

          <div className="mt-8 space-y-6">
            {/* Notifications Settings */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Notifications</h2>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="notifications"
                  name="notifications"
                  checked={settings.notifications}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="notifications" className="text-gray-600">Enable notifications</label>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={handleSave}
                className="inline-block rounded bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
