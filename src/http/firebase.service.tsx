import { Dispatch, SetStateAction } from "react";
import axios from "axios";
import { ErrorType } from "interface/errorTypes";
import { RatingType } from "interface/ratingTypes";

const BASE_URL =
	"https://cerb-dummy-default-rtdb.europe-west1.firebasedatabase.app/ratings.json";

export async function fetchRatingData(
	setData: Dispatch<SetStateAction<RatingType[] | undefined>>,
	setError: Dispatch<SetStateAction<ErrorType | undefined>>
) {
	await axios
		.get(BASE_URL)
		.then((response) => {
			const ratingData: RatingType[] = [];

			for (const key in response.data) {
				ratingData.push(response.data[key]);
			}

			setData(ratingData);
		})
		.catch((error: ErrorType) => {
			setError(error);
		});
}
