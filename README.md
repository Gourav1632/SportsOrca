# 🏀 SportsOrca - Upcoming Matches Viewer - Assignment

This project is a simple full-stack application built with **React** and **Express.js** that displays upcoming basketball matches using the [API-Sports Basketball API](https://www.api-sports.io/documentation/basketball/v1).

## ✨ Features

- View upcoming basketball matches for a given date
- Auto-load matches for subsequent days with a "Load More" button
- Scroll to top button when scrolled down
- Skeleton loaders for a smooth loading experience
- Error handling for empty or failed data
- Backend API proxy using Express to safely fetch data with API keys

## 🛠️ Tech Stack

- Frontend: React, Tailwind CSS, Framer-motion
- Backend: Node.js, Express
- API: [API-Sports Basketball API](https://www.api-sports.io/documentation/basketball/v1)

## 🚀 Getting Started

### Prerequisites

- Node.js & npm installed
- API key from [API-Sports](https://rapidapi.com/api-sports/api/api-basketball)

### 1. Clone the Repository

```bash
git clone https://github.com/Gourav1632/SportsOrca.git
cd SportsOcra
```
### 2. Setup Backend
```bash
cd backend
npm install
```
### 3. Setup .env file
RAPID_API_KEY=your_api_key

### 4. Run Backend
```bash
npm run dev
```
### 5. Setup Frontend
```bash
cd frontend
npm install
npm run dev
```
## Deployed Links

### 1. Frontend 
https://sportsocra-upcoming-basketball-events.netlify.app/

### 2. Backend API
**Note**: Replace the date with correct format: 
https://sportsorca-production.up.railway.app/api/matches?date=yyyy-mm-dd


Made with 💻 by Gourav1632

