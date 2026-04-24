import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, Mail, Bell, Code, CheckCircle, AlertTriangle } from 'lucide-react';

const SystemDemoView = () => {
  const triggerSteps = [
    { title: 'Detection', desc: 'Google Alert received in Gmail inbox.', status: 'success' },
    { title: 'Analysis', desc: 'LLM extracts pricing and classifies sentiment.', status: 'success' },
    { title: 'Filtering', desc: 'System checks if alert = true (Negative or Pricing).', status: 'success' },
    { title: 'Notification', desc: 'Gmail Alert triggered to ashish21bisht@gmail.com.', status: 'active' }
  ];

  return (
    <div style={{ padding: '0 40px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '24px' }}>
        {/* Trigger Demo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass" 
          style={{ padding: '30px' }}
        >
          <h3 style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Bell size={20} color="var(--primary)" />
            Automated Alert Trigger Logic
          </h3>
          
          <div style={{ position: 'relative', paddingLeft: '40px' }}>
            <div style={{ position: 'absolute', left: '19px', top: '10px', bottom: '10px', width: '2px', background: 'var(--border)' }} />
            {triggerSteps.map((step, i) => (
              <div key={i} style={{ marginBottom: '30px', position: 'relative' }}>
                <div style={{ 
                  position: 'absolute', left: '-30px', top: '0', 
                  width: '20px', height: '20px', borderRadius: '50%', 
                  background: step.status === 'success' ? 'var(--success)' : 'var(--primary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: `0 0 10px ${step.status === 'success' ? 'rgba(16,185,129,0.3)' : 'rgba(99,102,241,0.3)'}`
                }}>
                  {step.status === 'success' ? <CheckCircle size={12} color="white" /> : <div style={{ width: '6px', height: '6px', background: 'white', borderRadius: '50%' }} />}
                </div>
                <h4 style={{ color: step.status === 'active' ? 'white' : 'var(--text-muted)' }}>{step.title}</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '4px' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Sentiment Variation Demo */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass" 
          style={{ padding: '30px' }}
        >
          <h3 style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <PlayCircle size={20} color="var(--warning)" />
            Sentiment Variation Tests
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="glass" style={{ padding: '16px', background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.2)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--success)', fontWeight: 700 }}>TEST CASE #01</span>
                <span className="badge badge-positive">Positive</span>
              </div>
              <p style={{ fontSize: '0.875rem' }}>"Flipkart launches new eco-friendly packaging initiative."</p>
            </div>

            <div className="glass" style={{ padding: '16px', background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.2)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--danger)', fontWeight: 700 }}>TEST CASE #02</span>
                <span className="badge badge-negative">Negative</span>
              </div>
              <p style={{ fontSize: '0.875rem' }}>"Customers report massive delays in Amazon Prime shipping."</p>
              <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--danger)', fontSize: '0.75rem' }}>
                <AlertTriangle size={12} />
                TRIGGER SENT: EMAIL ALERT
              </div>
            </div>

            <div className="glass" style={{ padding: '16px', background: 'rgba(148,163,184,0.05)', border: '1px solid rgba(148,163,184,0.2)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700 }}>TEST CASE #03</span>
                <span className="badge badge-neutral">Neutral</span>
              </div>
              <p style={{ fontSize: '0.875rem' }}>"Amazon updates its seller terms and conditions."</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass" 
        style={{ padding: '30px', marginTop: '24px' }}
      >
        <h3 style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Code size={20} color="var(--info)" />
          LLM Prompt Architecture
        </h3>
        <pre style={{ 
          background: 'rgba(0,0,0,0.3)', 
          padding: '20px', 
          borderRadius: '12px', 
          fontSize: '0.85rem', 
          color: '#818cf8',
          overflowX: 'auto',
          border: '1px solid var(--border)'
        }}>
{`// Classification Logic
if (sentiment === "Negative" || category === "Pricing") {
  triggerAlert = true;
  dispatchEmail("ashish21bisht@gmail.com");
} else {
  triggerAlert = false;
  logToSheetOnly();
}`}
        </pre>
      </motion.div>
    </div>
  );
};

export default SystemDemoView;
