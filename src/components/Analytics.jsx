import React from 'react';
import { TrendingUp, AlertCircle, Zap, PieChart as PieIcon } from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell 
} from 'recharts';

const StatCard = ({ title, value, sub, icon, color }) => (
  <div className="glass glass-hover" style={{ padding: '24px', flex: 1 }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
      <div style={{ 
        width: '40px', height: '40px', borderRadius: '10px', 
        background: `${color}15`, color: color,
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        {icon}
      </div>
    </div>
    <div style={{ fontSize: '1.875rem', fontWeight: 700 }}>{value}</div>
    <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{title}</div>
    <div style={{ 
      fontSize: '0.75rem', marginTop: '12px', 
      color: sub.startsWith('+') ? 'var(--success)' : 'var(--text-muted)' 
    }}>
      {sub}
    </div>
  </div>
);

const ChartsSection = ({ sentimentData, competitorData }) => {
  const COLORS = ['#6366f1', '#0ea5e9', '#10b981', '#f59e0b'];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px', marginBottom: '24px' }}>
      <div className="glass" style={{ padding: '24px', height: '350px' }}>
        <h3 style={{ marginBottom: '20px', fontSize: '1.125rem' }}>Sentiment Trends</h3>
        <ResponsiveContainer width="100%" height="90%">
          <AreaChart data={sentimentData}>
            <defs>
              <linearGradient id="colorPos" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip 
              contentStyle={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
              itemStyle={{ color: '#fff' }}
            />
            <Area type="monotone" dataKey="pos" stroke="#6366f1" fillOpacity={1} fill="url(#colorPos)" />
            <Area type="monotone" dataKey="neg" stroke="#ef4444" fillOpacity={0} strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="glass" style={{ padding: '24px', height: '350px' }}>
        <h3 style={{ marginBottom: '20px', fontSize: '1.125rem' }}>Market Share</h3>
        <ResponsiveContainer width="100%" height="90%">
          <PieChart>
            <Pie
              data={competitorData}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {competitorData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export { StatCard, ChartsSection };
