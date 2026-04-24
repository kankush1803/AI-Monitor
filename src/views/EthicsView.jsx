import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Eye, Lock, Globe, AlertCircle } from 'lucide-react';

const EthicsView = () => {
  const sections = [
    {
      title: 'Ethical Monitoring',
      icon: <Eye size={24} color="#6366f1" />,
      content: 'Our system adheres to strict public-access guidelines. We only monitor publicly available Google Alerts and news feeds, ensuring no private data is accessed or processed.'
    },
    {
      title: 'Data Privacy',
      icon: <Lock size={24} color="#10b981" />,
      content: 'User credentials for Google Sheets and Gmail are handled via OAuth2. No sensitive passwords are stored within the application database.'
    },
    {
      title: 'AI Transparency',
      icon: <Globe size={24} color="#0ea5e9" />,
      content: 'Sentiment analysis is performed by LLMs (GPT/Groq). We maintain logs of AI decision-making logic to ensure classification remains objective and unbiased.'
    },
    {
      title: 'System Limitations',
      icon: <AlertCircle size={24} color="#f59e0b" />,
      content: 'The system relies on Google Alerts latency. There may be a delay between a market event and its appearance in the news feed. AI sentiment is probabilistic and may require human verification for edge cases.'
    }
  ];

  return (
    <div style={{ padding: '0 40px' }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass" 
        style={{ padding: '40px', marginBottom: '30px' }}
      >
        <h2 style={{ fontSize: '1.75rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <ShieldAlert size={32} color="var(--primary)" />
          Ethics & System Limitations
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>
          The AI Competitive Monitoring Dashboard is designed as an assistive tool for market analysts. 
          We prioritize data integrity and ethical scraping practices in all automated workflows.
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        {sections.map((section, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="glass" 
            style={{ padding: '30px', background: 'rgba(255,255,255,0.01)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ padding: '12px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
                {section.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem' }}>{section.title}</h3>
            </div>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.95rem' }}>
              {section.content}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EthicsView;
