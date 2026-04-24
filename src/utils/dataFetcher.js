/**
 * Utility to fetch and parse Google Sheets data
 * Sheet ID: 1b6s6TVYxnGPPo3ky9hNkAZzLlCDbSGbHJf-e-lIBZT8
 */

const SHEET_ID = "1b6s6TVYxnGPPo3ky9hNkAZzLlCDbSGbHJf-e-lIBZT8";
const GIZ_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;

const parseGoogleDate = (dateStr) => {
  if (!dateStr) return new Date().toISOString();
  if (typeof dateStr !== 'string') return dateStr;

  // Handle Date(2024, 3, 24) format
  if (dateStr.startsWith('Date(')) {
    const parts = dateStr.match(/\d+/g);
    if (parts) {
      // Month is 0-indexed in JS Date, but also in Google's output? 
      // Actually Google's output is 0-indexed for months.
      return new Date(parts[0], parts[1], parts[2], parts[3] || 0, parts[4] || 0).toISOString();
    }
  }

  // Handle strings like "24 April 2026"
  const parsed = new Date(dateStr);
  if (!isNaN(parsed)) return parsed.toISOString();

  return dateStr; // Fallback to raw string
};

export const fetchSheetAlerts = async () => {
  try {
    const response = await fetch(GIZ_URL);
    const text = await response.text();
    
    const jsonStr = text.substring(text.indexOf("{"), text.lastIndexOf("}") + 1);
    const data = JSON.parse(jsonStr);

    const rows = data.table.rows;
    const cols = data.table.cols;

    const colMap = {};
    cols.forEach((col, i) => {
      if (col.label) colMap[col.label.trim()] = i;
    });

    return rows.map((row, index) => {
      const getVal = (label) => {
        const idx = colMap[label];
        if (idx === undefined || !row.c[idx]) return null;
        return row.c[idx].v;
      };

      const rawDate = getVal("Date Received");

      return {
        id: getVal("Message ID") || `alert-${index}`,
        date: parseGoogleDate(rawDate),
        competitor: getVal("Competitor Name") || "Unknown",
        subject: getVal("Alert Subject") || "No Subject",
        snippet: getVal("Alert Snippet") || "",
        url: getVal("Source URL") || "#",
        category: getVal("Category") || "General",
        price: getVal("Extracted Price") || null,
        sentiment: getVal("Sentiment") || "Neutral",
        alert: getVal("Alert Trigger") === true || getVal("Alert Trigger") === "TRUE"
      };
    }).reverse();
  } catch (error) {
    console.error("Failed to fetch sheet data:", error);
    return [];
  }
};

export const calculateStats = (alerts) => {
  const total = alerts.length;
  const highPriority = alerts.filter(a => a.alert).length;
  const positive = alerts.filter(a => a.sentiment === 'Positive').length;
  const positivePct = total > 0 ? Math.round((positive / total) * 100) : 0;

  const comps = alerts.reduce((acc, a) => {
    acc[a.competitor] = (acc[a.competitor] || 0) + 1;
    return acc;
  }, {});

  const compSplit = Object.entries(comps).map(([name, value]) => ({ name, value }));

  const trend = alerts.slice(0, 5).map((a, i) => ({
    name: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'][i] || 'Day',
    pos: a.sentiment === 'Positive' ? 1 : 0,
    neg: a.sentiment === 'Negative' ? 1 : 0
  })).reverse();

  return {
    totalAlerts: total,
    highPriority: highPriority,
    positiveSentiment: `${positivePct}%`,
    competitorSplit: compSplit,
    sentimentTrend: trend
  };
};
