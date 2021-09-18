export default function calculateScore(
  pageScore: number,
  vote: number,
  usersLength: number
): number {
  let calculatedScore = (pageScore * usersLength + vote) / (usersLength + 1);
  return calculatedScore;
}
