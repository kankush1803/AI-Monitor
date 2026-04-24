import React from 'react';
import { LayoutDashboard, Bell, BarChart3, Settings, ShieldAlert, Search, Download, Loader2, Cpu, Sparkles } from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'Dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { id: 'Alerts', icon: <Bell size={20} />, label: 'Alerts', count: 12 },
    { id: 'Analytics', icon: <BarChart3 size={20} />, label: 'Analytics' },
    { id: 'Risk', icon: <ShieldAlert size={20} />, label: 'Risk Analysis' },
    { id: 'Settings', icon: <Settings size={20} />, label: 'Settings' },
  ];

  return (
    <aside className="sidebar glass" style={{
      width: '260px',
      height: 'calc(100vh - 40px)',
      margin: '20px',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed',
      left: 0,
      top: 0,
      zIndex: 10
    }}>
      <div className="logo" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        marginBottom: '40px',
        cursor: 'pointer'
      }} onClick={() => setActiveTab('Dashboard')}>
        <div style={{
          width: '42px',
          height: '42px',
          background: 'linear-gradient(135deg, var(--primary) 0%, #a855f7 100%)',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          boxShadow: '0 8px 16px -4px rgba(99, 102, 241, 0.4)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <Cpu size={24} strokeWidth={2.5} />
          <div style={{
            position: 'absolute',
            top: '-10%',
            right: '-10%',
            width: '40%',
            height: '40%',
            background: 'rgba(255,255,255,0.2)',
            filter: 'blur(8px)',
            borderRadius: '50%'
          }} />
        </div>
        <div>
          <div style={{ 
            fontSize: '1.25rem', 
            fontWeight: 800, 
            letterSpacing: '-0.02em',
            background: 'linear-gradient(to right, #fff, #94a3b8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1
          }}>
            AI MONITOR
          </div>
          <div style={{ fontSize: '0.65rem', color: 'var(--primary)', fontWeight: 700, letterSpacing: '0.1em', marginTop: '4px' }}>
            COMPETITIVE SUITE
          </div>
        </div>
      </div>

      <nav style={{ flex: 1 }}>
        {menuItems.map((item) => (
          <div 
            key={item.id} 
            onClick={() => setActiveTab(item.id)}
            className={`nav-item glass-hover ${activeTab === item.id ? 'active' : ''}`} 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              borderRadius: '12px',
              marginBottom: '8px',
              cursor: 'pointer',
              color: activeTab === item.id ? 'var(--primary)' : 'var(--text-muted)',
              background: activeTab === item.id ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
              transition: 'all 0.2s ease'
            }}
          >
            {item.icon}
            <span style={{ fontWeight: 500 }}>{item.label}</span>
            {item.count && (
              <span style={{
                marginLeft: 'auto',
                background: 'var(--danger)',
                color: 'white',
                fontSize: '0.7rem',
                padding: '2px 6px',
                borderRadius: '6px'
              }}>{item.count}</span>
            )}
          </div>
        ))}
      </nav>

      <div className="user-profile glass" style={{
        padding: '12px',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginTop: 'auto'
      }}>
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          background: 'linear-gradient(45deg, var(--primary), var(--info))'
        }} />
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <div style={{ fontSize: '0.875rem', fontWeight: 600, textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Ashish Bisht</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Admin</div>
        </div>
      </div>
    </aside>
  );
};

const Header = ({ title, onExport, isExporting }) => {
  return (
    <header style={{
      padding: '24px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginLeft: '300px'
    }}>
      <div>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 700 }}>{title}</h1>
        <p style={{ color: 'var(--text-muted)' }}>Real-time insights from Google Alerts & AI Analysis</p>
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div className="glass" style={{
          padding: '8px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          width: '300px'
        }}>
          <Search size={18} color="var(--text-muted)" />
          <input 
            type="text" 
            placeholder="Search dashboard..." 
            style={{
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'white',
              width: '100%'
            }}
          />
        </div>
        <button 
          onClick={onExport}
          disabled={isExporting}
          className="glass glass-hover" 
          style={{
            padding: '10px 20px',
            background: isExporting ? 'var(--text-muted)' : 'var(--primary)',
            color: 'white',
            border: 'none',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            opacity: isExporting ? 0.7 : 1
          }}
        >
          {isExporting ? <Loader2 size={18} className="animate-spin" /> : <Download size={18} />}
          {isExporting ? 'Generating...' : 'Export PDF'}
        </button>
      </div>
    </header>
  );
};

export { Sidebar, Header };
