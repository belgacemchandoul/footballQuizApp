import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../config/firebase";
import Squad from "../types/squads";
import fetchReferenceData from "../utils/referenceDataFetcher";

const useSquadsData = (): { squads: Squad[], loading: boolean, error: string | null } => {
  const [squads, setSquads] = useState<Squad[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const dataRef = collection(firestore, "squads");

    const unsubscribe = onSnapshot(dataRef, async (snapshot) => {
      try {
        const squadsData = await Promise.all(
          snapshot.docs.map(async (docSnapshot) => {
            const squadData = docSnapshot.data();

            const awayTeamRef = squadData.awayTeam;
            const homeTeamRef = squadData.homeTeam;
            const competitionRef = squadData.logo;

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
              awayTeamGoals: squadData.awayTeamGoals,
              homeTeamGoals: squadData.homeTeamGoals,
              competition: squadData.competition,
              phase: squadData.phase,
              missingPlayer: squadData.missingPlayer,
              players: squadData.players,
            } as Squad;
          })
        );

        localStorage.setItem("squadsData", JSON.stringify(squadsData));
        setSquads(squadsData);
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

  return { squads, loading, error };
};

export default useSquadsData;
