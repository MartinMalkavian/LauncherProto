import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { accountsSliceType } from "interface/accountSliceTypes";
import { Link } from "react-router-dom";

export default function Account({
	account,
	accountLoginHandler,
}: {
	account: accountsSliceType;
	accountLoginHandler: (account: accountsSliceType) => void;
}) {
	return (
		<>
			<div
				className="accountName subTitle"
				onClick={() => accountLoginHandler(account)}
			>
				{account.title}
			</div>
			<Link to={`/about/${account.id}`}>
				<div className="accountDetailsBtn bigTitle">
					<FontAwesomeIcon icon={faEllipsisVertical} />
				</div>
			</Link>
		</>
	);
}
