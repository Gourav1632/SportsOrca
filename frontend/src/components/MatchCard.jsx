import { useState } from "react";
import {motion, AnimatePresence } from "framer-motion";

function MatchCard({ match }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const formattedDate = new Date(match.date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <motion.div
      initial={{opacity:0,y:"50px"}} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{duration:.3}}
    whileHover={{scale:1.02}} 
    viewport={{ once: true }} 
      className="match-card p-6 border border-gray-200 rounded-2xl shadow-lg flex flex-col items-center w-full max-w-3xl cursor-pointer transition hover:shadow-xl"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <h3 className="font-semibold text-md text-gray-600 mb-4 text-center">
        {match.teams.home.name} vs {match.teams.away.name}
      </h3>

      <div className="flex justify-between items-center w-full gap-6">
        {/* Home Team */}
        <div className="flex flex-col items-center flex-1">
          <img className="h-20 mb-2" src={match.teams.home.logo} alt={match.teams.home.name} />
          <span className="text-sm text-center font-bold">{match.teams.home.name}</span>
        </div>

        {/* Match Info */}
        <div className="flex flex-col items-center justify-center text-center flex-1">
          <p className="font-semibold text-nowrap text-gray-500">{formattedDate}</p>
          <p className="font-semibold text-gray-900">{match.time}</p>
        </div>

        {/* Away Team */}
        <div className="flex flex-col items-center flex-1">
          <img className="h-20 mb-2" src={match.teams.away.logo} alt={match.teams.away.name} />
          <span className="text-sm text-center font-bold">{match.teams.away.name}</span>
        </div>
      </div>

      {/* Expandable details */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full mt-4 overflow-hidden"
          >
            <div className="border-t border-gray-300 pt-4 space-y-4">
              {/* Meta Info Rows */}
              <div className="text-xl flex flex-col justify-between gap-2">
                {/* Venue & Status */}
                <div className="flex flex-col gap-1">
                  <p>
                    <span className="font-semibold text-gray-900">Venue:</span>{" "}
                    {match.venue || "Not available"}
                  </p>
                </div>

                {/* League Info */}
                <div className="flex flex-col gap-1 items-start ">
                  <p>
                    <span className="font-semibold text-gray-900">League:</span>{" "}
                    {match.league?.name || "Unknown"}
                  </p>
                </div>
              </div>

              {/* Country Info */}
              <div className="flex items-center gap-2 pt-2 ">
                {match.country?.flag && (
                  <img
                    src={match.country.flag}
                    alt="Country flag"
                    className="h-5 w-8 object-contain rounded"
                  />
                )}
                <p className="text-sm font-medium">
                  {match.country?.name || "Unknown Country"}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default MatchCard;
