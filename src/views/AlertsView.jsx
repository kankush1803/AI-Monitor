import React, { useState } from 'react';
import AlertTable from '../components/AlertTable';
import { motion } from 'framer-motion';
import { Filter, Search } from 'lucide-react';

const AlertsView = ({ alerts }) => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filteredAlerts = alerts.filter(alert => {
    const matchesFilter = filter === 'All' || alert.category === filter;
    const matchesSearch = alert.subject.toLowerCase().includes(search.toLowerCase()) || 
                          alert.competitor.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const categories = ['All', 'Pricing', 'Launch', 'Feature', 'Controversy', 'General'];

  return (
    <div style={{ padding: '0 40px' }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ marginBottom: '24px', display: 'flex', gap: '16px', alignItems: 'center' }}
      >
        <div className="glass" style={{ flex: 1, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Search size={20} color="var(--text-muted)" />
          <input 
            type="text" 
            placeholder="Search all alerts..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ background: 'transparent', border: 'none', outline: 'none', color: 'white', width: '100%', fontSize: '1rem' }}
          />
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`glass glass-hover ${filter === cat ? 'active' : ''}`}
              style={{
                padding: '10px 16px',
                border: 'none',
                color: filter === cat ? 'var(--primary)' : 'var(--text-muted)',
                background: filter === cat ? 'rgba(99, 102, 241, 0.1)' : 'var(--glass-bg)',
                fontWeight: 600,
                cursor: 'pointer',
                borderRadius: '12px'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <AlertTable alerts={filteredAlerts} />
      </motion.div>
    </div>
  );
};

export default AlertsView;
