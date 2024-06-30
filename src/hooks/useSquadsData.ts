import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { firestore } from "../config/firebase"
import Squad from "../types/squads"
import fetchReferenceData from "../utils/referenceDataFetcher"

const useSquadsData = (): { squads: Squad[], loading: boolean, error: string | null } => {
  const [squads, setSquads] = useState<Squad[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    const dataRef = collection(firestore, "squads")
    const getSquadsData = async () => {
      const cachedData = localStorage.getItem("squadsData")
      if (cachedData) {
        setSquads(JSON.parse(cachedData) as Squad[])
        setLoading(false)
        return
      }
      try {
        const data = await getDocs(dataRef)
        const squadsData = await Promise.all(
          data.docs.map(async docSnapshot => {
            const squadData = docSnapshot.data()

            const awayTeamRef = squadData.awayTeam
            const homeTeamRef = squadData.homeTeam
            const competitionRef = squadData.logo

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
              awayTeamGoals: squadData.awayTeamGoals,
              homeTeamGoals: squadData.homeTeamGoals,
              competition: squadData.competition,
              phase: squadData.phase,
              missingPlayer: squadData.missingPlayer,
              players: squadData.players
            } as Squad
          })
        )
        localStorage.setItem("squadsData", JSON.stringify(squadsData))
        setSquads(squadsData)
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError("An unknown error occurred")
        }
      }
      finally {
        setLoading(false)
      }

    }
    getSquadsData()
  }, [])
  return { squads, loading, error }
}

export default useSquadsData