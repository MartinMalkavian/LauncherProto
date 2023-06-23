export type RatingType = {
	name: string;
	race: number;
	level: number;
	status: number;
	pvp: number;
	minutes: number;
	date: string;
};

export type RatingResponseType = {
	[key: string]: RatingType;
};

export type RatingTabsType = "level" | "pvp" | "status";
