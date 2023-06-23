export type characterSliceType = {
	id: number;
	name: string;
	sellRestrictionDate: string;
	race: number;
	level: number;
};

export type accountsSliceType = {
	id: number;
	title: string;
	login: string;
	status: number;
	banStatus: number;
	banEndDate: string;
	premiumStatus: number;
	premiumEndDate: string;
	cashShop: number;
	characters: characterSliceType[];
};

export type AddAccountStateType = "code" | "title" | undefined;
