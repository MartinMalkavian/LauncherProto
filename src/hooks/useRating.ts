import { fetchRatingData } from "http/firebase.service";
import { ErrorType } from "interface/errorTypes";
import { RatingTabsType, RatingType } from "interface/ratingTypes";
import { useEffect, useState } from "react";

export function useRating(tab: RatingTabsType) {
	const [data, setData] = useState<RatingType[]>();
	const [error, setError] = useState<ErrorType>();

	useEffect(() => {
		fetchRatingData(setData, setError);
	}, []);

	const isLoading = !data && !error ? true : false;

	if (data) {
		data.sort((a: RatingType, b: RatingType) => {
			if (a[tab] < b[tab]) {
				return 1;
			}
			if (a[tab] > b[tab]) {
				return -1;
			}
			return 0;
		});
	}

	return { data, isLoading, error };
}
