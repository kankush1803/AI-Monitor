import React from 'react';
import { 
  LayoutDashboard, Bell, BarChart3, Settings, ShieldAlert, 
  Search, Download, Loader2, Cpu, FileText, Info, PlayCircle 
} from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'Summary', icon: <FileText size={20} />, label: 'Executive Summary' },
    { id: 'Dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard Overview' },
    { id: 'Alerts', icon: <Bell size={20} />, label: 'Live Alerts', count: 12 },
    { id: 'Analytics', icon: <BarChart3 size={20} />, label: 'Market Analytics' },
    { id: 'Risk', icon: <ShieldAlert size={20} />, label: 'Risk Analysis' },
    { id: 'Demo', icon: <PlayCircle size={20} />, label: 'System Demo' },
    { id: 'Ethics', icon: <Info size={20} />, label: 'Ethics & Limits' },
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
        marginBottom: '30px',
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
        </div>
        <div>
          <div style={{ 
            fontSize: '1.1rem', 
            fontWeight: 800, 
            letterSpacing: '-0.02em',
            color: 'white',
            lineHeight: 1
          }}>
            AI MONITOR
          </div>
          <div style={{ fontSize: '0.6rem', color: 'var(--primary)', fontWeight: 700, letterSpacing: '0.1em', marginTop: '4px' }}>
            COMPETITIVE SUITE
          </div>
        </div>
      </div>

      <nav style={{ flex: 1, overflowY: 'auto' }}>
        {menuItems.map((item) => (
          <div 
            key={item.id} 
            onClick={() => setActiveTab(item.id)}
            className={`nav-item glass-hover ${activeTab === item.id ? 'active' : ''}`} 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 16px',
              borderRadius: '10px',
              marginBottom: '6px',
              cursor: 'pointer',
              color: activeTab === item.id ? 'var(--primary)' : 'var(--text-muted)',
              background: activeTab === item.id ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
              fontSize: '0.9rem'
            }}
          >
            {item.icon}
            <span style={{ fontWeight: 500 }}>{item.label}</span>
            {item.count && (
              <span style={{
                marginLeft: 'auto',
                background: 'var(--danger)',
                color: 'white',
                fontSize: '0.65rem',
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
        marginTop: '20px'
      }}>
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          background: 'linear-gradient(45deg, var(--primary), var(--info))'
        }} />
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 600, textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Ashish Bisht</div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Lead Analyst</div>
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
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{title}</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Automated Competitive Monitoring System</p>
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div className="glass" style={{
          padding: '8px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          width: '250px'
        }}>
          <Search size={16} color="var(--text-muted)" />
          <input 
            type="text" 
            placeholder="Search report..." 
            style={{
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'white',
              width: '100%',
              fontSize: '0.875rem'
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
            fontSize: '0.875rem'
          }}
        >
          {isExporting ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />}
          {isExporting ? 'Exporting...' : 'Export PDF'}
        </button>
      </div>
    </header>
  );
};

export { Sidebar, Header };
