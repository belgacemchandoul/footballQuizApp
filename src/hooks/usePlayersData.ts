import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { firestore } from "../config/firebase";
import Player from "../types/players";
import fetchReferenceData from "../utils/referenceDataFetcher";

const usePlayersData = (): { players: Player[], loading: boolean, error: string | null } => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const dataRef = collection(firestore, "players");

    const unsubscribe = onSnapshot(dataRef, async (snapshot) => {
      try {
        const playersData = await Promise.all(
          snapshot.docs.map(async (docSnapshot) => {
            const playerData = docSnapshot.data();

            const careerRef = playerData.career;
            const career = Array.isArray(careerRef)
              ? await fetchReferenceData(careerRef)
              : [await fetchReferenceData(careerRef)];

            return {
              id: docSnapshot.id,
              career,
              goals: playerData.goals || null,
              name: playerData.name,
              retired: playerData.retire,
            } as Player;
          })
        );

        localStorage.setItem("playersData", JSON.stringify(playersData));
        setPlayers(playersData);
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

  return { players, loading, error };
};

export default usePlayersData;
