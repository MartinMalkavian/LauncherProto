export function accountCode(value: string) {
	return /^[a-zA-Z0-9]{6}$/.test(value);
}

export function accountTitle(value: string) {
	return /^[a-zA-Z0-9]{5,20}$/.test(value);
}
