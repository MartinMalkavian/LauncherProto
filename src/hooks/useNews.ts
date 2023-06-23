import { fetchNews } from "http/news.service";
import { ErrorType } from "interface/errorTypes";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "store";

export default function useNews() {
	const newsList = useSelector((state: RootState) => state.news);
	const [error, setError] = useState<ErrorType>();
	const dispatch = useDispatch();

	useEffect(() => {
		if (newsList.length === 0) {
			fetchNews(dispatch, setError);
		}
	}, [newsList, dispatch]);

	const isLoading = !newsList ? true : false;

	return { newsList, isLoading, error };
}
