export default interface Squad {
  awayTeam: {
    name: string,
    logo: string
  },
  awayTeamGoals: number,
  competition: string,
  logo: {
    name: string,
    logo: string
  },
  phase: string,
  homeTeam: {
    name: string,
    logo: string
  },
  homeTeamGoals: number,
  missingPlayer: string,
  players: {
    name: string,
    number: number,
    position: string
  }[]
}