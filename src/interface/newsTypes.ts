export interface NewsType {
	title: string;
	id: string;
	description: string;
	keyImages: KeyImage[];
	releaseDate: Date;
}

export interface KeyImage {
	type: string;
	url: string;
}
