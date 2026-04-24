import React from 'react';
import { motion } from 'framer-motion';
import { ChartsSection } from '../components/Analytics';
import { stats } from '../data/mockData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const AnalyticsView = () => {
  const categoryData = [
    { name: 'Pricing', value: 12 },
    { name: 'Launch', value: 19 },
    { name: 'Feature', value: 8 },
    { name: 'Controversy', value: 3 },
  ];

  const COLORS = ['#f59e0b', '#6366f1', '#0ea5e9', '#ef4444'];

  return (
    <div style={{ padding: '0 40px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <ChartsSection 
          sentimentData={stats.sentimentTrend} 
          competitorData={stats.competitorSplit} 
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass"
        style={{ padding: '24px', height: '400px', marginTop: '24px' }}
      >
        <h3 style={{ marginBottom: '24px' }}>Alert Volume by Category</h3>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart data={categoryData}>
            <XAxis dataKey="name" stroke="#64748b" axisLine={false} tickLine={false} />
            <YAxis stroke="#64748b" axisLine={false} tickLine={false} />
            <Tooltip 
              cursor={{ fill: 'rgba(255,255,255,0.05)' }}
              contentStyle={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
            />
            <Bar dataKey="value" radius={[8, 8, 0, 0]}>
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
};

export default AnalyticsView;
