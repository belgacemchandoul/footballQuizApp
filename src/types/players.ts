export default interface Player {
  career: {
    name: string,
    logo: string
  }[] | null,
  goals: number | null,
  name: string,
  retired: boolean
}