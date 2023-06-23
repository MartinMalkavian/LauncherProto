export function rand(max = 100, min = 1) {
	if (max < min) {
		min += max;
		max = min - max;
		min -= max;
	}
	return Math.round(Math.random() * (max - min)) + min;
}

export function dateParse(timestamp: number) {
	const date = new Date(timestamp);
	const year = date.getFullYear();
	const month = date.getMonth() + 1; // Месяцы в JavaScript начинаются с 0
	const day = date.getDate();

	const formattedDate = `${year}-${month < 10 ? "0" + month : month}-${
		day < 10 ? "0" + day : day
	}`;
	return formattedDate;
}
