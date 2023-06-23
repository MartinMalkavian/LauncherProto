import { LazyLoadImage } from "react-lazy-load-image-component";
import { NewsType } from "interface/newsTypes";
import useNews from "hooks/useNews";
import Loading from "components/ui/LoadingData";
import NoData from "components/ui/NoData";
import Error from "components/ui/ErrorData";
import "./news.scss";

export default function News() {
	const { newsList, isLoading, error } = useNews();

	if (isLoading) {
		return <Loading />;
	}

	if (error) {
		return <Error error={error} />;
	}

	return (
		<div className="NewsBlock">
			{!newsList ? (
				<NoData />
			) : (
				newsList.map((news: NewsType) => (
					<div key={news.id} className="News">
						<LazyLoadImage
							className="newsImage"
							alt={news.keyImages[0].type}
							src={
								news.keyImages.find((img) => img.type === "OfferImageWide")?.url
							}
						/>
						<div className="newsTitle bigTitle">{news.title}</div>
						<div className="newsDate text">{news.releaseDate.toString()}</div>
						<div className="newsContent text">{news.description}</div>
						<div className="newsDelimiter">
							<LazyLoadImage
								height={13}
								width={531}
								src={`images/news/newsDelimiter.png`}
							/>
						</div>
					</div>
				))
			)}
		</div>
	);
}
