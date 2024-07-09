import { collection, onSnapshot } from "firebase/firestore";
import { firestore } from "../config/firebase";
import { useEffect, useState } from "react";
import Match from "../types/matches";
import fetchReferenceData from "../utils/referenceDataFetcher";

const useMatchesData = (): { matches: Match[], loading: boolean, error: string | null } => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const dataRef = collection(firestore, "matches");

    const unsubscribe = onSnapshot(dataRef, async (snapshot) => {
      try {
        const matchesData = await Promise.all(
          snapshot.docs.map(async (docSnapshot) => {
            const matchData = docSnapshot.data();

            const awayTeamRef = matchData.awayTeam;
            const homeTeamRef = matchData.homeTeam;
            const competitionRef = matchData.logo;

            const [awayTeam, homeTeam, competition] = await Promise.all([
              fetchReferenceData(awayTeamRef) || { name: "", logo: "" },
              fetchReferenceData(homeTeamRef) || { name: "", logo: "" },
              fetchReferenceData(competitionRef) || { name: "", logo: "" },
            ]);

            return {
              id: docSnapshot.id,
              awayTeam,
              homeTeam,
              logo: competition,
              awayTeamGoals: matchData.awayTeamGoals,
              homeTeamGoals: matchData.homeTeamGoals,
              competition: matchData.competition,
              phase: matchData.phase,
            } as Match;
          })
        );

        localStorage.setItem("matchesData", JSON.stringify(matchesData));
        setMatches(matchesData);
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return { matches, loading, error };
};

export default useMatchesData;
