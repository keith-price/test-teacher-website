export function getStarDisplay(score: number): number[] {
	const stars = [];
	for (let i = 1; i <= 5; i++) {
		if (score >= i) {
			stars.push(100);
		} else if (score > i - 1) {
			stars.push((score - (i - 1)) * 100);
		} else {
			stars.push(0);
		}
	}
	return stars;
}
