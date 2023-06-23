import { createSlice } from "@reduxjs/toolkit";
import { accountsSliceType } from "interface/accountSliceTypes";

const initialState: accountsSliceType[] = [
	{
		id: 1,
		title: "acc title 1",
		login: "login 1",
		status: 1, // 0 - offline, 1 - online, 2 - remote online
		banStatus: 0, // 0 - none, 1 - chat, 2 - account
		banEndDate: "",
		premiumStatus: 1, // 0 - none, 1 - active
		premiumEndDate: "2023-05-30",
		cashShop: 0,
		characters: [
			{
				id: 1,
				name: "cghghfdh",
				sellRestrictionDate: "",
				race: 0,
				level: 50,
			},
			{
				id: 1,
				name: "7jhgtr",
				sellRestrictionDate: "",
				race: 1,
				level: 43,
			},
		],
	},
	{
		id: 2,
		title: "acc title 2",
		login: "login 2",
		status: 0, // 0 - offline, 1 - online, 2 - remote online
		banStatus: 0, // 0 - none, 1 - chat, 2 - account
		banEndDate: "",
		premiumStatus: 0, // 0 - none, 1 - active
		premiumEndDate: "",
		cashShop: 11,
		characters: [
			{
				id: 1,
				name: "yujh",
				sellRestrictionDate: "",
				race: 2,
				level: 50,
			},
			{
				id: 1,
				name: "t34geg",
				sellRestrictionDate: "2023-06-30",
				race: 0,
				level: 50,
			},
			{
				id: 1,
				name: "h657h5r5",
				sellRestrictionDate: "",
				race: 1,
				level: 50,
			},
		],
	},
	{
		id: 3,
		title: "acc title 3",
		login: "login 3",
		status: 2, // 0 - offline, 1 - online, 2 - remote online
		banStatus: 1, // 0 - none, 1 - chat, 2 - account
		banEndDate: "2023-05-11",
		premiumStatus: 0, // 0 - none, 1 - active
		premiumEndDate: "",
		cashShop: 3000,
		characters: [],
	},
	{
		id: 4,
		title: "acc title 4",
		login: "login 4",
		status: 0, // 0 - offline, 1 - online, 2 - remote online
		banStatus: 2, // 0 - none, 1 - chat, 2 - account
		banEndDate: "2023-05-11",
		premiumStatus: 0, // 0 - none, 1 - active
		premiumEndDate: "",
		cashShop: 540,
		characters: [],
	},
];

const accountsSlice = createSlice({
	name: "accounts",
	initialState,
	reducers: {
		updateAccountTitle: (state, { payload }) => {
			const { accountId, title }: { accountId: number; title: string } =
				payload;

			const index = state.findIndex(
				(account: accountsSliceType) => account.id === accountId
			);

			if (index === -1) {
				return state;
			}

			state[index].title = title;
		},
		accountLogon: (state, { payload }) => {
			const accountId: number = payload;

			const index = state.findIndex(
				(account: accountsSliceType) => account.id === accountId
			);

			if (index === -1) {
				return state;
			}
			state[index].status = 1;
		},

		accountLogoff: (state, { payload }) => {
			const accountId: number = payload;

			const index = state.findIndex(
				(account: accountsSliceType) => account.id === accountId
			);

			if (index === -1) {
				return state;
			}
			state[index].status = 0;
		},

		accountListUpdate: (_, { payload }: { payload: accountsSliceType[] }) => {
			return payload;
		},

		accountAdd: (state, { payload }) => {
			const accountId = Math.round(Math.random() * 10000);
			const account = {
				id: accountId,
				title: payload.title,
				login: "login 1",
				status: 0, // 0 - offline, 1 - online, 2 - remote online
				banStatus: 0, // 0 - none, 1 - chat, 2 - account
				banEndDate: "",
				premiumStatus: 0, // 0 - none, 1 - active
				premiumEndDate: "",
				cashShop: 0,
				characters: [],
			};
			state.push(account);
		},

		accountRemove: (state, { payload }) => {
			const accountId: number = payload;
			const newState = state.filter((account) => account.id !== accountId);
			return newState;
		},
	},
});

const { reducer, actions } = accountsSlice;
export const {
	updateAccountTitle,
	accountAdd,
	accountRemove,
	accountLogon,
	accountLogoff,
	accountListUpdate,
} = actions;
export default reducer;
