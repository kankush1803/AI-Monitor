# AI Competitive Monitoring Dashboard

A premium, AI-powered dashboard for monitoring competitor activity in real-time. This project visualizes insights extracted from Google Alerts using an automated n8n workflow and LLM-based analysis.

## 🏗️ System Architecture

The monitoring system follows a modular automation pipeline that integrates Google Services, AI models, and custom logic to process competitive intelligence.

```mermaid
graph TD
    subgraph Pipeline [Automation Workflow]
        direction TB
        
        %% Trigger Layer
        Trigger["<b>Schedule Alerts</b><br/>Trigger every 10 min"]:::trigger
        
        %% Ingestion Layer
        Fetch["<b>Get Gmail Alerts</b><br/>Fetch unread messages"]:::source
        
        %% Intelligence Layer
        AI["<b>AI Agent</b><br/>Classify Sentiment & Category"]:::logic
        LLM["<b>Groq Chat Model</b><br/>LLM Backbone"]:::backbone
        
        %% Logic Layer
        Fallback["<b>JS Fallback</b><br/>Error handling & Regex"]:::logic
        Router{"<b>Smart Router</b><br/>alert == true?"}:::routing
        
        %% Action Layer
        Alert["<b>Send Gmail Alert</b><br/>High Priority Notify"]:::action
        Log["<b>Google Sheets</b><br/>Log Alert Data"]:::storage
        
        %% Cleanup Layer
        Post["<b>JS Post-processing</b><br/>Message formatting"]:::storage
        MarkRead["<b>Google Sheets</b><br/>Mark as message read"]:::storage
    end

    %% Connections
    Trigger --> Fetch
    Trigger --> AI
    Fetch --> AI
    AI <--> LLM
    AI --> Fallback
    Fallback --> Router
    
    Router -- "TRUE" --> Alert
    Alert --> Log
    
    Router -- "FALSE" --> Post
    Post --> MarkRead
    MarkRead -.-> Router

    %% Styling
    classDef trigger fill:#4ade80,stroke:#22c55e,color:#fff,stroke-width:2px
    classDef source fill:#3b82f6,stroke:#2563eb,color:#fff,stroke-width:2px
    classDef logic fill:#a855f7,stroke:#9333ea,color:#fff,stroke-width:2px
    classDef routing fill:#f97316,stroke:#ea580c,color:#fff,stroke-width:2px
    classDef action fill:#ef4444,stroke:#dc2626,color:#fff,stroke-width:2px
    classDef storage fill:#14b8a6,stroke:#0d9488,color:#fff,stroke-width:2px
    classDef backbone fill:#1e293b,stroke:#0f172a,color:#fff,stroke-width:2px
```

### 🧩 Workflow Breakdown
1.  **Trigger**: A scheduled cron job initiates the workflow every 10 minutes.
2.  **Ingestion**: Unread Google Alerts are fetched from Gmail via API.
3.  **Intelligence**: An AI Agent uses the **Groq Chat Model** (LLM) to perform sentiment analysis and extract key categories.
4.  **Routing**: A smart routing layer evaluates if the alert warrants immediate notification (e.g., high priority or critical competitor move).
5.  **Actions**: 
    - **High Priority**: Immediate Gmail notification and logging to Google Sheets.
    - **Low Priority**: Processed and marked as read in the system logs.


## ✨ Features
- **Real-time Analytics**: Sentiment trends and market share visualizations.
- **Smart Alert Feed**: Automated categorization and priority ranking of competitor moves.
- **Risk Assessment**: Dedicated view for flagging controversies and negative sentiment.
- **Export to PDF**: Generate high-quality PDF reports of any dashboard view.
- **Premium UI**: Dark-mode aesthetic with glassmorphism and smooth animations.

## 🛠️ Technology Stack
- **Frontend**: React + Vite
- **Styling**: Vanilla CSS (HSL Tokens + Glassmorphism)
- **Charts**: Recharts
- **Icons**: Lucide-React
- **Animations**: Framer Motion
- **Export**: html2canvas + jsPDF

## 🚀 Getting Started
1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
