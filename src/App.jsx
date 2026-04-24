import React, { useState } from 'react';
import { Sidebar, Header } from './components/Navigation';
import DashboardView from './views/DashboardView';
import AlertsView from './views/AlertsView';
import AnalyticsView from './views/AnalyticsView';
import RiskAnalysisView from './views/RiskAnalysisView';
import SettingsView from './views/SettingsView';
import { exportToPdf } from './utils/exportPdf';

function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    setIsExporting(true);
    const success = await exportToPdf('dashboard-content', `${activeTab}_Report.pdf`);
    setIsExporting(false);
    if (success) {
      alert('Report exported successfully!');
    }
  };

  const renderView = () => {
    switch (activeTab) {
      case 'Dashboard':
        return <DashboardView />;
      case 'Alerts':
        return <AlertsView />;
      case 'Analytics':
        return <AnalyticsView />;
      case 'Risk':
        return <RiskAnalysisView />;
      case 'Settings':
        return <SettingsView />;
      default:
        return <DashboardView />;
    }
  };

  const getTitle = () => {
    switch (activeTab) {
      case 'Dashboard': return 'Overview';
      case 'Alerts': return 'All Alerts';
      case 'Analytics': return 'Deep Analytics';
      case 'Risk': return 'Risk Assessment';
      case 'Settings': return 'System Settings';
      default: return 'Dashboard';
    }
  };

  return (
    <div className="app-container" style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main id="dashboard-content" style={{ 
        flex: 1, 
        marginLeft: '300px', 
        paddingBottom: '40px',
        background: 'var(--bg-main)', // Ensure background is captured in PDF
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
