import { useEffect, useState } from 'react';
import axios from 'axios';
import MatchCard from './components/MatchCard';
import MatchCardSkeleton from './components/MatchCardSkeleton';
import { ArrowUp } from 'lucide-react';
import { fetchMatchesRoutes } from './utils/APIRoutes';

function App() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentDate, setCurrentDate] = useState(() => new Date());
  const [showScrollToTop, setShowScrollToTop] = useState(false);


  const fetchMatches = async (date) => {
    try {
      setLoading(true);
      setError('');
      const formattedDate = date.toISOString().split('T')[0];
      const { data } = await axios.get(`${fetchMatchesRoutes}?date=${formattedDate}`);
      if (!data?.response) {
        setError('No match data available.');
        return;
      }
      setMatches((prev) => [...prev, ...data.response]);
    } catch (e) {
      console.error('Error fetching matches:', e);
      setError('Failed to fetch match data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMatches(currentDate);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLoadMore = () => {
    const nextDate = new Date(currentDate);
    // fetch upcoming matches of next day
    nextDate.setDate(currentDate.getDate() + 1);
    setCurrentDate(nextDate);
    fetchMatches(nextDate);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen relative">
      
      <div className="flex justify-center h-full p-4 bg-black w-full sm:w-auto">
        <img
          src="https://sportsorca.com/wp-content/uploads/2025/02/SportsOrca-Logo.png"
          alt="SportsOrca"
          className="h-20 object-contain"
        />
      </div>

      <h1 className="text-3xl font-bold text-center my-4 text-gray-800">
        Upcoming Matches
      </h1>

      <div className="flex flex-col items-center p-4 gap-4 w-full max-w-3xl mx-auto">
        {matches.map((match) => (
          <MatchCard match={match} key={match.id || `${match.date}-${match.teams?.home?.name}`} />
        ))}

        {loading && Array.from({ length: 4 }).map((_, i) => (
          <MatchCardSkeleton key={i} />
        ))}

        {error && <p className="text-red-500 text-sm">{error}</p>}

        {!loading && !error && (
          <button
            onClick={handleLoadMore}
            className="bg-black hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded mt-4"
          >
            Load More
          </button>
        )}
      </div>

      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-black text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </main>
  );
}

export default App;
