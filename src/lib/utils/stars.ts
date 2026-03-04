export function getStarDisplay(score: number): { full: number; half: boolean; empty: number } {
	const full = Math.floor(score);
	const half = score % 1 >= 0.3 && score % 1 < 0.8;
	const empty = 5 - full - (half ? 1 : 0);
	return { full, half, empty };
}
