import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv'

dotenv.config()

const RAPID_API_KEY= process.env.RAPID_API_KEY

const router = express.Router();

router.get('/', async (req, res) => {
  console.log("Fetching matches...")
  const { date } = req.query;
  if (!date) {
    return res.status(400).json({ error: 'Date query parameter is required.' });
  }

  try {
    const url = `https://v1.basketball.api-sports.io/games`;
    const response = await axios.get(url, {
      params: {
        date: date,
      },
      headers: {
        'x-rapidapi-host': 'v1.basketball.api-sports.io',
        'x-rapidapi-key': RAPID_API_KEY,
      },
    });
    let matches = response.data.response || [];
    // Filter only upcoming matches if it's for today
    const today = new Date().toISOString().split('T')[0];
    if (date === today) {
      const now = new Date();
      matches = matches.filter((match) => {
        const matchTime = new Date(match.date);
        return matchTime > now;
      });
    }
    res.json({response : matches});
  } catch (err) {
    console.error('Failed to fetch matches:', err.message);
    res.status(500).json({ error: 'Failed to fetch matches' });
  }
});

export default router;
