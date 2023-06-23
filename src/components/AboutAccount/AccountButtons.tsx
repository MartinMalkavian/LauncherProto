import { faSignOutAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { TFunction } from "i18next";
import { accountsSliceType } from "interface/accountSliceTypes";
import { useDispatch } from "react-redux";
import { accountLogoff, accountRemove } from "store/slices/accountsSlice";

import Button from "components/ui/Button";
import { useState } from "react";
import { MessageModalType } from "interface/messageModalTypes";
import MessageModal from "components/MessageModal";
import { disconnectMsg } from "utils/accountUtils";

type PropsType = {
	t: TFunction<"translation", undefined, "translation">;
	account: accountsSliceType;
};

export default function AccountButtons({ t, account }: PropsType) {
	const dispatch = useDispatch();
	const [msg, setMsg] = useState<MessageModalType | undefined>();

	const submitModalHandler = () => {
		// disconnect account
		setMsg(undefined);
		dispatch(accountLogoff(account.id));
	};

	const disconnectAccountHandler = () => {
		if (account.status === 0) {
			return;
		}
		const message = disconnectMsg(t, submitModalHandler, account);
		setMsg(message);
	};

	const removeAccountHandler = () => {
		dispatch(accountRemove(account.id));
	};

	return (
		<div className="accountsButtons">
			<div>
				<Button icon={faSignOutAlt} onClick={disconnectAccountHandler}>
					{t("account_info_offline_btn")}
				</Button>
			</div>
			<div>
				<Button icon={faTrash} onClick={removeAccountHandler}>
					{t("account_info_remove_btn")}
				</Button>
			</div>
			{!msg ? null : <MessageModal message={msg} />}
		</div>
	);
}
