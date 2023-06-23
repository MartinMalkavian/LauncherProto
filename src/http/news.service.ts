import { AnyAction } from "@reduxjs/toolkit";
import axios from "axios";
import { ErrorType } from "interface/errorTypes";
import { NewsType } from "interface/newsTypes";
import { Dispatch, SetStateAction } from "react";
import { newsAdd } from "store/slices/newsSlice";

export async function getNews() {
	return await axios.get("https://epic-store-games.p.rapidapi.com/onSale", {
		params: {
			searchWords: "Free",
			categories: "Games",
			locale: "us",
			country: "us",
		},
		headers: {
			"X-RapidAPI-Key": "47bfae1f09mshc601a965be9279fp10b4bbjsn11480b836087",
			"X-RapidAPI-Host": "epic-store-games.p.rapidapi.com",
		},
	});
}

export async function fetchNews(
	dispatch: Dispatch<AnyAction>,
	setError: Dispatch<SetStateAction<ErrorType | undefined>>
) {
	await axios
		.get("https://epic-store-games.p.rapidapi.com/onSale", {
			params: {
				searchWords: "Free",
				categories: "Games",
				locale: "us",
				country: "us",
			},
			headers: {
				"X-RapidAPI-Key": "47bfae1f09mshc601a965be9279fp10b4bbjsn11480b836087",
				"X-RapidAPI-Host": "epic-store-games.p.rapidapi.com",
			},
		})
		.then((response) => {
			const newsData: NewsType[] = [];
			response.data.map((news: any) =>
				newsData.push({
					title: news.title,
					id: news.id,
					description: news.description,
					keyImages: news.keyImages,
					releaseDate: news.releaseDate,
				})
			);
			dispatch(newsAdd(newsData));
		})
		.catch((error: ErrorType) => {
			setError(error);
		});
}
