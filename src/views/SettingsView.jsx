import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Settings as SettingsIcon, Bell, Mail, Database, Shield, Check, X } from 'lucide-react';

const Toggle = ({ active, onToggle }) => (
  <div 
    onClick={onToggle}
    style={{
      width: '44px',
      height: '22px',
      background: active ? 'var(--primary)' : 'rgba(255,255,255,0.1)',
      borderRadius: '11px',
      position: 'relative',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      border: '1px solid rgba(255,255,255,0.05)'
    }}
  >
    <div style={{
      width: '18px',
      height: '18px',
      background: 'white',
      borderRadius: '50%',
      position: 'absolute',
      top: '1px',
      left: active ? '23px' : '1px',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {active ? <Check size={10} color="var(--primary)" strokeWidth={3} /> : <X size={10} color="#94a3b8" strokeWidth={3} />}
    </div>
  </div>
);

const SettingsView = () => {
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('app-settings');
    return saved ? JSON.parse(saved) : {
      'Dashboard Refresh Interval': true,
      'Theme Preference': false,
      'Language': true,
      'Email Alerts': true,
      'Slack Integration': false,
      'Push Notifications': true,
      'Google Sheets Sync': true,
      'Gmail API Config': true,
      'Scraper Settings': false,
      'API Keys': true,
      'Access Control': false,
      'Audit Logs': true
    };
  });

  const [toast, setToast] = useState(null);

  useEffect(() => {
    localStorage.setItem('app-settings', JSON.stringify(settings));
  }, [settings]);

  const toggleSetting = (item) => {
    setSettings(prev => ({ ...prev, [item]: !prev[item] }));
    setToast(`${item} ${!settings[item] ? 'Enabled' : 'Disabled'}`);
    setTimeout(() => setToast(null), 2000);
  };

  const settingsGroups = [
    { 
      title: 'General', 
      icon: <SettingsIcon size={20} />, 
      items: ['Dashboard Refresh Interval', 'Theme Preference', 'Language'] 
    },
    { 
      title: 'Notifications', 
      icon: <Bell size={20} />, 
      items: ['Email Alerts', 'Slack Integration', 'Push Notifications'] 
    },
    { 
      title: 'Data Sources', 
      icon: <Database size={20} />, 
      items: ['Google Sheets Sync', 'Gmail API Config', 'Scraper Settings'] 
    },
    { 
      title: 'Security', 
      icon: <Shield size={20} />, 
      items: ['API Keys', 'Access Control', 'Audit Logs'] 
    }
  ];

  return (
    <div style={{ padding: '0 40px', position: 'relative' }}>
      {toast && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          style={{
            position: 'absolute',
            top: '-60px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'var(--primary)',
            padding: '8px 20px',
            borderRadius: '99px',
            fontSize: '0.875rem',
            fontWeight: 600,
            zIndex: 100,
            boxShadow: '0 10px 25px rgba(99, 102, 241, 0.4)'
          }}
        >
          {toast}
        </motion.div>
      )}

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}
      >
        {settingsGroups.map((group, i) => (
          <div key={i} className="glass" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', color: 'var(--primary)' }}>
              {group.icon}
              <h3 style={{ fontSize: '1.25rem', color: 'white' }}>{group.title}</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {group.items.map((item, j) => (
                <div key={j} className="glass-hover" style={{ 
                  padding: '16px', 
                  borderRadius: '12px', 
                  background: 'rgba(255,255,255,0.02)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontWeight: 500 }}>{item}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {settings[item] ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  <Toggle active={settings[item]} onToggle={() => toggleSetting(item)} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SettingsView;
