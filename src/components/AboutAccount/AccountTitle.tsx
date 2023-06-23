import { useState } from "react";
import { TFunction } from "i18next";
import { accountsSliceType } from "interface/accountSliceTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import RenameAccount from "./RenameAccount";
import { useDispatch } from "react-redux";
import { updateAccountTitle } from "store/slices/accountsSlice";

export default function AccountTitle({
	t,
	account,
}: {
	t: TFunction<"translation", undefined, "translation">;
	account: accountsSliceType;
}) {
	const dispatch = useDispatch();

	const [editAccountTitle, setEditAccountTitle] = useState(false);

	const editAccountHandler = (newTitle?: string, accountId?: number) => {
		if (newTitle !== undefined && accountId !== undefined) {
			const obj = {
				accountId: accountId,
				title: newTitle,
			};
			dispatch(updateAccountTitle(obj));
		}
		setEditAccountTitle(false);
	};

	return (
		<div className="accountInfoTitle subTitle">
			{t("account_info")}
			<span onClick={() => setEditAccountTitle(true)}>
				{account.title}
				<FontAwesomeIcon icon={faPen} />
			</span>
			{editAccountTitle ? (
				<RenameAccount
					onClickHandler={editAccountHandler}
					title={account.title}
					accountId={account.id}
				/>
			) : null}
		</div>
	);
}
