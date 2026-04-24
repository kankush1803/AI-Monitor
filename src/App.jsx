import React, { useState, useEffect } from 'react';
import { Sidebar, Header } from './components/Navigation';
import DashboardView from './views/DashboardView';
import AlertsView from './views/AlertsView';
import AnalyticsView from './views/AnalyticsView';
import RiskAnalysisView from './views/RiskAnalysisView';
import SettingsView from './views/SettingsView';
import SummaryView from './views/SummaryView';
import EthicsView from './views/EthicsView';
import SystemDemoView from './views/SystemDemoView';
import { exportToPdf } from './utils/exportPdf';
import { fetchSheetAlerts, calculateStats } from './utils/dataFetcher';
import { Loader2 } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('Summary');
  const [isExporting, setIsExporting] = useState(false);
  const [alerts, setAlerts] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    const data = await fetchSheetAlerts();
    setAlerts(data);
    setStats(calculateStats(data));
    setLoading(false);
  };

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const handleExport = async () => {
    setIsExporting(true);
    await exportToPdf('dashboard-content', `${activeTab}_Report.pdf`);
    setIsExporting(false);
  };

  const renderView = () => {
    if (loading) {
      return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60vh', color: 'var(--primary)' }}>
          <Loader2 size={48} className="animate-spin" />
          <span style={{ marginLeft: '16px', fontSize: '1.25rem', fontWeight: 600 }}>Syncing AI Monitoring System...</span>
        </div>
      );
    }

    const viewProps = { alerts, stats };

    switch (activeTab) {
      case 'Summary': return <SummaryView {...viewProps} />;
      case 'Dashboard': return <DashboardView {...viewProps} />;
      case 'Alerts': return <AlertsView {...viewProps} />;
      case 'Analytics': return <AnalyticsView {...viewProps} />;
      case 'Risk': return <RiskAnalysisView {...viewProps} />;
      case 'Demo': return <SystemDemoView />;
      case 'Ethics': return <EthicsView />;
      case 'Settings': return <SettingsView />;
      default: return <SummaryView {...viewProps} />;
    }
  };

  const getTitle = () => {
    switch (activeTab) {
      case 'Summary': return 'Executive Summary';
      case 'Dashboard': return 'System Overview';
      case 'Alerts': return 'Live Monitoring';
      case 'Analytics': return 'Market Insights';
      case 'Risk': return 'Risk Matrix';
      case 'Demo': return 'System Demonstration';
      case 'Ethics': return 'Compliance & Ethics';
      case 'Settings': return 'Configuration';
      default: return 'AI Monitor';
    }
  };

  return (
    <div className="app-container" style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main id="dashboard-content" style={{ 
        flex: 1, 
        marginLeft: '300px', 
        paddingBottom: '40px',
        background: 'var(--bg-main)',
        minHeight: '100vh'
      }}>
        <Header 
          title={getTitle()} 
          onExport={handleExport} 
          isExporting={isExporting} 
        />
        {renderView()}
      </main>
    </div>
  );
}

export default App;
