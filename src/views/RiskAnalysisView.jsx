import React from 'react';
import { motion } from 'framer-motion';
import { mockAlerts } from '../data/mockData';
import AlertTable from '../components/AlertTable';
import { ShieldAlert, AlertTriangle, Info } from 'lucide-react';

const RiskAnalysisView = () => {
  const riskAlerts = mockAlerts.filter(a => a.alert || a.sentiment === 'Negative' || a.category === 'Controversy');

  return (
    <div style={{ padding: '0 40px' }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}
      >
        <div className="glass" style={{ padding: '24px', display: 'flex', gap: '20px', alignItems: 'center', borderLeft: '4px solid var(--danger)' }}>
          <div style={{ background: 'rgba(239, 68, 68, 0.1)', color: 'var(--danger)', padding: '12px', borderRadius: '12px' }}>
            <AlertTriangle size={32} />
          </div>
          <div>
            <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>High Risk detected</div>
            <div style={{ color: 'var(--text-muted)' }}>3 pricing controversies in the last 48 hours</div>
          </div>
        </div>
        <div className="glass" style={{ padding: '24px', display: 'flex', gap: '20px', alignItems: 'center', borderLeft: '4px solid var(--warning)' }}>
          <div style={{ background: 'rgba(245, 158, 11, 0.1)', color: 'var(--warning)', padding: '12px', borderRadius: '12px' }}>
            <ShieldAlert size={32} />
          </div>
          <div>
            <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>Market Sensitivity</div>
            <div style={{ color: 'var(--text-muted)' }}>Sentiment toward Flipkart is trending down</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h3 style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          Critical Risk Items
          <span style={{ background: 'var(--danger)', color: 'white', fontSize: '0.75rem', padding: '2px 8px', borderRadius: '99px' }}>{riskAlerts.length}</span>
        </h3>
        <AlertTable alerts={riskAlerts} />
      </motion.div>
    </div>
  );
};

export default RiskAnalysisView;
