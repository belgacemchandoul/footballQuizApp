import { useEffect, useState } from "react"
import Player from "../types/players"
import { collection, getDocs } from "firebase/firestore"
import { firestore } from "../config/firebase"
import fetchReferenceData from "../utils/referenceDataFetcher"

const usePlayersData = (): { players: Player[], loading: boolean, error: string | null } => {

  const [players, setPlayers] = useState<Player[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const dataRef = collection(firestore, "players")
    const getPlayersData = async () => {
      const cachedData = localStorage.getItem("playersData")
      if (cachedData) {
        setPlayers(JSON.parse(cachedData) as Player[])
        setLoading(false)
        return
      }
      try {
        const data = await getDocs(dataRef)
        const playersData = await Promise.all(
          data.docs.map(async docSnapshot => {
            const playerData = docSnapshot.data()

            const careerRef = playerData.career
            const career = Array.isArray(careerRef)
              ? (await fetchReferenceData(careerRef))
              : [(await fetchReferenceData(careerRef))];

            return {
              id: docSnapshot.id,
              career,
              goals: playerData.goals || null,
              name: playerData.name,
              retired: playerData.retire
            } as Player
          })
        )
        localStorage.setItem("playersData", JSON.stringify(playersData))
        setPlayers(playersData)

      } catch (err) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError("An unknown error occurred")
        }
      } finally {
        setLoading(false)
      }
    }
    getPlayersData()
  }, [])
  return { players, loading, error }
}

export default usePlayersData