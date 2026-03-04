import { teacher } from '$lib/data/teacher';
import { getStarDisplay } from '$lib/utils/stars';

export function load() {
	return {
		teacher,
		overallStars: getStarDisplay(teacher.overallRating)
	};
}
