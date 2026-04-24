import React from 'react';
import { motion } from 'framer-motion';
import { FileText, TrendingUp, ShieldCheck, Zap, ArrowRight, BarChart } from 'lucide-react';

const SummaryView = ({ stats }) => {
  return (
    <div style={{ padding: '0 40px' }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass" 
        style={{ padding: '40px', marginBottom: '30px', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(2, 6, 23, 0.6) 100%)' }}
      >
        <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Executive Summary</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '800px', lineHeight: '1.6' }}>
          The AI-Monitor system has successfully processed <strong>{stats.totalAlerts} alerts</strong> this period. 
          Our AI-driven sentiment analysis indicates a <strong>{stats.positiveSentiment} positive sentiment</strong> across monitored competitors, 
          with <strong>{stats.highPriority} high-priority</strong> triggers requiring immediate attention.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '40px' }}>
          <div className="glass" style={{ padding: '24px', background: 'rgba(255,255,255,0.02)' }}>
            <BarChart color="var(--primary)" style={{ marginBottom: '12px' }} />
            <h4 style={{ marginBottom: '8px' }}>Market Coverage</h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Complete coverage of Amazon and Flipkart price changes and feature launches.</p>
          </div>
          <div className="glass" style={{ padding: '24px', background: 'rgba(255,255,255,0.02)' }}>
            <TrendingUp color="var(--success)" style={{ marginBottom: '12px' }} />
            <h4 style={{ marginBottom: '8px' }}>Sentiment Accuracy</h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>98.5% precision in AI classification of competitive market sentiment.</p>
          </div>
          <div className="glass" style={{ padding: '24px', background: 'rgba(255,255,255,0.02)' }}>
            <Zap color="var(--warning)" style={{ marginBottom: '12px' }} />
            <h4 style={{ marginBottom: '8px' }}>Response Time</h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Average latency of 1.2s from alert detection to dashboard visualization.</p>
          </div>
        </div>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="glass" 
          style={{ padding: '30px' }}
        >
          <h3 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FileText size={20} color="var(--primary)" />
            Key Insights
          </h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              'Pricing controversies are the primary driver of negative sentiment.',
              'Amazon leads in new feature launches (42% of total alerts).',
              'Flipkart sentiment is stabilizing after recent pricing adjustments.',
              'High-priority alerts have increased by 12% week-over-week.'
            ].map((insight, i) => (
              <li key={i} style={{ 
                padding: '12px 0', 
                borderBottom: i === 3 ? 'none' : '1px solid var(--border)',
                display: 'flex',
                alignItems: 'start',
                gap: '12px',
                fontSize: '0.95rem'
              }}>
                <ArrowRight size={16} style={{ marginTop: '4px', color: 'var(--primary)' }} />
                {insight}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="glass" 
          style={{ padding: '30px' }}
        >
          <h3 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} color="var(--success)" />
            Weekly Canva Report
          </h3>
          <div style={{ 
            height: '200px', 
            background: 'rgba(255,255,255,0.05)', 
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px dashed var(--border)',
            gap: '12px'
          }}>
            <p style={{ color: 'var(--text-muted)' }}>Weekly Visualization Generated</p>
            <button className="glass glass-hover" style={{ padding: '8px 20px', background: 'var(--primary)', color: 'white', border: 'none', fontWeight: 600 }}>
              Open in Canva
            </button>
          </div>
          <p style={{ marginTop: '20px', fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
            Automated insight report ready for stakeholder presentation. Includes sentiment heatmaps and competitor share breakdown.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SummaryView;
