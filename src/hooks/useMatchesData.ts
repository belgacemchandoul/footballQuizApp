import { collection, getDocs } from "firebase/firestore"
import { firestore } from "../config/firebase"
import { useEffect, useState } from "react"
import Match from "../types/matches"
import fetchReferenceData from "../utils/referenceDataFetcher"

const useMatchesData = (): { matches: Match[], loading: boolean, error: string | null } => {
  const [matches, setMatches] = useState<Match[]>([])
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const dataRef = collection(firestore, "matches")
    const getMatchesData = async () => {
      const cachedData = localStorage.getItem("matchesData")
      if (cachedData) {
        setMatches(JSON.parse(cachedData) as Match[])
        setLoading(false)
        return
      }
      try {
        const data = await getDocs(dataRef)
        const matchesData = await Promise.all(
          data.docs.map(async (docSnapshot) => {
            const matchData = docSnapshot.data()

            const awayTeamRef = matchData.awayTeam
            const homeTeamRef = matchData.homeTeam
            const competitionRef = matchData.logo

            const [awayTeam, homeTeam, competition] = await Promise.all([
              fetchReferenceData(awayTeamRef) || { name: "", logo: "" },
              fetchReferenceData(homeTeamRef) || { name: "", logo: "" },
              fetchReferenceData(competitionRef) || { name: "", logo: "" },
            ])
            return {
              awayTeam,
              homeTeam,
              logo: competition,
              id: docSnapshot.id,
              awayTeamGoals: matchData.awayTeamGoals,
              homeTeamGoals: matchData.homeTeamGoals,
              competition: matchData.competition,
              phase: matchData.phase,
            } as Match
          })
        )
        localStorage.setItem("matchesData", JSON.stringify(matchesData))
        setMatches(matchesData)
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      }
      finally {
        setLoading(false)
      }
    }
    getMatchesData()
  }, [])
  return { matches, loading, error }
}

export default useMatchesData