import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import matchesRoute from './routes/matches.js';

dotenv.config();

const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN

const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  FRONTEND_ORIGIN
];

const app = express();

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
}));

app.use(express.json());
app.use('/api/matches', matchesRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
