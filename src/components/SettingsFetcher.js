import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ColorTiles from './ColorTiles';

const SettingsFetcher = () => {
  const [settings, setSettings] = useState({ colors: {}, appName: '' });
//pulling setting form backend
  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_ENDPOINT || 'https://localhost:3001/api/v1/settings'
    axios.post(apiUrl)
      .then(response => setSettings(response.data))
      .catch(error => console.error('Failed to fetch settings:', error));
  }, []);

  return (
    <div>
      <h1>{settings.appName}</h1>
      <ColorTiles colors={settings.colors} />
    </div>
  );
};

export default SettingsFetcher;
