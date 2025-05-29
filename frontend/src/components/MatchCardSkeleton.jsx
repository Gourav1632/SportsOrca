import { motion } from "framer-motion";

function MatchCardSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="match-card p-6 border border-gray-200 rounded-2xl shadow-lg flex flex-col items-center w-full max-w-3xl animate-pulse"
    >
      <div className="h-5 w-2/3 bg-gray-300 rounded mb-4" />

      {/* Top Row: Logos and Info */}
      <div className="flex justify-between items-center w-full gap-6">
        {/* Home Team */}
        <div className="flex flex-col items-center flex-1">
          <div className="h-20 w-20 bg-gray-300 rounded-full mb-2" />
          <div className="h-4 w-24 bg-gray-300 rounded" />
        </div>

        {/* Match Info */}
        <div className="flex flex-col items-center flex-1">
          <div className="h-4 w-28 bg-gray-300 rounded mb-2" />
          <div className="h-4 w-20 bg-gray-300 rounded" />
        </div>

        {/* Away Team */}
        <div className="flex flex-col items-center flex-1">
          <div className="h-20 w-20 bg-gray-300 rounded-full mb-2" />
          <div className="h-4 w-24 bg-gray-300 rounded" />
        </div>
      </div>
    
    </motion.div>
  );
}

export default MatchCardSkeleton;
