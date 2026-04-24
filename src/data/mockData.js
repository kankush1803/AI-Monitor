export const mockAlerts = [
  {
    id: "1",
    date: "2024-04-24T10:30:00Z",
    competitor: "Amazon",
    subject: "Amazon Prime Day Deals Announced",
    snippet: "Amazon has officially announced the dates for Prime Day 2024, featuring deep discounts on electronics and fashion.",
    url: "https://amazon.com/news",
    category: "Launch",
    price: null,
    sentiment: "Positive",
    alert: false
  },
  {
    id: "2",
    date: "2024-04-24T11:45:00Z",
    competitor: "Flipkart",
    subject: "Flipkart Plus Membership Price Hike",
    snippet: "Flipkart is increasing the annual fee for Plus membership by 20% starting next month, citing rising operational costs.",
    url: "https://flipkart.com/updates",
    category: "Pricing",
    price: 499,
    sentiment: "Negative",
    alert: true
  },
  {
    id: "3",
    date: "2024-04-23T15:20:00Z",
    competitor: "Amazon",
    subject: "New AI Shopping Assistant Rollout",
    snippet: "Amazon is rolling out a new AI-powered shopping assistant to help customers find products using natural language queries.",
    url: "https://techcrunch.com/amazon-ai",
    category: "Feature",
    price: null,
    sentiment: "Positive",
    alert: false
  },
  {
    id: "4",
    date: "2024-04-23T09:10:00Z",
    competitor: "Flipkart",
    subject: "Flipkart Faces Regulatory Scrutiny",
    snippet: "Regulatory bodies are investigating Flipkart's dynamic pricing algorithms following complaints of unfair practices.",
    url: "https://reuters.com/flipkart-news",
    category: "Controversy",
    price: null,
    sentiment: "Negative",
    alert: true
  },
  {
    id: "5",
    date: "2024-04-22T14:00:00Z",
    competitor: "Amazon",
    subject: "Amazon Logistics Expansion in SE Asia",
    snippet: "Amazon is investing $2B to expand its logistics network across Southeast Asia to improve delivery speeds.",
    url: "https://bloomberg.com/amazon",
    category: "General",
    price: null,
    sentiment: "Neutral",
    alert: false
  },
  {
    id: "6",
    date: "2024-04-21T18:30:00Z",
    competitor: "Flipkart",
    subject: "Big Billion Days Teaser Live",
    snippet: "Flipkart has started teasing its flagship Big Billion Days sale with massive offers on smartphones and tablets.",
    url: "https://flipkart.com/sale",
    category: "Launch",
    price: null,
    sentiment: "Positive",
    alert: false
  }
];

export const stats = {
  totalAlerts: 42,
  highPriority: 12,
  positiveSentiment: "65%",
  competitorSplit: [
    { name: 'Amazon', value: 25 },
    { name: 'Flipkart', value: 17 }
  ],
  sentimentTrend: [
    { name: 'Mon', pos: 4, neg: 1 },
    { name: 'Tue', pos: 3, neg: 2 },
    { name: 'Wed', pos: 6, neg: 0 },
    { name: 'Thu', pos: 2, neg: 3 },
    { name: 'Fri', pos: 5, neg: 1 },
  ]
};
