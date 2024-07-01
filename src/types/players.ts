export default interface Player {
  career: {
    name: string,
    logo: string
  }[],
  goals: number | null,
  name: string,
  retired: boolean
}