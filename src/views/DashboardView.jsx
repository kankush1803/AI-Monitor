import React from 'react';
import { StatCard, ChartsSection } from '../components/Analytics';
import AlertTable from '../components/AlertTable';
import { TrendingUp, AlertCircle, Zap, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const DashboardView = ({ alerts, stats }) => {
  return (
    <div style={{ padding: '0 40px' }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '24px' }}
      >
        <StatCard 
          title="Total Alerts" 
          value={stats.totalAlerts} 
          sub="+12% from last week" 
          icon={<Activity size={20} />} 
          color="#6366f1"
        />
        <StatCard 
          title="High Priority" 
          value={stats.highPriority} 
          sub="Requires immediate action" 
          icon={<AlertCircle size={20} />} 
          color="#ef4444"
        />
        <StatCard 
          title="Positive Sentiment" 
          value={stats.positiveSentiment} 
          sub="Overall market tone" 
          icon={<TrendingUp size={20} />} 
          color="#10b981"
        />
        <StatCard 
          title="Extraction Speed" 
          value="1.2s" 
          sub="AI Processing Time" 
          icon={<Zap size={20} />} 
          color="#f59e0b"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <ChartsSection 
          sentimentData={stats.sentimentTrend} 
          competitorData={stats.competitorSplit} 
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <AlertTable alerts={alerts.slice(0, 5)} />
      </motion.div>
    </div>
  );
};

export default DashboardView;
