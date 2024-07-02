import Match from "../types/matches"
import Player from "../types/players"
import Squad from "../types/squads"

const randomizeId = (dataArray: Player[] | Match[] | Squad[]) => {
  return Math.floor(Math.random() * dataArray.length)
}
export default randomizeId