import React from 'react';
import { ExternalLink, ChevronRight, AlertTriangle } from 'lucide-react';

const AlertTable = ({ alerts }) => {
  const formatDate = (dateInput) => {
    try {
      const date = new Date(dateInput);
      if (isNaN(date.getTime())) return dateInput; // Return raw string if parsing fails
      
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit' 
      });
    } catch (e) {
      return dateInput;
    }
  };

  return (
    <div className="glass" style={{ overflow: 'hidden' }}>
      <div style={{ padding: '24px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ fontSize: '1.125rem' }}>Recent Alerts</h3>
        <div style={{ color: 'var(--primary)', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 600 }}>View All</div>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ background: 'rgba(255,255,255,0.02)' }}>
            <th style={{ padding: '16px 24px', color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>Date</th>
            <th style={{ padding: '16px 24px', color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>Competitor</th>
            <th style={{ padding: '16px 24px', color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>Alert Subject</th>
            <th style={{ padding: '16px 24px', color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>Sentiment</th>
            <th style={{ padding: '16px 24px', color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>Category</th>
            <th style={{ padding: '16px 24px', color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {alerts.map((alert, i) => (
            <tr key={alert.id} className="glass-hover" style={{ borderBottom: i === alerts.length - 1 ? 'none' : '1px solid var(--border)' }}>
              <td style={{ padding: '20px 24px', fontSize: '0.875rem' }}>
                {formatDate(alert.date)}
              </td>
              <td style={{ padding: '20px 24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ 
                    width: '24px', height: '24px', borderRadius: '4px', 
                    background: alert.competitor === 'Amazon' ? '#FF9900' : '#2874F0',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: 'white'
                  }}>
                    {alert.competitor[0]}
                  </div>
                  <span style={{ fontWeight: 500 }}>{alert.competitor}</span>
                </div>
              </td>
              <td style={{ padding: '20px 24px', maxWidth: '300px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {alert.alert && <AlertTriangle size={14} color="var(--danger)" />}
                  <div style={{ fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{alert.subject}</div>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginTop: '4px' }}>
                  {alert.snippet}
                </div>
              </td>
              <td style={{ padding: '20px 24px' }}>
                <span className={`badge badge-${alert.sentiment ? alert.sentiment.toLowerCase() : 'neutral'}`}>
                  {alert.sentiment}
                </span>
              </td>
              <td style={{ padding: '20px 24px' }}>
                <span className={`badge badge-${alert.category ? alert.category.toLowerCase() : 'general'}`}>
                  {alert.category}
                </span>
              </td>
              <td style={{ padding: '20px 24px' }}>
                <a href={alert.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
                  <ExternalLink size={18} className="glass-hover" />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlertTable;
